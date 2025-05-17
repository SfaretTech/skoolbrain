import type { Metadata } from 'next';
import { poppins } from '@/lib/fonts';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from '@/components/ui/tooltip';

export const metadata: Metadata = {
  title: 'SkoolBrain',
  description: 'Learn, Compete, and Grow with SkoolBrain!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
