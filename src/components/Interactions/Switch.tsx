import { PureComponent, ReactNode } from "react";
import styles from "./Switch.module.scss";

export interface SwitchProps extends ClassNameExtenderProps {
  title?: string;
  id?: string;
  isActive: boolean;
  onClick?: () => void;
}

class Switch extends PureComponent<SwitchProps> {
  get computedIsActive(): string {
    return (this.props.isActive)
      ? `${styles["switch-btn"]} ${styles["switch-btn--active"]}`
      : styles["switch-btn"];
  }

  get computedCircleIsActive(): string {
    return (this.props.isActive)
      ? `${styles["switch-btn__circle"]} ${styles["switch-btn__circle--active"]}`
      : styles["switch-btn__circle"];
  }

  get computedClassName(): string {
    return `${this.computedIsActive} ${this.props.className}`;
  }

  render(): ReactNode {
    return (
      <button
        className={this.computedClassName}
        type="button"
        onClick={this.props.onClick}
        title={this.props.title}
        id={this.props.id}
      >
        Switch is {this.props.isActive ? "on" : "off"}
        <div className={this.computedCircleIsActive} />
      </button>
    );
  }
}

export default Switch;
