import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { GlassCard } from "@/components/site/GlassCard";
import { Logo } from "@/components/site/Logo";
import { partners } from "@/lib/partners";

const strategic = [
  { name: "Microsoft", desc: "Enterprise Identity & Cloud Core Alliance" },
  { name: "MongoDB", desc: "High-Performance Secure Data Clusters" },
  { name: "AWS (Amazon Web Services)", desc: "Global Cloud Resiliency & Infrastructure Security" },
  { name: "Fortinet", desc: "Next-Generation Hardware Boundary Firewalls" },
  { name: "Google Cloud", desc: "MLSecOps & Advanced Threat Intelligence Analytics" },
  { name: "Sprinto", desc: "Automated GRC & Compliance Frameworks" },
  { name: "Trend Micro", desc: "Endpoint Detection & Response (EDR) Systems" },
  { name: "Cross Cipher", desc: "Secure Cryptographic Communications Networks" },
];

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Enterprise Alliances & Security Nodes | KloudEra" },
      {
        name: "description",
        content:
          "KloudEra integrates with 100+ cybersecurity networks, cloud providers and hardware suppliers including Microsoft, AWS, Google Cloud, Fortinet and Nvidia.",
      },
      { property: "og:title", content: "KloudEra Partner Network" },
      {
        property: "og:description",
        content: "Strategic technology partners across cloud, security and hardware.",
      },
    ],
  }),
  component: Partners,
});

function Partners() {
  const logoFor = (name: string) => partners.find((p) => p.name === name)?.logo;

  return (
    <>
      <PageHero
        kicker="Integrated Partner Network"
        title="Enterprise Alliances & Security Nodes"
        description="We integrate with top-tier cybersecurity networks, cloud providers, and hardware infrastructure suppliers to deliver threat-shielded operational stability."
      />

      <Section kicker="Authenticated Strategic Alliance" title="Strategic Technology Partners">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {strategic.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <GlassCard className="h-full">
                <div className="grid h-16 place-items-center">
                  <Logo
                    src={logoFor(s.name)}
                    name={s.name}
                    className="max-h-12 max-w-[130px]"
                  />
                </div>
                <p className="mt-5 font-mono text-[10px] tracking-[0.22em] text-primary/90 uppercase">
                  System Partner
                </p>
                <h3 className="mt-1.5 text-base font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        kicker={`${partners.length} Integrations`}
        title="Full Partner Directory"
        description="The complete list of vendors, distributors and platforms in the KloudEra alliance grid."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={Math.min(i, 20) * 0.015}>
              <div className="glass glass-hover group grid h-28 place-items-center rounded-2xl p-4">
                <div className="relative z-[2] flex flex-col items-center gap-2">
                  <Logo
                    src={p.logo}
                    name={p.name}
                    className="max-h-9 max-w-[100px] opacity-85 transition-opacity group-hover:opacity-100"
                  />
                  <span className="text-center text-[11px] text-muted-foreground">
                    {p.name}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}