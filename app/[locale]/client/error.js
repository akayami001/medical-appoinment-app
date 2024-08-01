"use client";

import { useI18n } from "@/locales/client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  const { t } = useI18n();

  useEffect(() => {}, [error]);

  return (
    <div className="flex flex-col min-h-[calc(100vh-15rem)] justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">500</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        {t('internalServerError')}
      </h2>
      <p className="text-gray-600 mt-2">
        {t('errorApology')}
      </p>
      <button
        className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={() => reset()}
      >
        {t('tryAgain')}
      </button>
    </div>
  );
}
