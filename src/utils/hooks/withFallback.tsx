import { ComponentType, ReactNode, Suspense } from "react";
import { debounce } from "utils/hooks/debounce";
import SpinnerLoaderWrapper from "components/Loaders/SpinnerLoaderWrapper";
import ReactComponent from "utils/classes/ReactComponent";

interface WithFallbackState {
  loaded: boolean;
}

export default function withFallback<T_Props = unknown>(WrappedComponent: ComponentType<T_Props>, props?: T_Props, timeout?: number): ComponentType<T_Props> {
  return class WithFallbackComponent extends ReactComponent<T_Props, WithFallbackState> {
    static loaded: boolean = false;

    state: Readonly<WithFallbackState> = {
      loaded: WithFallbackComponent.loaded,
    };

    render(): ReactNode {
      return (
        <Suspense fallback={<SpinnerLoaderWrapper fixedPosition />}>
          {this.state.loaded
            ? <WrappedComponent {...props} />
            : <SpinnerLoaderWrapper fixedPosition />
          }
        </Suspense>
      );
    }

    componentDidMount(): void {
      this.debouncedLoad();
    }

    debouncedLoad = debounce(() => {
      WithFallbackComponent.loaded = true;
      this.setState({ loaded: WithFallbackComponent.loaded });
    }, timeout ?? 250, this.controller);
  }
}
