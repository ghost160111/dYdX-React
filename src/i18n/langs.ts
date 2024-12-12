import i18next from "i18next";
import resources from "i18n/resources";
import { debug } from "../../project.config.json";
import { initReactI18next } from "react-i18next";
import { getLanguageFromPath, onLanguageChanged } from "i18n/hooks";

i18next
.use(initReactI18next)
.init({
  lng: getLanguageFromPath() ?? "en", // Default language
  fallbackLng: "en",
  debug,
  resources,
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

document.documentElement.lang = i18next.language;
i18next.on("languageChanged", onLanguageChanged);

export default i18next;
