import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn("min-h-screen bg-background font-sans antialiased")}>
      <div>
        <div className="">{children}</div>
      </div>
    </div>
  );
}
