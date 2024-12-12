import { createRef, RefObject } from "react";
import { connect } from "react-redux";
import { getWithTranslation } from "i18n/hooks";
import { COMPONENT } from "services/utils/Injectors";
import { withContext } from "components/Context/ContextInjector";
import { HeaderRefContext } from "components/Context/ContextCollection";
import styles from "./Header.module.scss";
import windowMap from "store/mappers/window";
import UIReact from "utils/classes/UIReact";
import LangService from "services/classes/LangService";
import Navigation from "components/Layout/Header/Navigation/Navigation";
import Logo from "components/Layout/Header/Logo/Logo";

@COMPONENT<Header>({
  template: (_this) => {
    return (
      <header className={_this.headerClass} ref={_this.headerRef}>
        <Logo />
        <Navigation />
      </header>
    );
  }
})
class Header extends UIReact<HeaderProps, HeaderState> {
  headerRef: RefObject<HTMLElement> = createRef<HTMLElement>();
  abortReason: string = "'Header is unmounted'";
  langService: LangService<Header> = new LangService(this);

  get headerClass(): string {
    return this.props.headerIsActive
      ? `${styles["header"]} ${styles["header--bg-active"]}`
      : styles["header"];
  }

  componentDidMount(): void {
    this.props.setHeaderRef(this.headerRef);
  }
}

const TranslatedHeader = getWithTranslation(Header);
const InjectedHeader = withContext(HeaderRefContext, TranslatedHeader);

const UIHeader = connect(
  windowMap.mapStateToProps,
  windowMap.mapDispatchProps
)(InjectedHeader);

export { Header };
export default UIHeader;
