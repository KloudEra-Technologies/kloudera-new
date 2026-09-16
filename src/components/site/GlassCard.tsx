import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass sheen-on-hover rounded-3xl p-6",
        hover && "glass-hover",
        className,
      )}
    >
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}