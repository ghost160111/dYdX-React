import styles from "./Navigation.module.scss";
import LangService from "services/classes/LangService";
import { PureComponent } from "react";
import { getWithTranslation } from "i18n/hooks";
import { COMPONENT } from "services/utils/Injectors";
import { navMap } from "./Navigation.constants";
import { NavigationComputed } from "./Navigation.utils";

@COMPONENT<Navigation>({
  template: (_this) => {
    return (
      <nav className={styles["nav"]}>
        <ul className={styles["nav__list"]}>
          {_this.computed.navList}
        </ul>
      </nav>
    );
  },
})
class Navigation extends PureComponent<NavigationProps, NavigationState> {
  langService: LangService<Navigation> = new LangService(this);
  computed: NavigationComputed<Navigation> = new NavigationComputed(this);
  state: Readonly<NavigationState> = { navMap };
}

const UINavigation = getWithTranslation(Navigation);

export { Navigation };
export default UINavigation;
