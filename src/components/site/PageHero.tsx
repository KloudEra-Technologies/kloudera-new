import { Reveal } from "./Reveal";

export function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-5 pt-36 pb-6 sm:px-8 sm:pt-44">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.32em] text-primary/90 uppercase">
          {kicker}
        </p>
        <h1 className="text-aurora mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
      </Reveal>
    </section>
  );
}