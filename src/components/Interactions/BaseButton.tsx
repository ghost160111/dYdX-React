import {
  AriaAttributes,
  createRef,
  DOMAttributes,
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  PureComponent,
  ReactNode,
  RefObject,
} from "react";
import { bind } from "utils/hooks/bind";
import { escapeKeyHandlerReact } from "utils/hooks/escapeKeyHandler";
import "./BaseButton.scss";

export interface BaseButtonProps
  extends
    DOMAttributes<HTMLButtonElement>,
    AriaAttributes
{
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  children?: ReactNode | string;
  callbacks?: ((event?: unknown) => void)[];
  className?: string;
  id?: string;
  title?: string;
  style?: HTMLAttributes<HTMLButtonElement>;
  refel?: RefObject<HTMLButtonElement>;
}

export interface BaseButtonState {}

abstract class BaseButton<
  Props extends BaseButtonProps = unknown,
  State extends BaseButtonState = unknown
> extends PureComponent<BaseButtonProps & Props, BaseButtonState & State> {
  public btnRef: RefObject<HTMLButtonElement> = this.props.refel ?? createRef<HTMLButtonElement>();

  constructor(props: Readonly<BaseButtonProps & Props>) {
    super(props);
    bind(this.handleMouseClick, this);
    bind(this.handleEscapeKeydown, this);
  }

  render(): ReactNode {
    const { type, disabled, children, className, id, title, style, ...rest } = this.props;

    return (
      <button
        className={className}
        type={type ?? "button"}
        disabled={disabled}
        id={id}
        ref={this.btnRef}
        title={title}
        onClick={this.handleMouseClick}
        onKeyDown={this.handleEscapeKeydown}
        style={style}
        {...rest}
      >
        {children}
      </button>
    );
  }

  useCallbacks(event: MouseEvent<HTMLButtonElement>): void {
    if (this.props.callbacks) {
      this.props.callbacks.forEach((callback) => callback(event));
    }
  }

  handleMouseClick(evt: MouseEvent<HTMLButtonElement>): void {
    this.useCallbacks(evt);
  }

  handleEscapeKeydown(evt: KeyboardEvent<HTMLButtonElement>): void {
    escapeKeyHandlerReact(() => {
      this.btnRef.current?.blur();
    }, evt);
  }
}

export default BaseButton;
