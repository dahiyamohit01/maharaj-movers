import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "heavy";
}

export function GlassCard({ children, className, intensity = "medium" }: GlassCardProps) {
  const intensities = {
    light: "bg-background/40 backdrop-blur-sm border-white/5",
    medium: "bg-background/60 backdrop-blur-md border-white/10",
    heavy: "bg-background/80 backdrop-blur-lg border-white/15",
  };

  return (
    <div className={cn(
      "rounded-2xl border shadow-xl",
      intensities[intensity],
      className
    )}>
      {children}
    </div>
  );
}
