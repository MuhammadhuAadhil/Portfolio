import React from "react";
import {
  SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiCss,
  SiFramer, SiRedux, SiNodedotjs, SiExpress, SiSocketdotio,
  SiJsonwebtokens, SiMongodb, SiMongoose, SiFirebase,
  SiMysql, SiGithub, SiVercel, SiNetlify, SiPostman,
} from "react-icons/si";
import { TbApi, TbAdjustments, TbBrandVscode } from "react-icons/tb";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive, accessible, and performant user interfaces",
    items: [
      { label: "React", icon: <SiReact color="#61dafb" /> },
      { label: "JavaScript (ES6+)", icon: <SiJavascript color="#f7df1e" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
      { label: "HTML5", icon: <SiHtml5 color="#e34f26" /> },
      { label: "CSS3", icon: <SiCss color="#1572b6" /> },
      { label: "Framer Motion", icon: <SiFramer color="#a78bfa" /> },
      { label: "Redux Toolkit", icon: <SiRedux color="#764abc" /> },
    ],
  },
  {
    title: "Backend",
    description: "Designing scalable APIs and server-side architectures",
    items: [
      { label: "Node.js", icon: <SiNodedotjs color="#68a063" /> },
      { label: "Express.js", icon: <SiExpress color="#9ca3af" /> },
      { label: "REST APIs", icon: <TbApi color="#9ca3af" /> },
      { label: "Socket.io", icon: <SiSocketdotio color="#f472b6" /> },
      { label: "JWT Auth", icon: <SiJsonwebtokens color="#fbbf24" /> },
      { label: "Middleware", icon: <TbAdjustments color="#6ee7b7" /> },
    ],
  },
  {
    title: "Database",
    description: "Data modeling, queries, and storage solutions",
    items: [
      { label: "MongoDB", icon: <SiMongodb color="#4ade80" /> },
      { label: "Mongoose ODM", icon: <SiMongoose color="#a78bfa" /> },
      { label: "Firebase", icon: <SiFirebase color="#f97316" /> },
      { label: "SQL Basics", icon: <SiMysql color="#60a5fa" /> },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Deployment, version control, and developer tooling",
    items: [
      { label: "Git & GitHub", icon: <SiGithub color="#e2e8f0" /> },
      { label: "Vercel", icon: <SiVercel color="#e2e8f0" /> },
      { label: "Netlify", icon: <SiNetlify color="#38bdf8" /> },
      { label: "VS Code", icon: <TbBrandVscode color="#007acc" /> },
      { label: "Postman", icon: <SiPostman color="#ef4444" /> },
    ],
  },
];

/* ── Ripple helper ── */
function triggerRipple(e) {
  const tag = e.currentTarget;
  const rect = tag.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const size = Math.max(tag.offsetWidth, tag.offsetHeight);

  const ripple = document.createElement("span");
  ripple.style.cssText = `
    position: absolute;
    border-radius: 50%;
    background: rgba(96, 165, 250, 0.22);
    width: ${size}px;
    height: ${size}px;
    left: ${x - size / 2}px;
    top: ${y - size / 2}px;
    transform: scale(0);
    animation: skillRipple 0.55s linear;
    pointer-events: none;
  `;
  tag.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

/* ── Inject keyframes once ── */
if (typeof document !== "undefined" && !document.getElementById("skill-anim-style")) {
  const style = document.createElement("style");
  style.id = "skill-anim-style";
  style.textContent = `
    @keyframes skillRipple {
      to { transform: scale(4); opacity: 0; }
    }
    .skill-tag {
      position: relative;
      overflow: hidden;
      cursor: pointer;
      user-select: none;
      transition:
        border-color 0.25s ease,
        color 0.25s ease,
        transform 0.2s ease,
        box-shadow 0.25s ease;
    }
    .skill-tag:hover {
      border-color: #60a5fa !important;
      color: #dbeafe !important;
      transform: translateY(-2px);
      box-shadow:
        0 10px 24px rgba(0, 0, 0, 0.24);
    }
    .skill-tag:active {
      transform: translateY(0px) scale(0.96);
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
    }
  `;
  document.head.appendChild(style);
}

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div className="section-kicker">Skills</div>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-title max-w-2xl">My Tech Stack</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Technologies I work with daily to build production-ready applications.
              I use them to design, develop, and deploy scalable solutions efficiently.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="glass-panel reveal-card rounded-[2rem] p-6 md:p-8"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent-2)]" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">
                  {group.title}
                </span>
              </div>

              <p className="mb-5 pl-5 text-sm leading-7 text-slate-400">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.label}
                    className="skill-tag flex items-center gap-2 rounded-lg border border-white/10 bg-[rgba(17,20,24,0.82)] px-3.5 py-2 text-xs text-slate-300"
                    onClick={triggerRipple}
                  >
                    <span className="flex items-center text-[15px]">
                      {item.icon}
                    </span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
