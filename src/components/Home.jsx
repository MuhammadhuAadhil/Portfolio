import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Download,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { Link } from "react-scroll";

const techStack = ["React", "Node.js", "MongoDB", "Express", "Firebase"];
const resumePath =
  "https://drive.google.com/uc?export=download&id=1iaVYNBjBlvYB1tEy_kQvnFb3SDlB3oUa";

const topBadges = [
  { label: "Open to Opportunities", featured: true },
  { label: "Kumbakonam", icon: MapPin },
  { label: "Fresh Graduate", icon: GraduationCap },
];

const typewriterPhrases = [
  "MERN Stack Developer",
  "Frontend Enthusiast",
  "Full Stack Builder",
  "Open Source Contributor",
];

function useTypewriter(phrases, typingSpeed = 80, deletingSpeed = 45, pauseTime = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setPhraseIndex((p) => (p + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return displayed;
}

function Home() {
  const typewriterText = useTypewriter(typewriterPhrases);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-28 md:px-12 lg:px-20"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 -z-10 bg-[#04060f]" />

      {/* Top center bloom */}
      <div className="absolute -top-32 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.14),transparent_70%)]" />

      {/* Right accent */}
      <div className="absolute right-0 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(30,58,138,0.1),transparent_70%)]" />

      {/* Fine dot texture */}
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Top accent line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-600/40 to-transparent" />

      {/* ── Content ── */}
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {topBadges.map(({ label, icon: Icon, featured }, i) => (
            <span
              key={label}
              style={{ animationDelay: `${i * 90}ms` }}
              className={`animate-fade-up inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] ${
                featured
                  ? "border-blue-500/30 bg-blue-500/[0.07] text-blue-300"
                  : "border-white/[0.07] bg-white/[0.02] text-slate-500"
              }`}
            >
              {featured && (
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500" />
                </span>
              )}
              {Icon && <Icon className="h-3 w-3 opacity-60" />}
              {label}
            </span>
          ))}
        </div>

        {/* Heading */}
        <h1
          className="animate-fade-up mt-10 text-[clamp(2.4rem,7vw,5rem)] font-bold leading-[1.08] text-white"
          style={{ animationDelay: "270ms" }}
        >
          Hi, I&apos;m{" "}
          <span className="relative whitespace-nowrap">
            <span className="bg-gradient-to-b from-white to-blue-400 bg-clip-text text-transparent">
              <span className="text-[clamp(2.35rem,11vw,4.5rem)] sm:text-inherit">
                Muhammadhu Aadhil
              </span>
            </span>
            {/* underline glow */}
            <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />
          </span>
        </h1>

        {/* Typewriter row */}
        <div
          className="animate-fade-up mt-7 flex items-center justify-center gap-2"
          style={{ animationDelay: "400ms" }}
        >
          {/* left rule */}
          <span className="hidden h-px w-10 bg-gradient-to-r from-transparent to-blue-500/30 sm:block" />

          <p className="min-h-[1.6rem] text-base font-medium uppercase tracking-[0.24em] text-slate-300 sm:text-[17px]">
            {typewriterText}
            <span className="ml-0.5 inline-block h-[1.1em] w-px animate-[blink_1s_step-end_infinite] bg-blue-400 align-middle" />
          </p>

          {/* right rule */}
          <span className="hidden h-px w-10 bg-gradient-to-l from-transparent to-blue-500/30 sm:block" />
        </div>

        {/* Description */}
        <p
          className="animate-fade-up mt-7 max-w-2xl text-[15px] leading-[1.85] text-slate-300"
          style={{ animationDelay: "520ms" }}
        >
          I build responsive web applications with React, Node.js, Express, and
          MongoDB, focused on clean interfaces, dependable functionality, and
          practical user experience.
        </p>

        {/* CTA */}
        <div
          className="animate-fade-up mt-9 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "640ms" }}
        >
          <Link
            to="projects"
            smooth
            duration={450}
            offset={-88}
            className="theme-button-primary group inline-flex cursor-pointer items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(37,99,235,0.4)]"
          >
            Explore My Work
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <a
            href={resumePath}
            download
            className="theme-button-secondary inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        {/* Tech pills */}
        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-2"
          style={{ animationDelay: "760ms" }}
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium text-slate-600 transition-all duration-200 hover:border-blue-500/20 hover:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Scroll cue */}
        <Link
          to="about"
          smooth
          duration={450}
          offset={-0}
          className="animate-fade-up mt-14 flex cursor-pointer flex-col items-center gap-2 text-slate-500 transition-colors duration-300 hover:text-slate-300"
          style={{ animationDelay: "880ms" }}
        >
          <span className="text-[9px] uppercase tracking-[0.5em]">Scroll</span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/[0.08] pt-2">
            <div className="hero-bounce h-1.5 w-1 rounded-full bg-blue-500/80" />
          </div>
        </Link>

      </div>

      {/* Blink keyframe */}
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
}

export default Home;
