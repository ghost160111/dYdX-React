import styles from "./Navigation.module.scss";
import { getWithTranslation } from "i18n/hooks";
import { COMPONENT } from "services/utils/Injectors";
import { navMap } from "./Navigation.constants";
import { NavigationComputed, NavigationMethods } from "./Navigation.utils";
import LangService from "services/classes/LangService";
import UIReact from "utils/classes/UIReact";

@COMPONENT<Navigation>({
  template: (_this) => {
    return (
      <nav className={styles.nav}>
        {_this.computed.navList}
        {_this.computed.burger}
      </nav>
    );
  }
})
class Navigation extends UIReact<NavigationProps, NavigationState> {
  langService: LangService<Navigation> = new LangService(this);
  computed: NavigationComputed<Navigation> = new NavigationComputed(this);
  methods: NavigationMethods<Navigation> = new NavigationMethods(this);

  state: Readonly<NavigationState> = {
    navMap,
    burgerShouldBeRendered: false,
  };

  componentDidMount(): void {
    this.methods.onWindowResize();
    window.addEventListener("resize", this.methods.onWindowResize, { signal: this.controller.signal });
  }
}

const UINavigation = getWithTranslation(Navigation);

export { Navigation };
export default UINavigation;
