"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Activity,
  BookTemplate,
  DollarSign,
  DollarSignIcon,
  Gamepad2,
  Key,
  LayoutDashboard,
  Lock,
  LucideShovel,
  Mail,
  Package,
  Settings,
  User,
  User2,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();
  const userAuthorities = localStorage.getItem("authorities");
  const router = useRouter();
  console.log(userAuthorities?.length);

  const menuItems = [
    {
      href: `/admin`,
      label: "Dashboard",
      active: pathname === `/admin`,
      authorized: true,
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
      authorized: userAuthorities?.includes("READ_ACCOUNT"),
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
      authorized: userAuthorities?.includes("READ_VISITORS"),
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
      href: `/admin/permissions`,
      label: "Permissions",
      active: pathname === `/admin/permissions`,
      authorized: userAuthorities?.length === 214,
      // authorized: userAuthorities?.includes("READ_ACCOUNT"),
      icon: (
        <Key
          size={15}
          color={`${pathname === `/admin/permissions` ? "#0EB8D5" : "#707E94"}`}
        />
      ),
    },
    {
      href: `/admin/roles`,
      label: "Roles",
      active: pathname === `/admin/roles`,
      // authorized: userAuthorities?.includes("READ_ACCOUNT"),
      authorized: userAuthorities?.length === 214,
      icon: (
        <Lock
          size={15}
          color={`${pathname === `/admin/roles` ? "#0EB8D5" : "#707E94"}`}
        />
      ),
    },
    {
      href: `/admin/users`,
      label: "Users",
      active: pathname === `/admin/users`,
      authorized: userAuthorities?.includes("READ_USER"),
      icon: (
        <Users
          size={15}
          color={`${pathname === `/admin/users` ? "#0EB8D5" : "#707E94"}`}
        />
      ),
    },

    {
      href: `/admin/emails`,
      label: "Emails",
      active: pathname === `/admin/emails`,
      authorized: userAuthorities?.includes("READ_EMAIL"),
      icon: (
        <Mail
          size={15}
          color={`${pathname === `/admin/emails` ? "#0EB8D5" : "#707E94"}`}
        />
      ),
    },
    {
      href: `/admin/settings`,
      label: "Settings",
      active: pathname === `/admin/settings`,
      authorized: true,
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
        <div className="font-semibold opacity-50">Menu</div>
        {menuItems.map((route) => (
          <div
            className={`${!route.authorized && "cursor-not-allowed"}`}
            title={`${!route.authorized && "Not Authorized"}`}
          >
            <Button
              disabled={!route.authorized}
              variant="outline"
              className={cn(
                " w-full flex px-2 items-center justify-start border-none hover:text-cyan-500 rounded py-1 space-x-2",
                route.active
                  ? "text-white bg-cyan-500 hover:text-white hover:bg-cyan-500"
                  : "text-muted-foreground"
              )}
              key={route.href}
              onClick={() => router.push(route.href)}
            >
              <span>{route?.icon}</span>
              <Link
                href={route.href}
                className={cn(
                  "text-base font-medium disabled transition-colors"
                )}
              >
                {route.label}
              </Link>
            </Button>
          </div>
        ))}
      </nav>
      <nav
        className={cn("flex flex-col justify-center space-y-2 mt-3", className)}
      >
        <div className="font-semibold opacity-50">Administration</div>
        {AdministrationItems.map((route) => (
          <div
            className={`${!route.authorized && "cursor-not-allowed"}`}
            title={`${!route.authorized && "Not Authorized"}`}
          >
            <Button
              disabled={!route.authorized}
              variant="outline"
              className={cn(
                " w-full flex px-2 items-center justify-start border-none hover:text-cyan-500 rounded py-1 space-x-2",
                route.active
                  ? "text-white bg-cyan-500 hover:text-white hover:bg-cyan-500"
                  : "text-muted-foreground"
              )}
              key={route.href}
              onClick={() => router.push(route.href)}
            >
              <span>{route?.icon}</span>
              <Link
                href={route.href}
                className={cn(
                  "text-base font-medium disabled transition-colors"
                )}
              >
                {route.label}
              </Link>
            </Button>
          </div>
        ))}
      </nav>
    </div>
  );
}
