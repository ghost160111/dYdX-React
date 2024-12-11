import { lazy, ReactNode, Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import store from "store/Redux-store";
import i18n from "i18n/langs";
import SpinnerLoaderWrapper from "components/Loaders/SpinnerLoaderWrapper";
import UIModalWindow from "components/ModalWindow/ModalWindow";
import ContextProviders from "components/Context/ContextProviders";

const UIRouter = lazy(() => import("components/Layout/Router/Router"));

function App(): ReactNode {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ContextProviders>
          <Suspense fallback={<SpinnerLoaderWrapper fixedPosition />}>
            <UIRouter />
          </Suspense>
          <UIModalWindow />
        </ContextProviders>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
