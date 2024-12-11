import { createRef, RefObject } from "react";
import { Outlet, Routes } from "react-router-dom";
import { debounce } from "utils/hooks/debounce";
import { withContext } from "components/Context/ContextInjector";
import { HeaderRefContext } from "components/Context/ContextCollection";
import { COMPONENT } from "services/utils/Injectors";
import styles from "./Main.module.scss";
import Footer from "components/Layout/Footer/Footer";
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

  get computedHeightCSS(): string {
    const headerRef: HTMLElement = this.props.headerRef.current;
    if (!headerRef) return;
    return `calc(100% - ${headerRef.offsetHeight + this.mainWrapMargin}px)`;
  }

  componentDidMount(): void {
    this.debouncedAdjustInitialSize();
    window.addEventListener("resize", this.resizeCallback, { signal: this.controller.signal });
  }

  resizeCallback = () => {
    const mainNode: HTMLElement = this.mainWrap.current;
    if (!mainNode) return;
    mainNode.style.height = this.computedHeightCSS;
  }

  debouncedAdjustInitialSize = debounce(this.resizeCallback, 200, this.controller);
}

const UIMain = withContext(HeaderRefContext, Main);

export default UIMain;
