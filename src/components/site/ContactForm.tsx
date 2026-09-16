import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { sendEnquiry } from "@/lib/contact.functions";

const fields = [
  { name: "name", label: "Full Name", type: "text", required: true },
  { name: "email", label: "Work Email", type: "email", required: true },
  {
    name: "company",
    label: "Company / Organization",
    type: "text",
    required: false,
  },
  {
    name: "subject",
    label: "Subject Line",
    type: "text",
    required: false,
  },
];

export function ContactForm() {
  const sendEnquiryFn = useServerFn(sendEnquiry);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      await sendEnquiryFn({
        data: {
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          company: String(formData.get("company") ?? ""),
          subject: String(formData.get("subject") ?? ""),
          message: String(formData.get("message") ?? ""),
          website: String(formData.get("website") ?? ""),
        },
      });

      form.reset();

      toast.success("Inquiry transmitted", {
        description:
          "Your message has been sent. Our solutions engineering team will reply to you shortly.",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);

      toast.error("Unable to transmit inquiry", {
        description:
          "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      {fields.map((f) => (
        <label
          key={f.name}
          className={f.name === "subject" ? "sm:col-span-2" : ""}
        >
          <span className="mb-2 block font-mono text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
            {f.label}
          </span>

          <input
            name={f.name}
            type={f.type}
            required={f.required}
            className="w-full rounded-2xl border border-input bg-white/5 px-4 py-3 text-sm outline-none backdrop-blur-xl transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-ring/40"
            placeholder={f.label}
          />
        </label>
      ))}

      <label className="sm:col-span-2">
        <span className="mb-2 block font-mono text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
          Message / Infrastructure Request
        </span>

        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          className="w-full resize-none rounded-2xl border border-input bg-white/5 px-4 py-3 text-sm outline-none backdrop-blur-xl transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-ring/40"
          placeholder="Describe your infrastructure or security requirement"
        />
      </label>

      {/* Honeypot field for basic spam protection */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <button
        type="submit"
        disabled={sending}
        className="sheen-on-hover relative w-full rounded-2xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
      >
        {sending ? "Transmitting…" : "Transmit Inquiry"}
      </button>
    </form>
  );
}