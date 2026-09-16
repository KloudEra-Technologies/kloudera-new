import { useState } from "react";
import { cn } from "@/lib/utils";

export function Logo({
  src,
  name,
  className,
}: {
  src: string | undefined;
  name: string;
  className?: string | undefined;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <span className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground/80">
        {name}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={`${name} logo`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn("w-auto object-contain", className)}
    />
  );
}