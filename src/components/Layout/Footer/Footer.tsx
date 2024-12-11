import { PureComponent, ReactNode } from "react";
import styles from "./Footer.module.scss";

class Footer extends PureComponent<FooterProps, FooterState> {
  render(): ReactNode {
    return (
      <div className={styles["container"]}>
        <h1>Footer component</h1>
        <h1>Footer component</h1>
        <h1>Footer component</h1>
        <h1>Footer component</h1>
        <h1>Footer component</h1>
        <h1>Footer component</h1>
        <h1>Footer component</h1>
        <h1>Footer component</h1>
        <h1>Footer component</h1>
        <h1>Footer component</h1>
      </div>
    );
  }
}

export default Footer;
