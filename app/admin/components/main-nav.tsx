"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Activity,
  BookTemplate,
  DollarSign,
  Globe,
  Globe2,
  Key,
  LayoutDashboard,
  Lock,
  Mail,
  Settings,
  Users,
  WholeWord,
  WholeWordIcon,
} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { FC } from "react";

type SidebarProps = {
  className: any;
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
};
export const MainNav: FC<SidebarProps> = ({
  className,
  isOpened,
  setIsOpened,
}) => {
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
          color={`${pathname === `/admin` ? "#fff" : "#707E94"}`}
        />
      ),
    },
    {
      href: `/admin/accounts`,
      label: "Accounts",
      active: pathname === `/admin/accounts`,
      authorized: userAuthorities?.includes("READ_ACCOUNT"),
      icon: (
        <Globe
          size={15}
          color={`${pathname === `/admin/accounts` ? "#fff" : "#707E94"}`}
        />
      ),
    },
    {
      href: `/admin/offlineaccounts`,
      label: "Offline Accounts",
      active: pathname === `/admin/offlineaccounts`,
      authorized: userAuthorities?.includes("READ_ACCOUNT"),
      icon: (
        <Globe2
          size={15}
          color={`${
            pathname === `/admin/offlineaccounts` ? "#fff" : "#707E94"
          }`}
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
          color={`${pathname === `/admin/visitors` ? "#fff" : "#707E94"}`}
        />
      ),
    },
    {
      href: `/admin/loans`,
      label: "Loans",
      active: pathname === `/admin/loans`,
      authorized: true,
      icon: (
        <DollarSign
          size={15}
          color={`${pathname === `/admin/loans` ? "#fff" : "#707E94"}`}
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
          color={`${pathname === `/admin/permissions` ? "#fff" : "#707E94"}`}
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
          color={`${pathname === `/admin/roles` ? "#fff" : "#707E94"}`}
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
          color={`${pathname === `/admin/users` ? "#fff" : "#707E94"}`}
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
          color={`${pathname === `/admin/emails` ? "#fff" : "#707E94"}`}
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
          color={`${pathname === `/admin/settings` ? "#fff" : "#707E94"}`}
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
        {menuItems.map((route, index) => (
          <div
            key={index}
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
              onClick={() => {
                setIsOpened(!isOpened);
                router.push(route.href);
              }}
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
        {AdministrationItems.map((route, index) => (
          <div
            key={index}
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
              onClick={() => {
                setIsOpened(!isOpened);
                router.push(route.href);
              }}
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
};
