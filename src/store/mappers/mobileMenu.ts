import { setEscapeEvtEnabled, setMobileMenuState } from "store/features/mobileMenuSlice";
import { RootState } from "store/Redux-store";

const mapStateToProps = (state: RootState) => ({
  isMobileMenuActive: state.mobileMenu.isMobileMenuActive,
  isEscapeEvtEnabled: state.mobileMenu.isEscapeEvtEnabled,
});

const mapDispatchProps = {
  setMobileMenuState,
  setEscapeEvtEnabled,
};

const mobileMenuMap = {
  mapStateToProps,
  mapDispatchProps,
};

export default mobileMenuMap;
