import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { GlassCard } from "@/components/site/GlassCard";
import { Logo } from "@/components/site/Logo";
import { clienteles } from "@/lib/site-data";

export const Route = createFileRoute("/clienteles")({
  head: () => ({
    meta: [
      { title: "Clienteles — Trusted Enterprise Partnerships | KloudEra" },
      {
        name: "description",
        content:
          "KloudEra serves leading financial, IT, construction and educational organizations including IndiaCapital, gleeds, StatusNeo and SIT Pune.",
      },
      { property: "og:title", content: "KloudEra Clienteles" },
      {
        property: "og:description",
        content:
          "Trusted engineering and security partner for finance, IT, construction and education.",
      },
    ],
  }),
  component: Clienteles,
});

function Clienteles() {
  return (
    <>
      <PageHero
        kicker="Client Directory"
        title="Our Clienteles"
        description="Explore the complete set of organizations represented in KloudEra's current client portfolio."
      />

      <Section
        kicker={`${clienteles.length} Organizations`}
        title="Full Client Directory"
        description="Every organization is shown together in a clean, responsive directory, just like the full partner network."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {clienteles.map((c, i) => (
            <Reveal key={c.name} delay={Math.min(i, 12) * 0.06}>
              <GlassCard className="group h-full min-h-64 p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="glass-strong grid h-24 place-items-center rounded-2xl p-4">
                  {c.logo ? (
                    <Logo src={c.logo} name={c.name} className="max-h-12 max-w-[145px]" />
                  ) : (
                    <span className="text-center text-lg font-semibold tracking-tight">
                      {c.name}
                    </span>
                  )}
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-border/70 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-muted-foreground uppercase">
                    {c.sector}
                  </span>
                </div>
                <p className="mt-5 font-mono text-[10px] tracking-[0.22em] text-accent uppercase">
                  {c.tag}
                </p>
                <h2 className="mt-2 text-lg font-semibold">{c.name}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{c.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
