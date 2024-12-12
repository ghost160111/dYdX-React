import { PureComponent, ReactNode } from "react";
import { generateNavLinks } from "./Navigation.utils";
import styles from "./Navigation.module.scss";

class Navigation extends PureComponent<NavigationProps, NavigationState> {
  state: Readonly<NavigationState> = {
    navList: generateNavLinks(this),
  };

  render(): ReactNode {
    return (
      <nav className={styles["nav"]}>
        <ul className={styles["nav__list"]}></ul>
      </nav>
    );
  }
}

export default Navigation;
