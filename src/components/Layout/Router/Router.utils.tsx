import { ReactNode, Suspense } from "react";
import SpinnerLoaderWrapperFixed from "components/Loaders/SpinnerLoaderWrapperFixed";

export function LazyLoaded(children: ReactNode): ReactNode {
  return (
    <Suspense fallback={<SpinnerLoaderWrapperFixed />}>
      {children}
    </Suspense>
  );
}
