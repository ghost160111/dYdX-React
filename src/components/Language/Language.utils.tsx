import IService from "services/classes/IService";
import { Language } from "./Language";
import { escapeKeyHandlerReact } from "utils/hooks/escapeKeyHandler";
import { KeyboardEvent, ReactNode } from "react";
import IReactService from "services/classes/IReactService";

export class LanguageClasses<CTX extends Language> extends IService<CTX> {
  private get dropdownIsOpen(): boolean {
    return this.ctx.computed.dropdownIsOpen;
  }

  get computedLangSelectorClassName(): string {
    const { className } = this.ctx.props;
    return className ? `lang-selector ${className}` : "lang-selector";
  }

  get computedLangSelectorCurrentClassName(): string {
    return this.dropdownIsOpen
      ? "lang-selector__current active"
      : "lang-selector__current";
  }

  get computedArrowDownClassName(): string {
    return this.dropdownIsOpen
      ? "lang-selector__current__arrow-down active"
      : "lang-selector__current__arrow-down";
  }

  get computedLangSelectorListClassName(): string {
    return this.dropdownIsOpen
      ? "lang-selector__list scrollbar active"
      : "lang-selector__list scrollbar";
  }

  getDisplayListItem(displayNone: boolean): string {
    return displayNone ? "lang-selector__list__btn active" : "lang-selector__list__btn";
  }

  getDisplayListItemCSS(displayNone: boolean): string {
    return displayNone ? "none" : "";
  }
}

export class LanguageComputed<CTX extends Language> extends IReactService<LanguageProps, LanguageState, CTX> {
  get selectedLang(): string {
    let lang: string = "";
    const langList = this.ctx.state.langList;

    for (let i = 0; i < langList.length; ++i) {
      const item = langList[i];
      if (this.ctx.langService.lang === item.lng) {
        lang = item.curr;
        break;
      }
    }

    return lang;
  }

  get dropdownIsOpen(): boolean {
    return this.ctx.state.dropdownIsOpen;
  }

  get menuList(): ReactNode {
    return this.ctx.state.langList.map((item, index) => {
      let displayNone: boolean = false;

      if (this.props.i18n.language === item.lng) {
        displayNone = true;
      }

      const computedClassName: string = this.ctx.classes.getDisplayListItem(displayNone);
      const computedDisplayCSS: string = this.ctx.classes.getDisplayListItemCSS(displayNone);
      const changeLanguage = (): void => this.ctx.langService.changeLanguage(item.lng);

      return (
        <li
          key={index}
          style={{ display: computedDisplayCSS }}
        >
          <button
            type="button"
            className={computedClassName}
            onClick={changeLanguage}
            lang={item.lng}
          >
            {item.text}
          </button>
        </li>
      );
    })
  }
}

export class LanguageMethods<CTX extends Language> extends IService<CTX> {
  dropdownIsActiveHandler = (): void => {
    this.setDropdownState(!this.ctx.state.dropdownIsOpen);
  }

  handleOutsideClick = (evt: MouseEvent): void => {
    const target: HTMLElement = evt.target as HTMLElement;
    const matches: boolean = !target.matches(".lang-selector") &&
                             !target.matches(".lang-selector *") &&
                             this.ctx.state.dropdownIsOpen;

    if (matches) {
      this.setDropdownState(false);
    }
  }

  escapeKeydownHandler = (evt: KeyboardEvent): void => {
    escapeKeyHandlerReact(() => {
      this.setDropdownState(false);
      this.ctx.langSelectorBtnRef.current.blur();
    }, evt);
  }

  setDropdownState(value: boolean): void {
    this.ctx.setState(prevState => ({
      ...prevState,
      dropdownIsOpen: value
    }));
  }

  onDebug(): void {
    this.ctx.setState(prevState => {
      const copyOfLangList = [...prevState.langList];
      copyOfLangList.push({ lng: "en", text: "English", curr: "En" });
      return {
        ...prevState,
        langList: copyOfLangList,
      };
    });
  }
}
