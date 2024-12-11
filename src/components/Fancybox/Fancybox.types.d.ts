import { PropsWithChildren } from "react";
import { OptionsType as FancyboxOptions } from "@fancyapps/ui/types/Fancybox/options";

declare global {
  interface UIFancyboxProps extends PropsWithChildren, FancyboxProps {
    options?: Partial<FancyboxOptions>;
    delegate?: string;
    init?: () => void;
    destroy?: () => void;
    carouselReady?: () => void;
  }
}

export {}
