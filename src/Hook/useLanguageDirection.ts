import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const RTL_LANGS = ["ar"];

export function useLanguageDirection() {
  const { i18n } = useTranslation();
  const isRTL = RTL_LANGS.includes(i18n.language);

  useEffect(() => {
    const dir = isRTL ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language, isRTL]);

  return { isRTL, currentLanguage: i18n.language };
}
