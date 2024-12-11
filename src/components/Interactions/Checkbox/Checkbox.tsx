import { PureComponent } from "react";
import { classNameExtender, classNameToggler } from "utils/hooks/classNameHooks";
import { COMPONENT } from "services/utils/Injectors";
import styles from "./Checkbox.module.scss";
import Button from "components/Interactions/Button/Button";
import CheckboxSVG from "components/Interactions/CheckboxSVG/CheckboxSVG";

@COMPONENT<Checkbox>({
  template: (_this) => {
    return (
      <Button
        id={_this.props.id}
        onClick={_this.props.onClick}
        aria-checked={_this.props.isChecked}
        className={_this.computedCustomCheckBoxClassName}
        title={_this.props.title}
      >
        <CheckboxSVG isChecked={_this.props.isChecked} />
      </Button>
    );
  }
})
class Checkbox extends PureComponent<CheckboxProps> {
  get computedCustomCheckBoxClassName(): string {
    return classNameExtender(classNameToggler(styles["custom-checkbox"], styles["custom-checkbox--checked"], this.props.isChecked), this.props.className);
  }
}

export default Checkbox;
