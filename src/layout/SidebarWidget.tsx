import React from "react";

export default function SidebarWidget() {
  return (
    <div
      className={`
        mx-auto mb-5 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]`}
    >
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
        PANDAWA | Dashboard
      </h3>
      <p className="text-gray-500 text-theme-sm p-2 dark:text-gray-400">
        Aplikasi ini sedang dalam tahap pengembangan.
      </p>
      <a
        href="#"
        target="_blank"
        rel="nofollow"
        className="flex items-center justify-center mt-3 p-2 font-medium text-white rounded-lg bg-brand-500 text-theme-sm"
      >
        Version - 0.8.2-beta
      </a>
    </div>
  );
}
