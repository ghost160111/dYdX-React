import { langList } from "components/Layout/Header/Navigation/Navigation.constants";
import { getWithTranslation } from "i18n/hooks";
import { PureComponent } from "react";
import { LanguageComputed, LanguageMethods } from "./Language.utils";
import { COMPONENT } from "services/utils/Injectors";
import UISelect from "components/Interactions/Select/Select";
import LangService from "services/classes/LangService";

@COMPONENT<Language>({
  template: (_this) => {
    return (
      <UISelect
        color={"brand"}
        arrowColor={"var(--white)"}
        addTransitions={true}
        list={_this.state.langList}
        selected={_this.computed.selected}
        onSelect={_this.methods.onSelect}
      />
    );
  }
})
class Language extends PureComponent<LanguageProps, LangaugeState> {
  langService: LangService<Language> = new LangService(this);
  computed: LanguageComputed<Language> = new LanguageComputed(this);
  methods: LanguageMethods<Language> = new LanguageMethods(this);

  state: Readonly<LangaugeState> = {
    langList,
  };

  componentDidMount(): void {
    this.props.i18n.on("languageChanged", () => this.forceUpdate());
  }
}

const UILanguage = getWithTranslation(Language);

export { Language };
export default UILanguage;
