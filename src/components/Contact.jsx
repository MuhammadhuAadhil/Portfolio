import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import Footer from "./common/Footer";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    value: "mail4aadhilad@gmail.com",
    accent: "text-[var(--color-accent-2)]",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8807395891",
    accent: "text-[var(--color-text)]",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Kumbakonam, Tamil Nadu, India",
    accent: "text-[var(--color-text)]",
  },
];

function Contact() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function sendEmail(event) {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    emailjs
      .sendForm(
        "service_8ppvqb6",
        "template_fpbca7i",
        form.current,
        "4LA1_CibY_JHifztn"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        event.target.reset();
      })
      .catch(() => {
        setLoading(false);
        setError("Message could not be sent right now. Please try again later.");
      });
  }

  return (
    <section id="contact" className="section-shell pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="section-kicker">Contact</div>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="section-title max-w-2xl">
              Let&apos;s Connect
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              If you are looking for support with a portfolio, landing page, or
              frontend-focused product interface, I am open to internships,
              freelance work, and meaningful collaboration.
            </p>

            <div className="mt-7 space-y-4">
              {contactCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="glass-panel reveal-card flex items-start gap-4 rounded-[1.75rem] p-5"
                  >
                    <div className="rounded-2xl border border-white/10 bg-[rgba(17,20,24,0.82)] p-3">
                      <Icon className={`h-5 w-5 ${card.accent}`} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                        {card.title}
                      </p>
                      <p className="mt-2 text-sm text-slate-200">{card.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 flex gap-3">
              <a
                href="https://www.linkedin.com/in/muhammadhu-aadhil-a1027127b/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-[rgba(96,165,250,0.2)] hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/MuhammadhuAadhil"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-[rgba(96,165,250,0.2)] hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="glass-panel rounded-[2rem] p-6 md:p-8"
          >
            <div className="mb-5">
              <h3 className="text-xl font-semibold text-white">Send a Message</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Share a brief overview of your requirement and I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="theme-input w-full rounded-2xl p-3 text-sm text-white outline-none transition"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                  className="theme-input w-full rounded-2xl p-3 text-sm text-white outline-none transition"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm text-slate-300">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Job Opportunity / Internship / Freelance / Just saying hi"
                required
                className="theme-input w-full rounded-2xl p-3 text-sm text-white outline-none transition"
              />
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm text-slate-300">Message</label>
              <textarea
                name="message"
                rows="7"
                placeholder="Tell me about the role or project..."
                required
                className="theme-input w-full rounded-[1.5rem] p-4 text-sm text-white outline-none transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="theme-button-primary mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.01] disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4" />
            </button>

            {success && (
              <p className="mt-4 text-sm text-[var(--color-text)]">
                Message sent successfully. I&apos;ll get back to you soon.
              </p>
            )}

            {error && <p className="mt-4 text-sm text-rose-300">{error}</p>}
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Contact;
