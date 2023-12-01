"use client";

import { NavigationRoutes } from "@/routes/routes";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  item: NavigationRoutes;
}

export const SidebarMenuItems = ({ item }: Props) => {
  const { icon, name, path, subLinks } = item;
  const pathname = usePathname();
  const Icon = icon;
  return (
    <Link
      href={path}
      className={clsx(
        "text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
        {
          "bg-gray-800 text-white": pathname === path,
        }
      )}
    >
      <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
      {name}
    </Link>
  );
};
