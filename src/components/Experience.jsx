import React from "react";

const experiences = [
  {
    role: "Full Stack Development Intern",
    company: "Mind IT",
    year: "2024",
    description:
      "Contributed to full stack features using modern JavaScript tools and gained hands-on experience with implementation, testing, and delivery in a professional environment.",
    tags: ["React", "API Integration", "Development"],
  },
  {
    role: "Artificial Intelligence Course",
    company: "Rinex Organization",
    year: "2024",
    description:
      "Completed an AI-focused program with Grade A+, strengthening my understanding of machine learning fundamentals and real-world application thinking.",
    tags: ["Machine Learning", "AI Fundamentals", "Grade A+"],
  },
  {
  role: "Event Organizer",
  company: "Arasu Engineering College",
  year: "2025",
  description:
    "Organized and coordinated the college farewell event, overseeing planning, team collaboration, and event execution while ensuring a seamless experience for participants and meeting project deadlines.",
  tags: ["Leadership", "Event Planning", "Team Coordination"],
},
];

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div className="section-kicker">Experience</div>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="section-title max-w-2xl">
            Experience that strengthened both my technical foundation and delivery mindset.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Each role helped me move beyond theory into building, collaborating,
            and delivering with more confidence.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {experiences.map((exp, index) => (
            <article
              key={exp.role}
              className="glass-panel reveal-card grid gap-6 rounded-[2rem] p-6 md:grid-cols-[90px_1fr_auto] md:items-start md:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(96,165,250,0.18)] bg-[rgba(30,58,138,0.12)] text-lg font-semibold text-[#e5e7eb]">
                0{index + 1}
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  {exp.company}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{exp.role}</h3>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                  {exp.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-[rgba(17,20,24,0.82)] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <span className="rounded-full border border-[rgba(96,165,250,0.18)] bg-[rgba(30,58,138,0.12)] px-4 py-2 text-sm text-[#e5e7eb]">
                {exp.year}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
