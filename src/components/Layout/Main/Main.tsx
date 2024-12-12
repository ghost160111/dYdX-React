import { createRef, RefObject } from "react";
import { Outlet, Routes } from "react-router-dom";
import { debounce } from "utils/hooks/debounce";
import { withContext } from "components/Context/ContextInjector";
import { HeaderRefContext, MainRefContext } from "components/Context/ContextCollection";
import { COMPONENT } from "services/utils/Injectors";
import styles from "./Main.module.scss";
import Footer from "components/Layout/Footer/Footer/Footer";
import ReactComponent from "utils/classes/ReactComponent";

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
class Main extends ReactComponent<MainProps, MainState> {
  mainWrap: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
  mainWrapMargin: number = 24;
  appRef: HTMLElement;

  get computedHeightCSS(): string {
    const headerRef: HTMLElement = this.props.headerRef.current;
    if (!headerRef) return;
    return `calc(100% - ${headerRef.offsetHeight + this.mainWrapMargin}px)`;
  }

  componentDidMount(): void {
    this.appRef = document.getElementById("app");
    this.debouncedAdjustInitialSize();
    this.scrollHandler();
    this.props.setMainRef(this.mainWrap);
    this.appRef.addEventListener("scroll", this.scrollHandler, { signal: this.controller.signal });
    window.addEventListener("resize", this.resizeCallback, { signal: this.controller.signal });
  }

  resizeCallback = () => {
    const mainNode: HTMLElement = this.mainWrap.current;
    if (!mainNode) return;
    mainNode.style.height = this.computedHeightCSS;
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

  debouncedAdjustInitialSize = debounce(this.resizeCallback, 200, this.controller);
}

const UIMain = withContext(MainRefContext, withContext(HeaderRefContext, Main));

export default UIMain;
