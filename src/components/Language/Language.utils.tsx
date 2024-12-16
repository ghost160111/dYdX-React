import IReactService from "services/classes/IReactService";
import { Language } from "./Language";
import { WithTranslation } from "react-i18next";
import { langList } from "components/Layout/Header/Navigation/Navigation.constants";
import { ReactNode } from "react";

export class LanguageComputed<CTX extends Language> extends IReactService<WithTranslation, object, CTX> {
  get lang(): string {
    return this.ctx.langService.lang;
  }

  get selected(): SelectItem {
    return {
      id: this.lang,
      content: this.selectedContent,
    };
  }

  get selectedContent(): ReactNode {
    const index: number = langList.findIndex((value) => value.id === this.lang);
    return langList[index].content;
  }
}

export class LanguageMethods<CTX extends Language> extends IReactService<WithTranslation, object, CTX> {
  onSelect = (id: string): void => {
    this.ctx.langService.changeLanguage(id);
  }
}
