import { createRef, RefObject } from "react";
import { connect } from "react-redux";
import { getWithTranslation } from "i18n/hooks";
import { COMPONENT } from "services/utils/Injectors";
import { withContext } from "components/Context/ContextInjector";
import { HeaderRefContext } from "components/Context/ContextCollection";
import windowMap from "store/mappers/window";
import UIReact from "utils/classes/UIReact";
import LangService from "services/classes/LangService";
import Navigation from "../Navigation/Navigation";

@COMPONENT<Header>({
  template: (_this) => {
    return (
      <header ref={_this.headerRef}>
        <Navigation />
      </header>
    );
  }
})
class Header extends UIReact<HeaderProps, HeaderState> {
  headerRef: RefObject<HTMLElement> = createRef<HTMLElement>();
  abortReason: string = "'Header is unmounted'";
  langService: LangService<Header> = new LangService(this);

  componentDidMount(): void {
    this.props.setHeaderRef(this.headerRef);
    window.addEventListener("DOMContentLoaded", this.onDOMContentLoaded, { signal: this.controller.signal });
  }

  customEvent = (): void => {
    alert("Custom Event Triggered!");
  }

  onDOMContentLoaded = () => console.log("DOMContentLoaded event");
}

const TranslatedHeader = getWithTranslation(Header);
const InjectedHeader = withContext(HeaderRefContext, TranslatedHeader);

const UIHeader = connect(
  windowMap.mapStateToProps,
  windowMap.mapDispatchProps
)(InjectedHeader);

export { Header };
export default UIHeader;
