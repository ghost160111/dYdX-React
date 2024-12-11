import i18next from "i18next";
import uniqueIdGenerator from "utils/hooks/uniqueIdGenerator";

function patchTemplate(template: string, context: WebComponent): string {
  let transformedTemplate = template;

  transformedTemplate = transformedTemplate.replace(/ref="([^"]*)"/g, (match, refValue) => {
    const hasExistingId = refValue.includes("_");

    if (!hasExistingId) {
      return `ref="${refValue}_${context.computedIDRef}"`;
    } else {
      return `ref="${refValue.split("_")[0]}_${context.computedIDRef}"`;
    }
  });

  const templateVariableRegex = /\{\{\s*([\w.]+)\s*\}\}/g;
  transformedTemplate = transformedTemplate.replace(templateVariableRegex, (match, variable) => {
    const parts = variable.split('.');

    let value = context;
    for (const part of parts) {
      value = value[part];
      if (value === undefined || value === null) {
        return "";
      }
    }

    return String(`<span watcher="${variable}_${context.computedIDRef}"></span>${value}`);
  });

  return transformedTemplate;
}

function DEFINE_ELEMENT(options: {
  selector: string;
  template?: string;
  useShadowDOM?: boolean;
  uniqueID?: string;
}): (constructor: CustomElementConstructor) => void {
  const { selector, template, useShadowDOM, uniqueID } = options;

  return function(constructor: CustomElementConstructor): void {
    if (uniqueID) {
      constructor.prototype.computedIDRef = uniqueID;
    } else {
      constructor.prototype.computedIDRef = uniqueIdGenerator(10);
    }

    if (template && constructor.prototype.render()) {
      throw new TypeError("Found template in DEFINE_ELEMENT decorator and render method in class instance simultaneously, choose only one of them!");
    }

    const patchedTemplate: string = /*html*/`
      ${(constructor["styles"] ? `<style>${constructor["styles"]}</style>` : "")}
      ${template}
    `;

    if (template) {
      if (useShadowDOM) {
        constructor.prototype.setShadowRoot = useShadowDOM;
        constructor.prototype.template = patchedTemplate;
      } else {
        constructor.prototype.template = patchedTemplate;
      }
    }

    customElements.define(selector, constructor);
  }
}

function updateDOM(context: WebComponent, propertyKey: string, value: string): void {
  const watchRefs: NodeListOf<HTMLSpanElement> = (context.shadowRoot)
    ? context.shadowRoot.querySelectorAll(`span[watcher="${propertyKey}_${context.computedIDRef}"]`)
    : context.querySelectorAll(`span[watcher="${propertyKey}_${context.computedIDRef}"]`);

  if (watchRefs.length > 0) {
    watchRefs.forEach((ref: HTMLSpanElement) => {
      const siblingRefNode = ref.nextSibling;
      siblingRefNode.textContent = String(" " + value);
    });
  }
}

function triggerWatcher(context: WebComponent, propertyKey: string, newValue: unknown, oldValue: unknown): void {
  if (!context.watch) return;
  if (!context.watch[propertyKey]) return;
  context.watch[propertyKey](newValue, oldValue);
}

function PROPERTY<T>(
  config: {
    type: T,
    logger?: boolean,
    watcher?: (newValue: T | unknown, oldValue: T | unknown) => void
  }
): (target: WebComponent, propertyKey: string) => void {
  return function(target: WebComponent, propertyKey: string): void {
    const privateProp = Symbol(propertyKey);
    target[privateProp] = target[propertyKey];

    Object.defineProperty(target, propertyKey, {
      get() {
        if (config.logger) {
          console.log(`Getting ${propertyKey}:`, this[privateProp]);
        }
        return this[privateProp];
      },
      set(value: unknown) {
        if (typeof value === config.type["name"].toLowerCase() && this[privateProp] !== value) {
          if (config.logger) {
            console.log(`Setting ${propertyKey} to:`, value);
          }
          if (config.watcher) {
            config.watcher(value as T, this[privateProp]);
          } else {
            triggerWatcher(this, propertyKey, value, this[privateProp]);
          }
          this[privateProp] = value;
          updateDOM(this, propertyKey, String(value));
        } else {
          console.warn(`Invalid type for ${propertyKey}. Expected ${config.type["name"]}.`);
        }
      },
      enumerable: true,
      configurable: true,
    });
  }
}

class Component<T extends WebComponent> {
  context: T;

  constructor(context: T) {
    this.context = context;
  }
}

class StyleManager<T extends WebComponent> extends Component<T> {
  stylesheet: CSSStyleSheet;

  constructor(context: T) {
    super(context);
  }

  setupStyleSheets(): void {
    this.stylesheet = new CSSStyleSheet();
    this.stylesheet.replaceSync(WebComponent?.styles);
    this.context.shadowRoot.adoptedStyleSheets = [this.stylesheet];
  }

  cleanUpStyleSheets(): void {
    this.context.shadowRoot.adoptedStyleSheets = [];
    this.stylesheet = null;
  }
}

class DOMHandler<T extends WebComponent> extends Component<T> {
  refs: Record<string, HTMLElement> = {};

  constructor(context: T) {
    super(context);
  }

  protected observeRefs(useShadowDOM: boolean): void {
    const refElements: NodeListOf<HTMLElement> = useShadowDOM
      ? this.context.shadowRoot.querySelectorAll("[ref]")
      : this.context.querySelectorAll("[ref]");

    if (refElements.length < 0) return;

    for (let i = 0; i < refElements.length; ++i) {
      const ref: HTMLElement = refElements[i];
      const attrValue: string = ref.getAttribute("ref");
      const splittedAttrValue: string[] = attrValue.split("_");
      const originalKey: string = splittedAttrValue[0];
      const refID: string = splittedAttrValue[1];

      if (refID === this.context.computedIDRef) {
        this.refs[originalKey] = ref;
        this.context.refs = this.refs;
      }
    }
  }
}

class LightDOMHandler<T extends WebComponent> extends DOMHandler<T> {
  constructor(context: T) {
    super(context);
  }

  setup(): void {
    this.observeRefs(false);
  }
}

class ShadowDOMHandler<T extends WebComponent> extends DOMHandler<T> {
  constructor(context: T) {
    super(context);
  }

  setup(): void {
    this.observeRefs(true);
  }
}

class I18NextLocalization<T extends WebComponent> extends Component<T> {
  i18next = i18next;

  constructor(context: T) {
    super(context);
  }

  t(key: string, options?: never): void {
    this.i18next.t(key, options);
  }
}

class WebComponent extends HTMLElement {
  static styles: string;

  private template: string;
  private setShadowRoot: boolean;

  lightDOM: LightDOMHandler<WebComponent>;
  shadowDOM: ShadowDOMHandler<WebComponent>;
  styleManager: StyleManager<WebComponent>;
  i18n: I18NextLocalization<WebComponent>;
  refs: Record<string, HTMLElement>;
  computedIDRef: string;
  watch: Record<string, (newValue: unknown, oldValue: unknown) => void>;

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
    this.refs = {};
    if (this.setShadowRoot) {
      this.attachShadow({ mode: "open" });
      this.styleManager = new StyleManager(this);
      this.styleManager.setupStyleSheets();
    }
  }

  private processRender(): void {
    const template: HTMLTemplateElement = document.createElement("template");
    const patchedTemplate: string = patchTemplate(this.template ?? this.render(), this);
    template.innerHTML = patchedTemplate;
    const copyTemplate: Node = template.content.cloneNode(true);

    if (this.setShadowRoot) {
      this.shadowRoot.appendChild(copyTemplate);
    } else {
      this.appendChild(copyTemplate);
    }
  }

  connectedCallback(): void {
    this.processRender();
    if (this.setShadowRoot) {
      this.shadowDOM = new ShadowDOMHandler(this);
      this.shadowDOM.setup();
    } else {
      this.lightDOM = new LightDOMHandler(this);
      this.lightDOM.setup();
    }
  }

  disconnectedCallback(): void {
    if (this.setShadowRoot) {
      this.styleManager.cleanUpStyleSheets();
      this.styleManager = null;
      this.shadowDOM = null;
      this.lightDOM = null;
      this.refs = {};
    }
  }

  render(): string {
    return "";
  }

  /**
   * Is called whenever provided observed attributes is changed
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  attributeChangedCallback(attrName: string, oldValue: unknown, newValue: unknown): void {}
}

export {
  DEFINE_ELEMENT,
  PROPERTY,
  WebComponent,
};
