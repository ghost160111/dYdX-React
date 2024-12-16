import styles from "./Navigation.module.scss";
import { PureComponent } from "react";
import { getWithTranslation } from "i18n/hooks";
import { COMPONENT } from "services/utils/Injectors";
import { navMap } from "./Navigation.constants";
import { NavigationComputed, NavigationMethods } from "./Navigation.utils";
import LangService from "services/classes/LangService";
import UISelect from "components/Interactions/Select/Select";

@COMPONENT<Navigation>({
  template: (_this) => {
    return (
      <nav className={styles.nav}>
        <ul className={styles["nav__list"]}>
          {_this.computed.navList}
          <li>
            <UISelect
              color={"brand"}
              arrowColor={"var(--white)"}
              addTransitions={true}
              list={_this.langList}
              selected={_this.computed.selected}
              onSelect={_this.methods.onSelect}
              onLanguageChanged={_this.methods.onLanguageChange}
            />
          </li>
        </ul>
      </nav>
    );
  },
})
class Navigation extends PureComponent<NavigationProps, NavigationState> {
  langService: LangService<Navigation> = new LangService(this);
  computed: NavigationComputed<Navigation> = new NavigationComputed(this);
  methods: NavigationMethods<Navigation> = new NavigationMethods(this);
  state: Readonly<NavigationState> = { navMap };
  langList: SelectItem[] = [
    { id: "en", content: "En" },
    { id: "ru", content: "Ру" },
    { id: "uz", content: "Уз" },
    { id: "oz", content: "O'z" },
  ];
}

const UINavigation = getWithTranslation(Navigation);

export { Navigation };
export default UINavigation;
