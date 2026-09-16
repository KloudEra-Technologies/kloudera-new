import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { GlassCard } from "@/components/site/GlassCard";
import { benefits, team, zeroTrustPrinciples } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Built for High-Stakes Enterprise Resilience | KloudEra" },
      {
        name: "description",
        content:
          "KloudEra Technologies' mission, zero-trust principles, and the executive leadership team behind our cybersecurity and cloud practice.",
      },
      { property: "og:title", content: "About KloudEra Technologies" },
      {
        property: "og:description",
        content: "Our mission, values and executive leadership team.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        kicker="Our Mission"
        title="Built for High-Stakes Enterprise Resilience"
        description="We believe in your success and that technology can drive the best results for your business, no matter your industry or goals."
      />

      <Section title="Why Choose Us?">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.07}>
              <GlassCard className="h-full">
                <p className="font-mono text-xs text-accent">⚡ // {b.title}</p>
                <p className="mt-4 text-sm text-muted-foreground">{b.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section kicker="System Framework" title="Zero-Trust Command Principles">
        <div className="grid gap-4 md:grid-cols-3">
          {zeroTrustPrinciples.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <GlassCard className="h-full">
                <span className="text-3xl font-semibold text-primary/80">{p.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section kicker="Executive Leadership" title="Meet Our Leadership Team">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <GlassCard className="h-full text-center">
                <div className="mx-auto grid size-24 place-items-center overflow-hidden rounded-full bg-white/8 ring-1 ring-border">
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-semibold text-primary">
                      {m.name.charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{m.name}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{m.role}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}