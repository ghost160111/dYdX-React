import { PureComponent, ReactNode } from "react";
import { classNameToggler } from "utils/hooks/classNameHooks";
import styles from "./CheckboxSVG.module.scss";

class CheckboxSVG extends PureComponent<CheckboxSVGProps> {
  get computedSvgClassName(): string {
    return classNameToggler(styles["custom-checkbox__svg"], styles["custom-checkbox__svg--checked"], this.props.isChecked);
  }

  render(): ReactNode {
    return (
      <svg
        className={this.computedSvgClassName}
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
      >
        <path
          d="M13 1L5.70711 8.29289C5.31658 8.68342 4.68342 8.68342 4.29289 8.29289L1 5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
}

export default CheckboxSVG;
