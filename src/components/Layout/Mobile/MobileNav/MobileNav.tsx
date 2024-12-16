import styles from "./MobileNav.module.scss";
import { PureComponent, ReactNode } from "react";
import { COMPONENT } from "services/utils/Injectors";
import { connect } from "react-redux";
import { getWithTranslation } from "i18n/hooks";
import { navMap } from "components/Layout/Header/Navigation/Navigation.constants";
import LangService from "services/classes/LangService";
import NavLink from "components/Interactions/NavLink/NavLink";
import mobileMenuMap from "store/mappers/mobileMenu";
import UILanguage from "components/Language/Language";

@COMPONENT<MobileNav>({
  template: (_this) => {
    return (
      <ul className={styles["mobile-nav__list"]}>
        {_this.navList}
        <li><UILanguage /></li>
      </ul>
    );
  }
})
class MobileNav extends PureComponent<MobileNavProps, MobileNavState> {
  langService: LangService<MobileNav> = new LangService(this);

  get navList(): ReactNode {
    return Array.from(navMap).map(
      ([key, { text, to }]) => {
        return (
          <li key={key}>
            <NavLink
              to={to}
              lang={this.langService.lang}
              onClick={this.closeMobileMenu}
              baseClassName={styles["mobile-menu__nav-item"]}
              activeClassName={styles["mobile-menu__nav-item--active"]}
            >{text}</NavLink>
          </li>
        );
      }
    );
  }

  closeMobileMenu = (): void => this.props.setMobileMenuState(false);
}

const TranslatedMobileNav = getWithTranslation(MobileNav);
const UIMobileNav = connect(
  mobileMenuMap.mapStateToProps,
  mobileMenuMap.mapDispatchProps
)(TranslatedMobileNav);

export default UIMobileNav;
