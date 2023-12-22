import type { Metadata } from "next";
import { cn } from "@/lib/utils";

import "./globals.css";
// import { NewSessionProvider } from "@/providers/session-provider";
import { ToasterProvider } from "@/providers/toast-provider";
import { AuthProvider } from "./api/auth/contexts/AuthContext";

export const metadata: Metadata = {
  title: "Diaspora Admin Portal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-gray-50"
        )}
      >
        <AuthProvider>
          <ToasterProvider />
          <div>
            <div className="">{children}</div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
