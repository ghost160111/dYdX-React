import { PropsWithChildren, ReactNode } from "react";
import HeaderRefProvider from "./HeaderRef/HeaderRefProvider";
import FancyboxProvider from "./Fancybox/FancyboxProvider";

function ContextProviders(props: PropsWithChildren): ReactNode {
  return (
    <HeaderRefProvider>
      <FancyboxProvider>
        {props.children}
      </FancyboxProvider>
    </HeaderRefProvider>
  );
}

export default ContextProviders;
