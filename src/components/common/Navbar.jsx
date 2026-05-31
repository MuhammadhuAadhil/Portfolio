import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Github,
  Handshake,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const links = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
];

const scrollDuration = 650;
const activeScrollMarker = 130;
const cinematicEase = [0.68, 0, 0.22, 1];
const getScrollOffset = (item) => (item === "skills" ? -10 : 0);

const getLinkLabel = (item) =>
  item === "skills"
    ? "Tech Stack"
    : item.charAt(0).toUpperCase() + item.slice(1);

let scrollAnimation = null;
let scrollAnimationId = 0;

const smoothScrollTo = (
  targetY,
  duration = scrollDuration,
  reduceMotion = false,
  onComplete
) => {
  const animationId = scrollAnimationId + 1;
  scrollAnimationId = animationId;

  if (scrollAnimation) scrollAnimation.stop();

  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const destination = Math.max(0, Math.min(targetY, scrollHeight));
  const startY = window.scrollY;
  const distance = destination - startY;
  const distanceRatio = Math.min(Math.abs(distance) / window.innerHeight, 2.5);
  const adaptiveDuration = Math.max(
    380,
    Math.min(420 + distanceRatio * 120, 720)
  );

  if (reduceMotion) {
    window.scrollTo({ top: destination, behavior: "auto" });
    onComplete?.();
    return;
  }

  if (Math.abs(distance) < 2) {
    onComplete?.();
    return;
  }

  scrollAnimation = animate(startY, destination, {
    duration: adaptiveDuration / 1000,
    ease: cinematicEase,
    onUpdate: (latest) => {
      window.scrollTo({ top: latest, behavior: "auto" });
    },
    onComplete: () => {
      if (animationId === scrollAnimationId) {
        scrollAnimation = null;
        onComplete?.();
      }
    },
    onStop: () => {
      if (animationId === scrollAnimationId) {
        scrollAnimation = null;
      }
    },
  });
};

const scrollToSection = (
  id,
  offset = 0,
  duration = scrollDuration,
  reduceMotion = false,
  onComplete
) => {
  const section = document.getElementById(id);

  if (!section) return false;

  const top =
    section.getBoundingClientRect().top +
    window.scrollY +
    offset;

  smoothScrollTo(top, duration, reduceMotion, onComplete);
  return true;
};

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const programmaticScrollTarget = useRef(null);

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("home");
      return undefined;
    }

    let ticking = false;

    const updateActiveSection = () => {
      if (programmaticScrollTarget.current) {
        ticking = false;
        return;
      }

      const currentSection =
        [...links]
          .reverse()
          .find((item) => {
            const section = document.getElementById(item);

            return section
              ? section.getBoundingClientRect().top <=
                  activeScrollMarker
              : false;
          }) || "home";

      setActiveSection(currentSection);
      ticking = false;
    };

    const requestActiveSectionUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    window.addEventListener(
      "scroll",
      requestActiveSectionUpdate,
      { passive: true }
    );
    window.addEventListener(
      "resize",
      requestActiveSectionUpdate
    );

    return () => {
      if (scrollAnimation) scrollAnimation.stop();
      window.removeEventListener(
        "scroll",
        requestActiveSectionUpdate
      );
      window.removeEventListener(
        "resize",
        requestActiveSectionUpdate
      );
    };
  }, [isHomePage]);

  const startSectionScroll = (item) => {
    programmaticScrollTarget.current = item;
    setActiveSection(item);

    const didStart = scrollToSection(
      item,
      getScrollOffset(item),
      scrollDuration,
      shouldReduceMotion,
      () => {
        programmaticScrollTarget.current = null;
        setActiveSection(item);
      }
    );

    if (!didStart) {
      programmaticScrollTarget.current = null;
      setActiveSection(item);
    }
  };

  const handleSectionNavigation = (item) => {
    if (!isHomePage) {
      navigate("/");
      window.setTimeout(() => {
        startSectionScroll(item);
      }, 0);
      return;
    }

    startSectionScroll(item);
  };

  const activeClass =
    "cursor-pointer rounded-full px-4 py-2 text-slate-50";

  const normalClass =
    "cursor-pointer rounded-full px-4 py-2 text-slate-300 transition hover:text-white";

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-transparent px-4 py-4 md:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#111418] px-5 py-3 shadow-2xl shadow-black/30">
        <button
          type="button"
          onClick={() => {
            navigate("/");
            programmaticScrollTarget.current = "home";
            setActiveSection("home");
            smoothScrollTo(0, scrollDuration, shouldReduceMotion, () => {
              programmaticScrollTarget.current = null;
              setActiveSection("home");
            });
          }}
          className="flex items-center gap-3 text-left"
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[rgba(96,165,250,0.22)] bg-[#080922] shadow-[0_0_22px_rgba(37,99,235,0.24)]">
            <img
              src="/profile.jpeg"
              alt="Muhammadhu Aadhil logo"
              className="h-full w-full object-cover"
            />
          </span>

          <span className="hidden sm:block">
            <span className="block text-sm font-semibold text-white">
              Muhammadhu Aadhil
            </span>
            <span className="block text-xs text-slate-400">
              MERN Stack Developer
            </span>
          </span>
        </button>

        {isHomePage ? (
          <nav className="hidden items-center gap-1 text-sm md:flex">
            {links.map((item) => (
              <motion.button
                key={item}
                type="button"
                onClick={() => handleSectionNavigation(item)}
                className={`relative overflow-hidden ${
                  item === activeSection
                    ? activeClass
                    : normalClass
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {item === activeSection && (
                  <motion.span
                    layoutId="desktop-active-nav"
                    className="absolute inset-0 rounded-full border border-[rgba(96,165,250,0.18)] bg-[rgba(30,58,138,0.16)]"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 36,
                    }}
                  />
                )}
                <span className="relative z-10">{getLinkLabel(item)}</span>
              </motion.button>
            ))}
          </nav>
        ) : (
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:text-white"
            >
              Back to Home
            </button>
          </div>
        )}

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/MuhammadhuAadhil"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-[rgba(96,165,250,0.2)] hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammadhu-aadhil-a1027127b/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-[rgba(96,165,250,0.2)] hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <a
            href="mailto:mail4aadhilad@gmail.com"
            className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-[rgba(96,165,250,0.2)] hover:text-white"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => handleSectionNavigation("contact")}
            className="theme-button-primary inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:scale-[1.02]"
          >
            <Handshake className="h-4 w-4" />
            Hire Me
          </button>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/10 p-2 text-slate-200 md:hidden"
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/10 bg-[#0a0a0a]/95 p-5 shadow-2xl shadow-black/30 md:hidden"
          >
            {isHomePage ? (
              <div className="flex flex-col gap-2">
                {links.map((item) => (
                  <motion.button
                    key={item}
                    type="button"
                    onClick={() => {
                      handleSectionNavigation(item);
                      setMenuOpen(false);
                    }}
                    className={`relative overflow-hidden rounded-2xl px-4 py-3 text-left transition hover:bg-white/5 ${
                      item === activeSection
                        ? "text-white"
                        : "text-slate-200"
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item === activeSection && (
                      <motion.span
                        layoutId="mobile-active-nav"
                        className="absolute inset-0 rounded-2xl bg-white/5"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 36,
                        }}
                      />
                    )}
                    <span className="relative z-10">{getLinkLabel(item)}</span>
                  </motion.button>
                ))}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => navigate("/")}
                className="w-full rounded-2xl px-4 py-3 text-left text-slate-200 transition hover:bg-white/5"
              >
                Back to Home
              </button>
            )}

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://github.com/MuhammadhuAadhil"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-[rgba(96,165,250,0.2)] hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammadhu-aadhil-a1027127b/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-[rgba(96,165,250,0.2)] hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href="mailto:mail4aadhilad@gmail.com"
                className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-[rgba(96,165,250,0.2)] hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                handleSectionNavigation("contact");
                setMenuOpen(false);
              }}
              className="theme-button-primary mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white"
            >
              <Handshake className="h-4 w-4" />
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
