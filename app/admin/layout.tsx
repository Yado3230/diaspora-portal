"use client";
import { cn } from "@/lib/utils";

import Sidebar from "@/app/admin/components/Sidebar";
import Navbar from "@/app/admin/components/Navbar";
import { useEffect, useState } from "react";
import { useAuth } from "../api/auth/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { ChangePasswordProvider } from "@/providers/change-password-provider";
import { useChangePasswordModal } from "@/hooks/use-change-password-modal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const useChangePassword = useChangePasswordModal();
  const [mounted, setMounted] = useState(false);
  const [isOpened, setIsOpened] = useState(true);
  const passwordChanged = localStorage.getItem("passwordChanged");

  useEffect(() => {
    setMounted(true);
  }, []);

  const { accessToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!mounted) {
      return;
    }

    if (!accessToken) {
      router.push("/");
    }

    if (passwordChanged === "TRUE") {
      useChangePassword.passwordChanged();
    }
  }, [mounted, accessToken, router, passwordChanged]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <ChangePasswordProvider />
      <div className={cn("min-h-screen bg-background font-sans antialiased")}>
        <div>
          <Navbar setIsOpened={setIsOpened} isOpened={isOpened} />
          <Sidebar setIsOpened={setIsOpened} isOpened={isOpened} />
          <div className="m-8 md:ml-72 mt-16 pt-4">{children}</div>
        </div>
      </div>
    </>
  );
}
