import CheckboxSVG from "components/Interactions/CheckboxSVG/CheckboxSVG";
import { PureComponent, ReactNode } from "react";
import { classNameExtender, classNameToggler } from "utils/hooks/classNameHooks";
import Button from "../Button";
import styles from "./Checkbox.module.scss";

class Checkbox extends PureComponent<CheckboxProps> {
  get computedCustomCheckBoxClassName(): string {
    return classNameExtender(classNameToggler(styles["custom-checkbox"], styles["custom-checkbox--checked"], this.props.isChecked), this.props.className);
  }

  render(): ReactNode {
    return (
      <Button
        id={this.props.id}
        onClick={this.props.onClick}
        aria-checked={this.props.isChecked}
        className={this.computedCustomCheckBoxClassName}
        title={this.props.title}
      >
        <CheckboxSVG
          isChecked={this.props.isChecked}
        />
      </Button>
    );
  }
}

export default Checkbox;
