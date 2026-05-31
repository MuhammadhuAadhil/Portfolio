import React from "react";
import { FolderKanban, GraduationCap, Palette } from "lucide-react";

const profileCards = [
  {
    title: "Education",
    value: "B.E Computer Science & Engineering",
    meta: "Arasu Engineering College",
    icon: GraduationCap,
  },
  {
    title: "Projects",
    value: "10+ Projects Built",
    meta: "Full Stack & Frontend Applications",
    icon: FolderKanban,
  },
  {
    title: "Design Focus",
    value: "UI/UX & Frontend Development",
    meta: "Clean Interfaces with Great User Experience",
    icon: Palette,
  },
];

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div className="section-kicker">About me</div>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-title max-w-3xl">
              Building practical web experiences with clean design and reliable code.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            A short overview of my education, internship experience, location,
            and the type of development work I am focused on.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="py-2">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent-2)]">
              Profile summary
            </p>

            <div className="mt-6 max-w-2xl space-y-5">
              <p className="section-copy">
                I&apos;m a 2026 Computer Science and Engineering graduate from Arasu
                Engineering College with a strong foundation in programming and web
                development. Through my internship at Mind IT, I gained hands-on
                experience in full-stack development, contributing to scalable and
                user-focused applications while applying technical concepts to
                real-world challenges.
              </p>

              <p className="section-copy text-slate-400">
                My expertise includes front-end development with React and
                JavaScript, UI/UX design using Figma, and backend integration with
                Firebase, REST APIs, and deployment workflows. I&apos;m passionate
                about building reliable digital solutions that combine clean design,
                functionality, and performance.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="border-l border-[rgba(96,165,250,0.35)] pl-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Based in
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  Kumbakonam, Tamil Nadu
                </p>
              </div>
              <div className="border-l border-[rgba(96,165,250,0.35)] pl-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Availability
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  Internships and full-time roles
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
            {profileCards.map((item) => (
              <article
                key={item.title}
                className="glass-panel reveal-card flex items-start gap-5 rounded-[2rem] p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[rgba(96,165,250,0.18)] bg-[rgba(30,58,138,0.12)] text-[var(--color-accent-2)]">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    {item.title}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{item.value}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
