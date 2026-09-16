import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { GlassCard } from "@/components/site/GlassCard";
import { certifications, complianceStandards } from "@/lib/site-data";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Compliance Standards | KloudEra" },
      {
        name: "description",
        content:
          "ISO 27001:2022, SOC 2 Type II, NIST CSF 2.0, CMMI Level 5, HIPAA and PCI-DSS v4.0 aligned practices plus team certification badges.",
      },
      { property: "og:title", content: "KloudEra Certifications & Compliance" },
      {
        property: "og:description",
        content: "Center of Excellence compliance standards and engineer certifications.",
      },
    ],
  }),
  component: Certifications,
});

function Certifications() {
  return (
    <>
      <PageHero
        kicker="Compliance Standards"
        title="KloudEra Technologies CoE — Center of Excellence"
        description="Our security practice is aligned to the frameworks enterprise auditors expect, and our engineers hold vendor-verified certifications."
      />

      <Section title="Framework Alignment">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {complianceStandards.map((s, i) => (
            <Reveal key={s} delay={i * 0.05}>
              <GlassCard className="flex h-full items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/12 text-primary ring-1 ring-primary/30">
                  <ShieldCheck className="size-5" />
                </span>
                <p className="font-mono text-sm tracking-[0.12em] uppercase">{s}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Certification Badges">
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.04}>
              <GlassCard className="h-full">
                <div className="flex h-full items-start gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/5 p-2 ring-1 ring-primary/20">
                    <img src={c.image} alt={c.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{c.name}</p>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                      {c.description}
                    </p>
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