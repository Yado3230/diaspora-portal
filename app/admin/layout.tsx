"use client";
import { cn } from "@/lib/utils";

import Sidebar from "@/app/admin/components/Sidebar";
import Navbar from "@/app/admin/components/Navbar";
import { useEffect, useState } from "react";
import { useAuth } from "../api/auth/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [isOpened, setIsOpened] = useState(true);

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
      // Redirect to login page if not authenticated
      router.push("/");
    }
  }, [mounted, accessToken, router]);

  if (!mounted) {
    return null;
  }
  return (
    <div className={cn("min-h-screen bg-background font-sans antialiased")}>
      <div>
        <Navbar setIsOpened={setIsOpened} isOpened={isOpened} />
        <Sidebar setIsOpened={setIsOpened} isOpened={isOpened} />
        <div className="m-8 md:ml-72 mt-16 pt-4">{children}</div>
      </div>
    </div>
  );
}
