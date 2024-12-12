import { PureComponent, ReactNode } from "react";
import styles from "./MobileMenu.module.scss";

class MobileMenu extends PureComponent<MobileMenuProps, MobileMenuState> {
  render(): ReactNode {
    return (
      <div className={styles["container"]}>
        MobileMenu component
      </div>
    );
  }
}

export default MobileMenu;