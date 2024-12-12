import { PureComponent, ReactNode } from "react";
import styles from "./MobileNav.module.scss";

class MobileNav extends PureComponent<MobileNavProps, MobileNavState> {
  render(): ReactNode {
    return (
      <div className={styles["container"]}>
        MobileNav component
      </div>
    );
  }
}

export default MobileNav;