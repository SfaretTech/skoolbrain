import Logo from "@/components/common/Logo";
import { UserNav } from "@/components/dashboard/UserNav";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Logo />
        <UserNav />
      </div>
    </header>
  );
}
