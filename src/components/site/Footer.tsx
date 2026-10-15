import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { company, navLinks, offices, socialLinks } from "@/lib/site-data";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-5 pb-10 sm:px-8">
      <div className="glass rounded-[2rem] p-8 sm:p-12">
        <div className="relative z-[2] grid gap-10 lg:grid-cols-[1.2fr_1fr_1.2fr]">
          <div>
            <p className="text-lg font-semibold tracking-[0.18em] uppercase">
              Kloud<span className="text-primary">Era</span>
            </p>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {company.intro}
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="size-4 text-primary" /> {company.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-4 text-primary" /> {company.phones.join(", ")}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`KloudEra on ${s.name}`}
                  title={`KloudEra on ${s.name}`}
                  className="flex size-9 items-center justify-center rounded-xl border border-border/70 bg-background/50 text-muted-foreground backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]"
                >
                  <SocialIcon name={s.name} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.28em] text-primary/90 uppercase">
              Navigate
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.28em] text-primary/90 uppercase">
              Offices
            </p>
            <div className="mt-5 space-y-5">
              {offices.map((o) => (
                <div key={o.city} className="text-sm">
                  <p className="font-medium">
                    {o.city}{" "}
                    <span className="ml-1 rounded-full border border-border px-2 py-0.5 font-mono text-[10px] tracking-widest text-muted-foreground">
                      {o.kind}
                    </span>
                  </p>
                  <p className="mt-1.5 flex gap-2 text-muted-foreground">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    {o.address}
                  </p>
                  <p className="mt-1 text-muted-foreground">{o.hours}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-border/50 pt-5">
              <p className="font-mono text-xs tracking-[0.28em] text-primary/90 uppercase">
                Connect With Us
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`KloudEra on ${s.name}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-background/60 px-3 py-1.5 text-xs text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_12px_-3px_rgba(59,130,246,0.25)]"
                  >
                    <SocialIcon name={s.name} className="size-3.5" />
                    <span className="font-medium">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-[2] mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`KloudEra on ${s.name}`}
                title={`KloudEra on ${s.name}`}
                className="flex size-7 items-center justify-center rounded-lg border border-border/50 bg-background/40 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <SocialIcon name={s.name} className="size-3.5" />
              </a>
            ))}
          </div>
          <p className="font-mono tracking-[0.2em] uppercase">Zero-Trust by design</p>
        </div>
      </div>
    </footer>
  );
}