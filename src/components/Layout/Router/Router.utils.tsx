import SpinnerLoaderWrapperFixed from "components/Loaders/SpinnerLoaderWrapperFixed";
import { ReactNode, Suspense } from "react";

export function LazyLoaded(children: ReactNode): ReactNode {
  return (
    <Suspense fallback={<SpinnerLoaderWrapperFixed />}>
      {children}
    </Suspense>
  );
}
