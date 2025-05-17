import type { ReactNode } from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}
