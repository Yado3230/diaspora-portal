"use client";

import { cn } from "@/lib/utils";
import {
  Activity,
  BookTemplate,
  DollarSign,
  DollarSignIcon,
  Gamepad2,
  LayoutDashboard,
  LucideShovel,
  Package,
  Settings,
  User,
  User2,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();
  const menuItems = [
    {
      href: `/admin`,
      label: "Dashboard",
      active: pathname === `/admin`,
      icon: (
        <LayoutDashboard
          size={15}
          color={`${pathname === `/admin` ? "#0EB8D5" : "#707E94"}`}
        />
      ),
    },
    {
      href: `/admin/accounts`,
      label: "Accounts",
      active: pathname === `/admin/accounts`,
      icon: (
        <BookTemplate
          size={15}
          color={`${pathname === `/admin/accounts` ? "#0EB8D5" : "#707E94"}`}
        />
      ),
    },
    {
      href: `/admin/visitors`,
      label: "Visitors",
      active: pathname === `/admin/visitors`,
      icon: (
        <Activity
          size={15}
          color={`${pathname === `/admin/visitors` ? "#0EB8D5" : "#707E94"}`}
        />
      ),
    },
  ];

  const AdministrationItems = [
    {
      href: `/admin/users`,
      label: "Admin Users",
      active: pathname === `/admin/users`,
      icon: (
        <Users
          size={15}
          color={`${pathname === `/admin/users` ? "#0EB8D5" : "#707E94"}`}
        />
      ),
    },
    {
      href: `/admin/settings`,
      label: "Settings",
      active: pathname === `/admin/settings`,
      icon: (
        <Settings
          size={15}
          color={`${pathname === `/admin/settings` ? "#0EB8D5" : "#707E94"}`}
        />
      ),
    },
  ];
  return (
    <div>
      <nav
        className={cn("flex flex-col justify-center space-y-2 mt-3", className)}
      >
        <div className="font-semibold">Menu</div>
        {menuItems.map((route) => (
          <div
            className={cn(
              "flex px-2 items-center hover:text-cyan-500 rounded py-1 space-x-2",
              route.active
                ? "text-white bg-cyan-500 hover:text-white"
                : "text-muted-foreground"
            )}
            key={route.href}
          >
            <span className="">{route?.icon}</span>
            <Link
              href={route.href}
              className={cn("text-base font-medium transition-colors")}
            >
              {route.label}
            </Link>
          </div>
        ))}
      </nav>
      <nav
        className={cn("flex flex-col justify-center space-y-2 mt-3", className)}
      >
        <div className="font-semibold">Administration</div>
        {AdministrationItems.map((route) => (
          <div
            className={cn(
              "flex px-2 items-center hover:text-cyan-500 rounded py-1 space-x-2",
              route.active
                ? "text-white bg-cyan-500 hover:text-white"
                : "text-muted-foreground"
            )}
            key={route.href}
          >
            <span>{route?.icon}</span>
            <Link
              href={route.href}
              className={cn("text-base font-medium transition-colors")}
            >
              {route.label}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
