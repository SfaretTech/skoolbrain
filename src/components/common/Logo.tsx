import type { SVGProps } from 'react';
import { Brain } from 'lucide-react'; // Changed import
import { cn } from '@/lib/utils';

const Logo = ({ className, ...props }: SVGProps<SVGSVGElement> & { className?: string }) => (
  <div className={cn("flex items-center gap-2 text-primary", className)}>
    <Brain className="h-8 w-8" /> {/* Changed icon, removed inline gold style. It will inherit text-primary. */}
    <span className="text-2xl font-bold">SkoolBrain</span> {/* Removed redundant text-primary here as parent has it */}
  </div>
);

export default Logo;
