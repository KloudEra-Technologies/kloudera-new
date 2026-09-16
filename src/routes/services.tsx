import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { GlassCard } from "@/components/site/GlassCard";
import { serviceGroups } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Managed Security, Cloud & AI | KloudEra" },
      {
        name: "description",
        content:
          "Managed cybersecurity, automation, digital technology, managed cloud, AI CoE custom LLM development and next-generation hardware services.",
      },
      { property: "og:title", content: "KloudEra Services — Solutions Command" },
      {
        property: "og:description",
        content:
          "vCISO, VAPT, MLSecOps, cloud migration, RPA and AI-ready enterprise hardware.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        kicker="Solutions Command"
        title="Our Services"
        description="End-to-end security, cloud, automation, AI and hardware services engineered for enterprise scale."
      />
      <Section>
        <div className="space-y-6">
          {serviceGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.04}>
              <GlassCard className="p-8" hover={false}>
                <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
                  <div>
                    <span className="font-mono text-xs text-accent">
                      // {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 text-2xl font-semibold">{g.title}</h2>
                    <p className="mt-4 text-sm text-muted-foreground">{g.body}</p>
                  </div>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="glass-strong flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm transition-transform duration-300 hover:translate-x-1"
                      >
                        <ChevronRight className="size-3.5 shrink-0 text-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <GlassCard className="p-10 text-center">
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Interested in learning more about how our services can benefit your business?
              Contact us today to discuss your needs and find the perfect solution. Our team
              is ready to help you optimize, secure, and scale your IT infrastructure.
            </p>
            <Link
              to="/contact"
              className="sheen-on-hover mt-7 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground"
            >
              Schedule a Meeting
            </Link>
          </GlassCard>
        </Reveal>
      </Section>
    </>
  );
}