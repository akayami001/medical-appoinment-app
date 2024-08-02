"use client";
import { I18nProviderClient } from "@/locales/client";
import "../../[locale]/globals.css";

export default function SubLayout({ children, params }) {
  return (
    <I18nProviderClient locale={params.locale} fallback={<p>Loading...</p>}>
      {children}
    </I18nProviderClient>
  );
}
