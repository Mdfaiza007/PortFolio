import React, { useEffect, useRef, useState } from "react";

const useRevealOnScroll = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.22 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const projects = [
  {
    title: "Sorting and Searching Visualizer",
    description:
      "Built a fully automated algorithm visualization platform supporting multiple sorting and searching techniques. Designed smooth asynchronous animations using JavaScript Promises and dynamic DOM rendering. Added real-time step tracking, complexity display, performance graph, and FPS monitoring. Implemented mobile-optimized rendering and speed presets for adaptive performance.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://sortingsearchingvisualizer.netlify.app/",
    githubUrl: "https://github.com/Mdfaiza007"
  },
  {
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio website built with React and Tailwind CSS featuring smooth scrolling, premium dark UI, clean reusable components, and recruiter-friendly structure.",
    techStack: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "#",
    githubUrl: "https://github.com/Mdfaiza007"
  },
  {
    title: "Currency Converter",
    description:
      "A real-time currency converter application using React hooks and API integration. Displays updated exchange rates with a simple and intuitive UI.",
    techStack: ["React", "API", "Hooks"],
    liveUrl: "#",
    githubUrl: "https://github.com/Mdfaiza007"
  },
  {
    title: "JWT Auth Task Manager",
    description:
      "A full-stack task manager with JWT authentication, protected routes, user login/signup, and CRUD functionality for tasks. Built to demonstrate backend, API, and database skills.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  const [ref, visible] = useRevealOnScroll();

  return (
    <section
      id="projects"
      ref={ref}
      className={`section-wrapper ${
        visible ? "reveal-section visible" : "reveal-section"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              Premium projects that highlight backend thinking, clean
              architecture, and polished user experiences.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card-glass group flex h-full flex-col justify-between overflow-hidden transition hover:-translate-y-1 hover:border-primary-500/60"
            >
              <div className="relative p-5 sm:p-6">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-500/8 via-transparent to-slate-950/80 opacity-0 transition group-hover:opacity-100" />
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="tag-pill text-[11px] group-hover:border-primary-500/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative border-t border-slate-800/80 bg-slate-950/40 px-5 py-4 sm:px-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                    <span>Project showcase</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={project.liveUrl || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline text-xs"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary text-xs"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

