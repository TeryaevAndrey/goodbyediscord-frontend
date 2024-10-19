import { initReactI18next } from "react-i18next";

import i18n from "i18next";

import eng from "@/shared/lang/eng.json";
import rus from "@/shared/lang/rus.json";

export default i18n.use(initReactI18next).init({
  resources: {
    eng: {
      translation: JSON.parse(JSON.stringify(eng)),
    },
    rus: {
      translation: JSON.parse(JSON.stringify(rus)),
    },
  },
  lng: localStorage.getItem("lang") || "rus",

  interpolation: {
    escapeValue: false,
  },
});
