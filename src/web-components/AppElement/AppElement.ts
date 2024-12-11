import { DEFINE_ELEMENT, PROPERTY, WebComponent } from "web-components/utils/WebComponentModules";

@DEFINE_ELEMENT({
  selector: "app-element",
  template: /*html*/`
    <h1 class="title" ref="title">App Element using template</h1>
    <button class="incrementor" ref="btn" type="button">Increment: {{ incValue }}</button>
    <button class="incrementor" ref="btn-decrement" type="button">Decrement: {{ incValue }}</button>
    <h2>Value increment property value, {{ valueInc }}</h2>
    <header-element ref="header-element"></header-element>
  `,
})
class AppElement extends WebComponent {
  static styles: string = /*css*/`
    .incrementor {
      padding: 10px;
      background: var(--green);
      color: var(--white);
      border-radius: 10px;
    }

    span[watcher] {
      margin-left: 1px;
    }
  `;

  @PROPERTY({
    type: Number,
    logger: true,
    watcher: (newValue: number, oldValue: number) => {
      console.log(newValue, oldValue);
    }
  })
  incValue: number = 0;

  @PROPERTY({ type: Number })
  valueInc: number = 11;

  watch: Record<string, (newValue: unknown, oldValue: unknown) => void> = {
    "incValue": (newValue, oldValue) => {
      console.log(newValue, oldValue, "incValue");
    },
    "valueInc": (newValue, oldValue) => {
      console.log(newValue, oldValue, "valueInc");
    }
  };

  connectedCallback(): void {
    super.connectedCallback();
    this.refs["btn"]?.addEventListener("click", this.increment);
    this.refs["btn-decrement"]?.addEventListener("click", this.decrement);
    console.log(this.refs, this.watch);
  }

  disconnectedCallback(): void {
    this.refs["btn"]?.removeEventListener("click", this.increment);
    this.refs["btn-decrement"]?.removeEventListener("click", this.decrement);
    super.disconnectedCallback(); // call after all cleanups
  }

  increment = (): void => {
    this.incValue++;
    this.valueInc++;
  }

  decrement = (): void => {
    this.valueInc--;
    this.incValue--;
  }
}

export default AppElement;
