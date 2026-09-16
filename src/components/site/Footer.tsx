import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { company, navLinks, offices } from "@/lib/site-data";

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
          </div>
        </div>

        <div className="relative z-[2] mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="font-mono tracking-[0.2em] uppercase">Zero-Trust by design</p>
        </div>
      </div>
    </footer>
  );
}