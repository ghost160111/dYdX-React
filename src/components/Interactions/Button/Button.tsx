import { PureComponent } from "react";
import { COMPONENT } from "services/utils/Injectors";
import styles from "./Button.module.scss";

@COMPONENT<Button>({
  template: (_this) => {
    return (
      <button
        {..._this.props}
        className={_this.className}
      >
        {_this.props.children}
      </button>
    );
  }
})
class Button extends PureComponent<ButtonProps, ButtonState> {
  get className(): string {
    return `${styles["btn"]} ${this.props.className}`;
  }
}

export default Button;
