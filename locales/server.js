"use server"
import { createI18nServer } from "next-international/server";
import { use } from "react";

const { getI18n, getScopedI18n, getStaticParams,getCurrentLocale } = createI18nServer({
  en: () => import("./en"),
  de: () => import("./de"),
  fr: () => import("./fr"),
});

export {
  getI18n,
  getScopedI18n,
  getStaticParams,
  getCurrentLocale
};
