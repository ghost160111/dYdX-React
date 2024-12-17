import { createRef, RefObject } from "react";
import { getWithTranslation } from "i18n/hooks";
import { COMPONENT } from "services/utils/Injectors";
import { LanguageClasses, LanguageComputed, LanguageMethods } from "./Language.utils";
import debug from "constants/debug";
import LangService from "services/classes/LangService";
import UIReact from "utils/classes/UIReact";
import arrowDownSvg from "assets/images/arrow-down.svg";
import "./Language.scss";

@COMPONENT<Language>({
  template: (_this) => {
    return (
      <div className={_this.classes.computedLangSelectorClassName}>
        <button
          type="button"
          ref={_this.langSelectorBtnRef}
          onClick={_this.methods.dropdownIsActiveHandler}
          onKeyDown={_this.methods.escapeKeydownHandler}
          className={_this.classes.computedLangSelectorCurrentClassName}
        >
          {_this.computed.selectedLang}
          <img
            src={arrowDownSvg}
            alt="Arrow down svg"
            className={_this.classes.computedArrowDownClassName}
          />
        </button>
        <ul className={_this.classes.computedLangSelectorListClassName}>
          {_this.computed.menuList}
        </ul>
      </div>
    );
  }
})
class Language extends UIReact<LanguageProps, LanguageState> {
  langSelectorBtnRef: RefObject<HTMLButtonElement> = createRef<HTMLButtonElement>();
  langService: LangService<Language> = new LangService(this);
  classes: LanguageClasses<Language> = new LanguageClasses(this);
  methods: LanguageMethods<Language> = new LanguageMethods(this);
  computed: LanguageComputed<Language> = new LanguageComputed(this);

  state: Readonly<LanguageState> = {
    lang: this.langService.lang,
    dropdownIsOpen: false,
    originalLangListOffsetHeight: 0,
    langList: [
      { lng: "ru", text: "Русский", curr: "Ру" },
      { lng: "oz", text: "O'zbekcha", curr: "O'z" },
      { lng: "uz", text: "Ўзбекча", curr: "Ўз" },
      { lng: "en", text: "English", curr: "En" },
    ],
  };

  componentDidMount(): void {
    window.addEventListener("click", this.methods.handleOutsideClick, { signal: this.controller.signal });

    if (debug) {
      this.methods.onDebug();
    }
  }
}

const UILangSelector = getWithTranslation(Language);

export { Language };
export default UILangSelector;
