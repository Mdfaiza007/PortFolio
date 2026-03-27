import React, { useEffect, useRef, useState } from "react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Mdfaiza007",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.12-1.49-1.12-1.49-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.06A9.18 9.18 0 0 1 12 6.34c.85 0 1.7.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.4.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.77 0 3.97-2.34 4.85-4.57 5.1.36.32.67.94.67 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    )
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/md-faizan-943a23291",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.452 20.452h-3.554v-5.569c0-1.329-.026-3.039-1.852-3.039-1.853 0-2.136 1.448-2.136 2.944v5.664H9.356V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.27 2.372 4.27 5.458v6.283ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.777 13.019H3.559V9h3.555v11.452Z"
        />
      </svg>
    )
  },
  {
    name: "Email",
    href: "mailto:mdfaizan35609@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 4h16a2 2 0 0 1 2 2v.4l-10 6.25L2 6.4V6a2 2 0 0 1 2-2Zm0 4.35V18h16V8.35l-7.62 4.76a2 2 0 0 1-2.08 0L4 8.35Z"
        />
      </svg>
    )
  }
];

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
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const Hero = () => {
  const [ref, visible] = useRevealOnScroll();

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className={`section-wrapper flex flex-col items-center justify-center lg:min-h-[88vh] ${
        visible ? "reveal-section visible" : "reveal-section"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center">
        <div className="relative flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-primary-200 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
            <span>Full Stack Developer · Problem Solver</span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-sky-300 bg-clip-text text-transparent">
                Md Faizan
              </span>
            </h1>
            <p className="mt-3 text-base sm:text-lg font-medium text-slate-300">
              Full Stack Developer&nbsp;&nbsp;|&nbsp;&nbsp;Software Developer
            </p>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-400">
              I build scalable, production-ready web applications with a strong
              focus on backend architecture, clean APIs, and real-world problem
              solving. I enjoy turning complex requirements into reliable,
              maintainable systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 sm:pt-3">
            <button onClick={handleScrollToProjects} className="btn-primary">
              View Projects
            </button>
            <a
              href="/Md_Faizan_Resume.pdf"
              className="btn-outline"
              download
            >
              Download Resume
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 sm:pt-5">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              Find me on
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/70 text-slate-200 shadow-sm transition hover:border-primary-500 hover:text-primary-200 hover:-translate-y-0.5"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto flex h-64 w-64 max-w-xs items-center justify-center rounded-[2rem] bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/90 p-[1px] shadow-soft-glow sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            <div className="card-glass relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[1.9rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(8,47,73,0.55),transparent_55%)]" />
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-950/70 border border-slate-700/70 shadow-lg">
                  <span className="text-3xl font-semibold text-primary-300">
                    MF
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-200">
                  B.Tech CSE (AI) · 2023–2027
                </p>
                <p className="text-xs text-slate-400">
                  Jamia Hamdard · New Delhi
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-200">
                  <div className="rounded-xl bg-slate-900/70 px-3 py-2 text-left">
                    <p className="font-semibold text-primary-200">
                      Backend-first
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">
                      REST APIs, auth, performance-focused systems.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-900/70 px-3 py-2 text-left">
                    <p className="font-semibold text-primary-200">Full Stack</p>
                    <p className="mt-1 text-[10px] text-slate-400">
                      React, Node.js, Express.js, MongoDB, MySQL.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-900/70 px-3 py-2 text-left col-span-2">
                    <p className="font-semibold text-primary-200">
                      DSA & Problem Solving
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">
                      Strong foundation in algorithms, data structures, and
                      core CS concepts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-3xl border border-primary-500/40 bg-primary-500/10 blur-2xl" />
            <div className="pointer-events-none absolute -right-3 -bottom-4 h-16 w-16 rounded-full border border-sky-500/30 bg-sky-500/10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

