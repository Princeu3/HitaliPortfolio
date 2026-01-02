"use client";

import { translations, type Language } from "./translations";

export function useLanguage() {
  const language: Language = "en";
  const t = translations[language];

  return { language, t };
}
