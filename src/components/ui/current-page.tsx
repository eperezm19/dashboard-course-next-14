"use client";

import { usePathname } from "next/navigation";

const getLastWordFromPath = (path: string) => {
  const parts = path.split("/");

  const nonEmptyParts = parts.filter((part) => part.trim() !== "");

  const lastWord = nonEmptyParts[nonEmptyParts.length - 1];

  return lastWord;
};

export const CurrentPage = () => {
  const pathname = usePathname();
  const lastWord = getLastWordFromPath(pathname);
  return (
    <div className="flex-1 text-sm font-semibold leading-6 text-white capitalize">
      {lastWord}
    </div>
  );
};
