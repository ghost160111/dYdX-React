import { ReactNode } from "react";
import { WithTranslation } from "react-i18next";

declare global {
  interface RouteItem {
    path: string;
    component: ReactNode;
    errorComponent?: ReactNode;
    index?: boolean;
  }

  interface RouterProps extends WithTranslation {
  }

  interface RouterState {
    routes: Map<string, RouteItem>;
  }
}

export {}
