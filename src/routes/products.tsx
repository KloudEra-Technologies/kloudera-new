import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { GlassCard } from "@/components/site/GlassCard";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Kloudera Enterprise Software Suite" },
      {
        name: "description",
        content:
          "Kloudera Meet Scheduler, Klodera Data Recovery Tool and Kloudera Remote Device Controller — proprietary enterprise software under active development.",
      },
      { property: "og:title", content: "Kloudera Enterprise Software Suite" },
      {
        property: "og:description",
        content:
          "Workspace scheduling, disaster recovery and zero-trust remote device management products.",
      },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero
        kicker="🛠️ Work in progress — under active development"
        title="Kloudera Enterprise Software Suite"
        description="Proprietary workspace scheduling, disaster recovery, and remote device management products currently under active engineering development."
      />
      <Section>
        <Reveal>
          <div className="glass rounded-2xl border-l-4 border-l-accent p-5">
            <p className="relative z-[2] text-sm text-muted-foreground">
              ⚡ Notice: Products in this suite are currently in private enterprise testing &
              hardware staging. Full commercial launch scheduled soon.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 space-y-6">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <GlassCard className="p-8">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.24em] text-accent uppercase">
                      {p.kicker}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl font-semibold">{p.name}</h2>
                      <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-primary uppercase">
                        {p.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-medium text-foreground/80">
                      {p.subtitle}
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground">{p.body}</p>
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-7 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
                      >
                        {p.linkText || "View Product →"}
                      </a>
                    ) : (
                      <Link
                        to="/contact"
                        className="mt-7 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
                      >
                        Request Product Demo →
                      </Link>
                    )}
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
                      Capability Highlights
                    </p>
                    <ul className="mt-4 grid gap-2">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="glass-strong flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm"
                        >
                          <Check className="size-4 shrink-0 text-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}