"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-[calc(100vh-27rem)] justify-center items-center bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-red-600">
          Oops! Something went wrong
        </h2>
        <p className="mb-6 text-gray-700">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() => reset()}
        >
          Try Again
        </button>
        <button
          className="px-4 text-white bg-gray-600 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          onClick={() => router.push("/")}
        ></button>
      </div>
    </div>
  );
}
