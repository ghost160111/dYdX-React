import { ReactNode } from "react";
import { Navigate, Route, BrowserRouter as Router } from "react-router-dom";
import { getWithTranslation } from "i18n/hooks";
import { supportedLanguages } from "i18n/constants";
import { LazyLoaded } from "./Router.utils";
import { COMPONENT } from "services/utils/Injectors";
import Views from "./Router.constants";
import Layout from "components/Layout/Layout/Layout";
import LangService from "services/classes/LangService";
import LocationService from "services/classes/LocationService";
import UIReact from "utils/classes/UIReact";

const {
  Home,
  ErrorView,
  DiscoverInitiatives,
  FundedGrants,
  ProgramExpenses,
  Blog,
  FAQ,
  ApplyForGrant,
} = Views;

@COMPONENT<RouterView>({
  template: (_this) => {
    return (
      <Router>
        <Layout routes={_this.routes} />
      </Router>
    );
  }
})
class RouterView extends UIReact<RouterProps, RouterState> {
  langService: LangService<RouterView> = new LangService(this);
  locationService: LocationService<RouterView> = new LocationService(this);

  state: Readonly<RouterState> = {
    routes: new Map<string, RouteItem>([
      [ "Fallback", { path: "/", component: <Navigate to={`/${this.langService.lang}`} replace /> } ],
      [ "404", { path: "/:lang/*", component: LazyLoaded(<ErrorView />), } ],
      [ "Home", { path: "/:lang", component: LazyLoaded(<Home />), index: true, } ],
      [ "Discover initiatives", { path: "/:lang/discover-initiatives", component: LazyLoaded(<DiscoverInitiatives />) } ],
      [ "Funded Grants", { path: "/:lang/funded-grants", component: LazyLoaded(<FundedGrants />) } ],
      [ "Program Expenses", { path: "/:lang/program-expenses", component: LazyLoaded(<ProgramExpenses />) } ],
      [ "Blog", { path: "/:lang/blog", component: LazyLoaded(<Blog />) } ],
      [ "FAQ", { path: "/:lang/faq", component: LazyLoaded(<FAQ />) } ],
      [ "Apply for Grant", { path: "/:lang/apply-for-grant", component: LazyLoaded(<ApplyForGrant />) } ],
    ]),
  };

  get routes(): ReactNode {
    return Array
      .from(this.state?.routes)
      .map((mapItem) => {
        const [key, { path, index, component }] = mapItem;
        return (
          <Route
            key={key}
            path={path}
            element={component}
            index={index}
          />
        );
      });
  }

  componentDidMount(): void {
    this.manageHistory();
    this.manageEvents("addEventListener");
  }

  manageEvents(action: "addEventListener" | "removeEventListener"): void {
    const eventOptions: AddEventListenerOptions = { signal: this.controller.signal };
    window[action]("popstate", this.manageHistory, eventOptions);
    window[action]("replacestate", this.manageHistory, eventOptions);
    window[action]("pushstate", this.manageHistory, eventOptions);
  }

  manageHistory = (): void => {
    if (!supportedLanguages.includes(this.locationService.langPath)) {
      history.replaceState(null, "", `/${this.langService.lang}`);
    }
  }
}

const UIRouter = getWithTranslation(RouterView);

export default UIRouter;
