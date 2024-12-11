import { PureComponent, ReactNode } from "react";
import styles from "./Navigation.module.scss";

class Navigation extends PureComponent<NavigationProps, NavigationState> {
  render(): ReactNode {
    return (
      <div className={styles["container"]}>
        Navigation component
      </div>
    );
  }
}

export default Navigation;