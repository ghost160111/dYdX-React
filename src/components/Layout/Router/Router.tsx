import { PureComponent, ReactNode } from "react";
import { Navigate, Route, BrowserRouter as Router } from "react-router-dom";
import { getWithTranslation } from "i18n/hooks";
import { supportedLanguages } from "i18n/constants";
import { LazyLoaded } from "./Router.utils";
import { COMPONENT } from "services/utils/Injectors";
import Views from "./Router.constants";
import Layout from "components/Layout/Layout/Layout";
import LangService from "services/classes/LangService";
import LocationService from "services/classes/LocationService";

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
  template: (this2: RouterView) => {
    return (
      <Router>
        <Layout routes={this2.routes} />
      </Router>
    );
  }
})
class RouterView extends PureComponent<RouterProps, RouterState> {
  langService: LangService<RouterView> = new LangService(this);
  locationService: LocationService<RouterView> = new LocationService(this);

  state: Readonly<RouterState> = {
    routes: new Map<string, RouteItem>([
      [ "Fallback", { path: "/", component: <Navigate to={`/${this.langService.lang}`} replace /> } ],
      [ "404", { path: "/:lang/*", component: LazyLoaded(<ErrorView />), } ],
      [ "Home", { path: "/:lang", component: LazyLoaded(<Home />), index: true, } ],
      [ "Discover initiatives", { path: "/:lang/discover-initiatives", component: <DiscoverInitiatives /> } ],
      [ "Funded Grants", { path: "/:lang/funded-grants", component: <FundedGrants /> } ],
      [ "Program Expenses", { path: "/:lang/program-expenses", component: <ProgramExpenses /> } ],
      [ "Blog", { path: "/:lang/blog", component: <Blog /> } ],
      [ "FAQ", { path: "/:lang/faq", component: <FAQ /> } ],
      [ "Apply for Grant", { path: "/:lang/apply-for-grant", component: <ApplyForGrant /> } ],
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

  componentWillUnmount(): void {
    this.manageEvents("removeEventListener");
  }

  manageEvents(action: "addEventListener" | "removeEventListener"): void {
    window[action]("popstate", this.manageHistory);
    window[action]("replacestate", this.manageHistory);
    window[action]("pushstate", this.manageHistory);
  }

  manageHistory = (): void => {
    if (!supportedLanguages.includes(this.locationService.langPath)) {
      history.replaceState(null, "", `/${this.langService.lang}`);
    }
  }
}

const UIRouter = getWithTranslation(RouterView);

export default UIRouter;
