import { createRef, RefObject } from "react";
import { Outlet, Routes } from "react-router-dom";
import { withContext } from "components/Context/ContextInjector";
import { HeaderRefContext, MainRefContext } from "components/Context/ContextCollection";
import { COMPONENT } from "services/utils/Injectors";
import styles from "./Main.module.scss";
import Footer from "components/Layout/Footer/Footer/Footer";
import UIReact from "utils/classes/UIReact";

@COMPONENT<Main>({
  template: (_this) => {
    return (
      <div className={styles["main-wrap"]} ref={_this.mainWrap}>
        <main className={styles["main"]}>
          <Routes>
            {_this.props.routes}
          </Routes>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }
})
class Main extends UIReact<MainProps, MainState> {
  mainWrap: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
  mainWrapMargin: number = 24;
  appRef: HTMLElement;

  componentDidMount(): void {
    this.appRef = document.getElementById("app");
    this.scrollHandler();
    this.props.setMainRef(this.mainWrap);
    this.appRef.addEventListener("scroll", this.scrollHandler, { signal: this.controller.signal });
  }

  scrollHandler = (): void => {
    if (!this.appRef) return;
    const scrollY: number = this.appRef.scrollTop;
    if (scrollY >= 30) {
      this.props.setHeaderBgState(true);
    } else {
      this.props.setHeaderBgState(false);
    }
  }
}

const UIMain = withContext(MainRefContext, withContext(HeaderRefContext, Main));

export default UIMain;
