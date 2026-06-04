import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "sri-siva-sakthi-builders",
    label: "Client Website",
    heading: "Sri Siva Sakthi Builders",
    subHeading: "Construction Company Business Website",
    content: [
      "Developed a responsive business website to showcase construction services, company profile, and contact information.",
      "Designed modern and mobile-friendly user interfaces to ensure a seamless experience across all devices.",
      "Optimized website performance and layouts using reusable React components and clean frontend architecture.",
    ],
    techStack: ["React.js", "Tailwind CSS", "Firebase"],
    liveDemo: "https://rad-mousse-2c2c63.netlify.app",
    viewCode: "https://github.com/MuhammadhuAadhil/Sri-Siva-Sakthi-Builders",
  },
  {
    id: "editorial-blog-platform",
    label: "Full Stack App",
    heading: "Editorial Blog Platform",
    subHeading: "Full Stack Blogging Application",
    content: [
      "Built a full-stack blogging platform with user authentication and secure content management features.",
      "Implemented CRUD operations and RESTful APIs for creating, updating, and managing blog posts.",
      "Integrated MongoDB for efficient data storage and developed a responsive user-friendly interface.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
    liveDemo: "https://blog-frontend-nine-nu.vercel.app",
    viewCode: "https://github.com/MuhammadhuAadhil/blog-frontend",
  },
  {
    id: "movieapp",
    label: "API Project",
    heading: "MovieApp",
    subHeading: "Movie Discovery and Watchlist Application",
    content: [
      "Developed a movie discovery application with real-time movie data integration using the TMDB API.",
      "Implemented advanced search functionality and personalized watchlist management for users.",
      "Designed a responsive and visually engaging interface using React.js and Tailwind CSS.",
    ],
    techStack: ["React.js", "Tailwind CSS", "Axios", "TMDB API"],
    liveDemo: "https://movie-app-psi-six-77.vercel.app/",
    viewCode: "https://github.com/MuhammadhuAadhil/Movie-App",
  },
];

function Project() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div className="section-kicker">Featured work</div>
        <div className="max-w-3xl">
          <h2 className="section-title">
           Projects showcasing design, functionality, and execution.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            A selection of frontend and full-stack projects built with responsive interfaces,
            clean component structure, and practical product features.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="glass-panel reveal-card overflow-hidden rounded-[2rem]"
            >
              <div className="relative h-56 overflow-hidden bg-[linear-gradient(135deg,#0D1B2A_0%,#1E3A8A_58%,#2563EB_100%)] p-6">
                <div className="inline-flex rounded-full border border-white/15 bg-[rgba(10,10,10,0.58)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-100">
                  {project.label}
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-200/80">
                    {project.subHeading}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
                    {project.heading}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3 text-sm leading-7 text-slate-300">
                  {project.content.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-2)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="rounded-full border border-white/10 bg-[rgba(17,20,24,0.82)] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-300">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>

                  <a
                    href={project.viewCode}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
