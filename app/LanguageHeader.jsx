'use client';

import { useChangeLocale } from "@/locales/client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LanguageHeader = () => {
  const changeLocale = useChangeLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState('');

  const handleLanguageChange = (event) => {
    const newLocale = event.target.value;
    setLanguage(newLocale);
    changeLocale(newLocale);
    router.push(pathname, pathname, { locale: newLocale });
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      className="ml-4 p-2 border rounded-md"
    >
      <option value="">select language</option>
      <option value="en">EN 🇬🇧</option>
      <option value="de">DE 🇩🇪</option>
      <option value="fr">FR 🇫🇷</option>
    </select>
  );
};

export default LanguageHeader;
