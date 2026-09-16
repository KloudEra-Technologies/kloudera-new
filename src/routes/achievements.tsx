import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { GlassCard } from "@/components/site/GlassCard";
import { Logo } from "@/components/site/Logo";
import { achievements } from "@/lib/site-data";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Government Accreditations | KloudEra" },
      {
        name: "description",
        content:
          "KloudEra Technologies is MSME certified, DPIIT #startupindia recognized and a member of the Confederation of Indian Industry (CII).",
      },
      { property: "og:title", content: "KloudEra Achievements & Accreditations" },
      {
        property: "og:description",
        content: "MSME certification, Startup India recognition and CII membership.",
      },
    ],
  }),
  component: Achievements,
});

function Achievements() {
  return (
    <>
      <PageHero
        kicker="Recognition Directory"
        title="Our Achievements"
        description="A complete view of KloudEra's certifications, recognitions and industry memberships represented in our company profile."
      />

      <Section
        kicker={`${achievements.length} Recognitions`}
        title="Recognition & Accreditation Directory"
        description="Every recognition is presented in the same clean directory style as the partner network."
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={Math.min(i, 12) * 0.06}>
              <GlassCard className="group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="glass-strong grid h-28 place-items-center rounded-2xl p-5">
                  {a.logo ? (
                    <Logo src={a.logo} name={a.title} className="max-h-16 max-w-[150px]" />
                  ) : (
                    <span className="text-4xl" aria-hidden="true">
                      {a.emoji || "✦"}
                    </span>
                  )}
                </div>
                <p className="mt-6 font-mono text-[10px] tracking-[0.24em] text-primary/90 uppercase">
                  {a.kicker}
                </p>
                <h2 className="mt-2 text-lg font-semibold leading-snug">{a.title}</h2>
                <p className="mt-1 text-xs text-muted-foreground">{a.subtitle}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{a.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
