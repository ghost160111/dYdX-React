import { DEFINE_ELEMENT, PROPERTY, WebComponent } from "web-components/utils/WebComponentModules";

@DEFINE_ELEMENT({
  selector: "header-element",
  template: /*html*/`
    <header ref="header">This is header {{ counter }}</header>
    <button class="incrementor" ref="incrementor">Increment: {{ counter }}</button>
    <h1>Counter: {{ counter }}</h1>
  `,
})
class HeaderElement extends WebComponent {
  @PROPERTY({ type: Number })
  counter: number = 0;

  watch: Record<string, (newValue: unknown, oldValue: unknown) => void> = {
    "counter": (newValue: number, oldValue: number) => {
      console.log(newValue, oldValue, "COUNTER");
    }
  };

  connectedCallback(): void {
    super.connectedCallback();
    (this.refs["incrementor"] as HTMLButtonElement).addEventListener("click", this.increment);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    (this.refs["incrementor"] as HTMLButtonElement).addEventListener("click", this.increment);
  }

  increment = (): void => {
    this.counter++;
  };
}

export default HeaderElement;
