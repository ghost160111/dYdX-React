import { WithTranslation } from "react-i18next";
import { MobileMenuReduxProps } from "store/features/mobileMenuSlice";

declare global {
  interface MobileNavProps extends WithTranslation, MobileMenuReduxProps {}
  interface MobileNavState {}
}

export {}
