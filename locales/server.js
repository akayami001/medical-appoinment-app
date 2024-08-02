import { createI18nServer } from "next-international/server";

const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  en: () => import("./en"),
  de: () => import("./de"),
  fr: () => import("./fr"),
});

export {
  getI18n,
  getScopedI18n,
  getStaticParams
};
