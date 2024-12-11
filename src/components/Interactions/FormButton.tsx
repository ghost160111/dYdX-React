import { ReactNode } from "react";
import { classNameExtender } from "utils/hooks/classNameHooks";
import BaseButton, { BaseButtonProps, BaseButtonState } from "./BaseButton";

export interface FormButtonProps extends BaseButtonProps {
  fullwidth?: boolean;
}
export interface FormButtonState extends BaseButtonState {}

class FormButton<Props extends FormButtonProps = unknown, State extends FormButtonState = unknown> extends BaseButton<FormButtonProps & Props, FormButtonState & State> {
  constructor(props: Readonly<FormButtonProps & Props>) {
    super(props);
  }

  render(): ReactNode {
    const {
      type,
      disabled,
      children,
      className,
      id,
      title,
      fullwidth,
      ...rest
    } = this.props;

    return (
      <button
        className={classNameExtender(`react-custom-btn ${fullwidth ? "react-custom-btn--full-width" : ""}`, className)}
        type={type ?? "button"}
        disabled={disabled}
        id={id}
        ref={this.btnRef}
        title={title}
        onClick={this.handleMouseClick}
        onKeyDown={this.handleEscapeKeydown}
        {...rest}
      >
        {children}
      </button>
    );
  }
}

export default FormButton;
