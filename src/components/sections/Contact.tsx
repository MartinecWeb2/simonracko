"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/effects/Reveal";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initial: FormState = { name: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState(
    "Odeslání se nepovedlo. Zkuste to prosím znovu nebo napište přímo na e-mail."
  );
  const [focused, setFocused] = useState<keyof FormState | null>(null);

  const validate = () => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Zadejte jméno";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Zadejte platný e-mail";
    }
    if (form.message.trim().length < 10) {
      next.message = "Napište alespoň pár vět o projektu";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setErrorMessage(
      "Odeslání se nepovedlo. Zkuste to prosím znovu nebo napište přímo na e-mail."
    );
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !payload?.ok) {
        if (payload?.error) setErrorMessage(payload.error);
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="section-pad relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Kontakt"
          title="Pojďme navrhnout něco výjimečného."
          description="Napište mi o projektu. Ozvu se obvykle do 24 hodin."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "E-mail",
                  value: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                },
                {
                  icon: Phone,
                  label: "Telefon",
                  value: siteConfig.phone,
                  href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: MapPin,
                  label: "Lokalita",
                  value: siteConfig.location,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "glass flex items-center gap-4 rounded-2xl p-5 transition hover:border-white/20",
                    !item.href && "pointer-events-none"
                  )}
                  data-cursor="hover"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet">
                    <item.icon size={18} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-muted-dark">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm text-white">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}

              <div className="glass overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10] bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.25),transparent_45%),linear-gradient(145deg,#0b0b0b,#121212)]">
                  <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />
                  <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow shadow-[0_0_30px_rgba(245,200,76,0.65)]" />
                  <p className="absolute bottom-4 left-4 text-xs text-white/70">
                    Česká republika · Olomouc
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="glass-strong rounded-[2rem] p-6 md:p-8"
              noValidate
            >
              {(["name", "email", "message"] as const).map((field) => {
                const label =
                  field === "name"
                    ? "Jméno"
                    : field === "email"
                      ? "E-mail"
                      : "Zpráva";
                const isTextarea = field === "message";
                const active =
                  focused === field || form[field].length > 0;

                return (
                  <div key={field} className="relative mb-6">
                    <label
                      htmlFor={field}
                      className={cn(
                        "pointer-events-none absolute left-4 text-sm text-muted transition-all duration-300",
                        active ? "top-2 text-[11px] text-violet" : "top-4"
                      )}
                    >
                      {label}
                    </label>
                    {isTextarea ? (
                      <textarea
                        id={field}
                        rows={5}
                        value={form.message}
                        onFocus={() => setFocused(field)}
                        onBlur={() => setFocused(null)}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, message: e.target.value }))
                        }
                        className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 pb-3 pt-7 text-sm text-white outline-none transition focus:border-violet/40"
                      />
                    ) : (
                      <input
                        id={field}
                        type={field === "email" ? "email" : "text"}
                        value={form[field]}
                        onFocus={() => setFocused(field)}
                        onBlur={() => setFocused(null)}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, [field]: e.target.value }))
                        }
                        className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 pb-3 pt-7 text-sm text-white outline-none transition focus:border-violet/40"
                        autoComplete={field === "email" ? "email" : "name"}
                      />
                    )}
                    {errors[field] ? (
                      <p className="mt-2 text-xs text-danger">{errors[field]}</p>
                    ) : null}
                  </div>
                );
              })}

              <MagneticButton type="submit" className="w-full sm:w-auto">
                <span className="inline-flex h-12 min-w-[180px] items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black transition hover:bg-white/90 disabled:opacity-60">
                  {status === "loading" ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      Odesílám…
                    </>
                  ) : (
                    "Odeslat zprávu"
                  )}
                </span>
              </MagneticButton>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex items-center gap-2 text-sm text-success"
                  >
                    <CheckCircle2 size={16} />
                    Děkuji. Ozvu se co nejdřív.
                  </motion.p>
                ) : null}
                {status === "error" ? (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 text-sm text-danger"
                  >
                    {errorMessage}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
