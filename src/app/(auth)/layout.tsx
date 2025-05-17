import type { ReactNode } from 'react';
import Logo from '@/components/common/Logo';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background to-blue-100 p-4">
      <div className="absolute top-8 left-8">
        <Logo />
      </div>
      {children}
    </div>
  );
}
