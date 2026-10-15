import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { GlassCard } from "@/components/site/GlassCard";
import { ContactForm } from "@/components/site/ContactForm";
import { SocialIcon } from "@/components/site/SocialIcon";
import { company, offices, socialLinks } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Schedule a Systems Consultation | KloudEra" },
      {
        name: "description",
        content:
          "Reach the KloudEra solutions engineering team in Bengaluru and Pune to evaluate your security posture or configure enterprise hardware rigs.",
      },
      { property: "og:title", content: "Contact KloudEra Technologies" },
      {
        property: "og:description",
        content: "Bengaluru HQ and Pune branch — info@kloudera.ai",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        kicker="Comms Gateway"
        title="Let's get in touch"
        description="Connect directly with our solutions engineering team to evaluate your infrastructure security posture or configure enterprise hardware rigs."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <div className="relative z-[2]">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-4">
            {offices.map((o, i) => (
              <Reveal key={o.city} delay={0.08 * (i + 1)}>
                <GlassCard className="h-full">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold">{o.city}</h2>
                    <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                      {o.kind}
                    </span>
                  </div>
                  <p className="mt-4 flex gap-2.5 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    {o.address}
                  </p>
                  <p className="mt-2.5 flex gap-2.5 text-sm text-muted-foreground">
                    <Clock className="size-4 shrink-0 text-primary" />
                    {o.hours}
                  </p>
                  <p className="mt-2.5 flex gap-2.5 text-sm text-muted-foreground">
                    <Phone className="size-4 shrink-0 text-primary" />
                    {company.phones.join(", ")}
                  </p>
                  <p className="mt-2.5 flex gap-2.5 text-sm">
                    <Mail className="size-4 shrink-0 text-primary" />
                    <a
                      href={`mailto:${company.email}`}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {company.email}
                    </a>
                  </p>
                </GlassCard>
              </Reveal>
            ))}

            <Reveal delay={0.24}>
              <GlassCard className="h-full">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold">Connect & Follow</h2>
                  <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                    SOCIAL
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Follow KloudEra for cyber defense intelligence, GPU cluster engineering updates, and company announcements.
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-background/50 px-3.5 py-2 text-xs font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                    >
                      <SocialIcon name={s.name} className="size-4" />
                      <span>{s.name}</span>
                    </a>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}