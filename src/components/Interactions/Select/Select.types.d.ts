import { ReactNode } from "react";
import { WithTranslation } from "react-i18next";

declare global {
  type SelectColors =
    | "black"
    | "orange"
    | "transparent"
    | "brand";

  interface SelectItem {
    id: string;
    content?: ReactNode;
    tKey?: string;
  }

  interface SelectProps extends WithTranslation {
    list: SelectItem[];
    selected: SelectItem;
    onSelect?: (id: string, content: ReactNode, tKey?: string) => void;
    onLanguageChanged?: (lng?: string) => void;
    color?: SelectColors;
    arrowColor?: string;
    addTransitions?: boolean;
    width?: number;
    height?: number;
    hideArrow?: boolean;
    hideSelected?: boolean;
  }

  interface SelectState {
    selected: SelectItem;
    toggled: boolean;
  }
}

export {}
