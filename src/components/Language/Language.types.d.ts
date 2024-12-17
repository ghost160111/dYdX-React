import { WithTranslation } from "react-i18next";

declare global {
  interface LanguageProps extends WithTranslation, ClassNameExtenderProps {}
  interface LanguageState {
    lang: string;
    dropdownIsOpen: boolean;
    originalLangListOffsetHeight: number;
    langList: {
      lng: string;
      text: string;
      curr: string;
    }[];
  }
}

export {}
