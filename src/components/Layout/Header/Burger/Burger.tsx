import styles from "./Burger.module.scss";
import { PureComponent } from "react";
import { BurgerSVG, CancelSVG } from "./Burger.utils";
import { connect } from "react-redux";
import { COMPONENT } from "services/utils/Injectors";
import mobileMenuMap from "store/mappers/mobileMenu";

@COMPONENT<Burger>({
  template: (_this) => {
    return (
      <button
        type="button"
        onClick={_this.onToggle}
        className={styles["burger-btn"]}
      >
        <BurgerSVG isToggled={!_this.props.isMobileMenuActive} />
        <CancelSVG isToggled={_this.props.isMobileMenuActive} />
      </button>
    );
  }
})
class Burger extends PureComponent<BurgerProps, BurgerState> {
  onToggle = () => {
    this.props.setMobileMenuState(!this.props.isMobileMenuActive);
  }
}

const UIBurger = connect(mobileMenuMap.mapStateToProps, mobileMenuMap.mapDispatchProps)(Burger);

export default UIBurger;
