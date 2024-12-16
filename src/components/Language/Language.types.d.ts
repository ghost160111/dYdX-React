import { WithTranslation } from "react-i18next";

declare global {
  interface LanguageProps extends WithTranslation {}
  interface LangaugeState {
    langList: SelectItem[];
  }
}

export {}
