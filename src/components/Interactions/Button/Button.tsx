import { PureComponent, ReactNode } from "react";
import styles from "./Button.module.scss";

class Button extends PureComponent<ButtonProps, ButtonState> {
  get className(): string {
    return `${styles["btn"]} ${this.props.className}`;
  }

  render(): ReactNode {
    return (
      <button
        {...this.props}
        className={this.className}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
