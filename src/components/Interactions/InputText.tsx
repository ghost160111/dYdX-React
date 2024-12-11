import { createRef, InputHTMLAttributes, PureComponent, ReactNode, RefObject } from "react";
import { autoBindMethods } from "utils/hooks/bind";
import "./InputText.scss";

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  fullwidth?: boolean;
}

class InputText extends PureComponent<InputTextProps> implements BindMethods {
  inputRef: RefObject<HTMLInputElement> = createRef<HTMLInputElement>();

  methods: BindItem[] = [
    { func: this.handleKeydown, context: this },
  ];

  get className(): string {
    return this.props.className ?? "";
  }

  get baseClassName(): string {
    return "react-input react-input--text";
  }

  get computedFullWidth(): string {
    return (this.props.fullwidth) ? "react-input--full-width" : "";
  }

  get inputClassName(): string {
    return `${this.baseClassName} ${this.computedFullWidth} ${this.className}`;
  }

  constructor(props: Readonly<InputTextProps>) {
    super(props);
    autoBindMethods(this);
  }

  render(): ReactNode {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fullwidth, ...rest } = this.props; // Exclude fullwidth from rest

    return (
      <input
        {...rest}
        type="text"
        className={this.inputClassName}
        ref={this.inputRef}
      />
    );
  }

  componentDidMount(): void {
    this.inputRef.current?.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount(): void {
    this.inputRef.current?.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown(evt: KeyboardEvent): void {
    if (evt.key === "Escape") {
      this.inputRef.current?.blur();
    }
  }
}

export default InputText;
