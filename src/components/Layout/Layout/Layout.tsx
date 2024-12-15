import { ReactNode } from "react";
import styles from "./Layout.module.scss";
import Main from "components/Layout/Main/Main";
import UIHeader from "components/Layout/Header/Header/Header";
import InternetState from "components/InternetState/InternetState";

function Layout(props: LayoutProps): ReactNode {
  return (
    <div className={styles["layout"]}>
      <UIHeader />
      <Main routes={props.routes} />
      <InternetState />
    </div>
  );
}

export default Layout;
