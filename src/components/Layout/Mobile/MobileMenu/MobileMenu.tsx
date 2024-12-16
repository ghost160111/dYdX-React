import styles from "./MobileMenu.module.scss";
import { PureComponent } from "react";
import { connect } from "react-redux";
import { COMPONENT } from "services/utils/Injectors";
import { getWithTranslation } from "i18n/hooks";
import mobileMenuMap from "store/mappers/mobileMenu";
import LangService from "services/classes/LangService";
import UIMobileNav from "../MobileNav/MobileNav";

@COMPONENT<MobileMenu>({
  template: (_this) => {
    return (
      <div className={_this.mobileMenuClass}>
        <UIMobileNav />
      </div>
    );
  }
})
class MobileMenu extends PureComponent<MobileMenuProps, MobileMenuState> {
  langService: LangService<MobileMenu> = new LangService(this);

  get mobileMenuClass(): string {
    return this.props.isMobileMenuActive
      ? `${styles["mobile-menu"]} ${styles["mobile-menu--active"]}`
      : styles["mobile-menu"];
  }
}

const TranslatedMobileMenu = getWithTranslation(MobileMenu);

const UIMobileMenu = connect(
  mobileMenuMap.mapStateToProps,
  mobileMenuMap.mapDispatchProps
)(TranslatedMobileMenu);

export default UIMobileMenu;
