import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { GlassCard } from "@/components/site/GlassCard";
import { ContactForm } from "@/components/site/ContactForm";
import { company, offices } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Schedule a Systems Consultation | KloudEra" },
      {
        name: "description",
        content:
          "Reach the KloudEra solutions engineering team in Pune and Bengaluru to evaluate your security posture or configure enterprise hardware rigs.",
      },
      { property: "og:title", content: "Contact KloudEra Technologies" },
      {
        property: "og:description",
        content: "Pune HQ and Bengaluru branch — info@kloudera.ai",
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
          </div>
        </div>
      </Section>
    </>
  );
}