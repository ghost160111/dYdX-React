import { PropsWithChildren, ReactNode } from "react";
import HeaderRefProvider from "components/Context/HeaderRef/HeaderRefProvider";
import FancyboxProvider from "components/Context/Fancybox/FancyboxProvider";
import MainRefProvider from "components/Context/MainRef/MainRefProvider";

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
