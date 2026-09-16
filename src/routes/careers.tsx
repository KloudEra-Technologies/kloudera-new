import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { GlassCard } from "@/components/site/GlassCard";
import { hiringSteps, jobs } from "@/lib/site-data";

const filters = ["All Departments", "SECURITY", "HARDWARE", "MICROSOFT"];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join the KloudEra Engineering Core" },
      {
        name: "description",
        content:
          "Open roles in cyber security auditing, AI compute pipelines and Microsoft solutions architecture at KloudEra Technologies.",
      },
      { property: "og:title", content: "Careers at KloudEra Technologies" },
      {
        property: "og:description",
        content: "Bright future awaits you — cutting-edge cyber security, cloud and AI work.",
      },
    ],
  }),
  component: Careers,
});

function Careers() {
  const [filter, setFilter] = useState(filters[0]!);
  const visible = jobs.filter((j) => filter === filters[0] || j.dept === filter);

  return (
    <>
      <PageHero
        kicker="Human Capital // Careers"
        title="Bright Future Awaits You!"
        description="At KloudEra Technologies, we're shaping the future of Cyber Security, Cloud AI, and Digital Transformation. We're a team of innovators, creators, and problem-solvers who thrive on building impactful solutions."
      />

      <Section title="Why Join Us?">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Work on cutting-edge projects in Cyber Security, Cloud & AI.",
            "Career growth & mentorship opportunities.",
            "Inclusive and collaborative culture.",
            "Flexible, future-ready workplace.",
          ].map((t, i) => (
            <Reveal key={t} delay={i * 0.06}>
              <GlassCard className="h-full">
                <p className="text-sm">{t}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Applicant Recruitment Corridor">
        <div className="grid gap-4 md:grid-cols-4">
          {hiringSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.07}>
              <GlassCard className="h-full">
                <p className="font-mono text-[10px] tracking-[0.22em] text-primary/90 uppercase">
                  {s.step}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Open Positions List">
        <Reveal className="glass mb-6 inline-flex flex-wrap gap-1.5 rounded-full p-1.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative z-[2] rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {visible.map((j, i) => (
            <Reveal key={j.title} delay={i * 0.06}>
              <GlassCard className="h-full">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/12 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-primary uppercase">
                    {j.dept}
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 text-[10px] text-muted-foreground">
                    {j.location}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{j.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{j.level}</p>
                <p className="mt-3 text-sm text-muted-foreground">{j.body}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
                >
                  Initiate Application
                </Link>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}