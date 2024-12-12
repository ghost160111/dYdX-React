import { PropsWithChildren, ReactNode } from "react";
import HeaderRefProvider from "./HeaderRef/HeaderRefProvider";
import FancyboxProvider from "./Fancybox/FancyboxProvider";
import MainRefProvider from "./MainRef/MainRefProvider";

function ContextProviders(props: PropsWithChildren): ReactNode {
  return (
    <HeaderRefProvider>
      <MainRefProvider>
        <FancyboxProvider>
          {props.children}
        </FancyboxProvider>
      </MainRefProvider>
    </HeaderRefProvider>
  );
}

export default ContextProviders;
