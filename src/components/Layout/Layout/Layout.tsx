import { PureComponent, ReactNode } from "react";
import styles from "./Layout.module.scss";
import Main from "components/Layout/Main/Main";
import UIHeader from "components/Layout/Header/Header";

class Layout extends PureComponent<LayoutProps, LayoutState> {
  render(): ReactNode {
    return (
      <div className={styles["layout"]}>
        <UIHeader title="Header Title" />
        <Main routes={this.props.routes} />
      </div>
    );
  }
}

export default Layout;
