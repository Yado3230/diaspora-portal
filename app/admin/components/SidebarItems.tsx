import { SideBarItem } from "@/types/types";
import {
  ArrowLeftRight,
  BadgeDollarSign,
  LayoutDashboard,
  Users,
} from "lucide-react";

export const sideBar: SideBarItem[] = [
  {
    name: "overview",
    label: "Overview",
    icon: <LayoutDashboard />,
    hide: false, // set the hidden value to true if you want to. U can use different var for different purposes.
    path: "/admin",
    active: "/admin",
  },
  {
    name: "requests",
    label: "Requests",
    icon: <BadgeDollarSign />,
    hide: false,
    path: "/admin/requests",
    active: "/admin/requests",
  },
  {
    name: "users",
    label: "Admin Users",
    icon: <Users />,
    hide: false,
    path: "/admin/users",
    active: "/admin/users",
  },
];
