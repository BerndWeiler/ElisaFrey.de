"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { profile } from "@/lib/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="kontakt" className="relative py-20 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Kontakt" subtitle="Für Anfragen, Kooperationen oder Buchungen" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <FadeIn direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-3xl tracking-wide uppercase mb-4">
                  Let&apos;s Connect
                </h3>
                <p className="text-muted leading-relaxed">
                  Ob Medienanfragen, Sponsoring-Möglichkeiten oder Kooperationen –
                  ich freue mich über jede Nachricht.
                </p>
              </div>

              <div>
                <span className="text-foreground font-medium">Elisa Frey</span>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:border-gold/40 hover:shadow-[0_0_15px_rgba(200,162,78,0.15)] transition-all duration-300">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </div>
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 text-sm hover:text-gold transition-colors"
                  >
                    {profile.instagramHandle}
                  </a>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:border-gold/40 hover:shadow-[0_0_15px_rgba(200,162,78,0.15)] transition-all duration-300">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.5C5 3.5 3 5.5 3 8c0 2 .8 3.2 2 4.2l-.5 8.3c0 .8.7 1.5 1.5 1.5h4c.8 0 1.5-.7 1.5-1.5L11 12c0-1-1-2-1-4 0-2.5-1-4.5-2.5-4.5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5C19 3.5 21 5.5 21 8c0 2-.8 3.2-2 4.2l.5 8.3c0 .8-.7 1.5-1.5 1.5h-4c-.8 0-1.5-.7-1.5-1.5L13 12c0-1 1-2 1-4 0-2.5 1-4.5 2.5-4.5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 1.5L10.5 3M15 1.5L13.5 3M12 1l0 1.5" />
                    </svg>
                  </div>
                  <a
                    href="https://boxrec.com/en/box-pro/1235889"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 text-sm hover:text-gold transition-colors"
                  >
                    BoxRec Profil
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-display text-xl tracking-wide uppercase mb-3">
                  Trainer &amp; Management
                </h4>
                <span className="text-foreground font-medium">Björn Schulz</span>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:border-gold/40 hover:shadow-[0_0_15px_rgba(200,162,78,0.15)] transition-all duration-300">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </div>
                  <a
                    href="https://www.instagram.com/bjoern.schulz.personalcoach/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 text-sm hover:text-gold transition-colors"
                  >
                    @bjoern.schulz.personalcoach
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="right">
            <GlassCard className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-gold text-4xl mb-4">&#10003;</div>
                  <h3 className="font-display text-2xl tracking-wide uppercase mb-2">
                    Nachricht gesendet
                  </h3>
                  <p className="text-muted">Ich melde mich so schnell wie möglich.</p>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    try {
                      const res = await fetch("https://formsubmit.co/ajax/bjoern.schulz.coach@gmx.de", {
                        method: "POST",
                        headers: { "Content-Type": "application/json", Accept: "application/json" },
                        body: JSON.stringify({
                          name: formData.get("name"),
                          email: formData.get("email"),
                          _subject: formData.get("subject"),
                          message: formData.get("message"),
                        }),
                      });
                      if (res.ok) setSubmitted(true);
                    } catch {
                      setSubmitted(true);
                    }
                  }}
                  className="space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="text" name="_honey" className="hidden" />
                  <div>
                    <label htmlFor="name" className="block text-xs tracking-[0.2em] uppercase text-muted mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:shadow-[0_0_10px_rgba(200,162,78,0.1)] transition-all"
                      placeholder="Dein Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs tracking-[0.2em] uppercase text-muted mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:shadow-[0_0_10px_rgba(200,162,78,0.1)] transition-all"
                      placeholder="deine@email.de"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs tracking-[0.2em] uppercase text-muted mb-2">
                      Betreff
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:shadow-[0_0_10px_rgba(200,162,78,0.1)] transition-all"
                      placeholder="Worum geht es?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs tracking-[0.2em] uppercase text-muted mb-2">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                      placeholder="Deine Nachricht..."
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full">
                    Nachricht senden
                  </Button>
                </form>
              )}
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
