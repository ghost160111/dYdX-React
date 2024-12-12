import { WithTranslation } from "react-i18next";

declare global {
  interface NavItem {
    text?: string;
    tKey?: string;
    to: string;
  }

  interface NavigationProps extends WithTranslation {}
  interface NavigationState {
    navMap: Map<string, NavItem>;
  }
}

export {}
