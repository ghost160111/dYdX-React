import { lazy } from "react";

export default {
  ErrorView: lazy(() => import("components/Views/Error/Error")),
  Home: lazy(() => import("components/Views/Home/Home")),
  DiscoverInitiatives: lazy(() => import("components/Views/DiscoverInitiatives/DiscoverInitiatives")),
  FundedGrants: lazy(() => import("components/Views/FundedGrants/FundedGrants")),
  ProgramExpenses: lazy(() => import("components/Views/ProgramExpenses/ProgramExpenses")),
  Blog: lazy(() => import("components/Views/Blog/Blog")),
  FAQ: lazy(() => import("components/Views/FAQ/FAQ")),
  ApplyForGrant: lazy(() => import("components/Views/ApplyForGrant/ApplyForGrant")),
};
