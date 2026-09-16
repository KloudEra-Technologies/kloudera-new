import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  kicker,
  title,
  description,
  action,
  children,
  className,
}: {
  id?: string;
  kicker?: string;
  title?: string;
  description?: string;
  action?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-7xl px-5 py-20 sm:px-8", className)}>
      {(kicker || title || action) && (
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            {kicker && (
              <p className="mb-3 font-mono text-xs tracking-[0.28em] text-primary/90 uppercase">
                {kicker}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base text-muted-foreground">{description}</p>
            )}
          </div>
          {action}
        </Reveal>
      )}
      {children}
    </section>
  );
}