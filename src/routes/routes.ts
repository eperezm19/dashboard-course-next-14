import { HomeIcon, CircleStackIcon } from "@heroicons/react/24/outline";

export interface NavigationRoutes {
  name: string;
  icon: React.ComponentType<any>;
  path: string;
  subLinks?: SubLinks[];
}

interface SubLinks {
  name: string;
  path: string;
}

export const menuItems: NavigationRoutes[] = [
  {
    name: "Dashboard",
    icon: HomeIcon,
    path: "/dashboard",
  },
  {
    name: "Counter Client Side",
    icon: CircleStackIcon,
    path: "/dashboard/counter",
  },
];
