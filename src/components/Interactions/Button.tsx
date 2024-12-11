import BaseButton, { BaseButtonProps, BaseButtonState } from "./BaseButton";

export interface ButtonProps extends BaseButtonProps {}
export interface ButtonState extends BaseButtonState {}

class Button<Props extends ButtonProps = unknown, State extends ButtonState = unknown> extends BaseButton<ButtonProps & Props, ButtonState & State> {
  constructor(props: Readonly<ButtonProps & Props>) {
    super(props);
  }
}

export default Button;
