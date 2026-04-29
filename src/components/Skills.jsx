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

const skillCategories = [
  {
    title: "Frontend",
    description: "Building responsive, accessible interfaces with clean UX.",
    skills: ["HTML", "CSS", "Tailwind CSS", "React"]
  },
  {
    title: "Backend",
    description: "Designing APIs, auth flows, and scalable services.",
    skills: ["Node.js", "Express.js", "Mongoose", "REST API"]
  },
  {
    title: "Database",
    description: "Working with both document and relational databases.",
    skills: ["MongoDB", "MySQL"]
  },
  {
    title: "Programming",
    description: "Writing clean, efficient, and maintainable code.",
    skills: ["JavaScript", "Python", "C++", "C"]
  },
  {
    title: "Core CS",
    description: "Strong foundations for reasoning about performance.",
    skills: ["DSA", "OOPs", "OS", "DBMS"]
  },
  {
    title: "Tools & Integrations",
    description: "Third-party services, security, and developer tooling.",
    skills: ["JWT", "Razorpay", "Cloudinary", "Multer", "Git"]
  }
];

const Skills = () => {
  const [ref, visible] = useRevealOnScroll();

  return (
    <section
      id="skills"
      ref={ref}
      className={`section-wrapper ${
        visible ? "reveal-section visible" : "reveal-section"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">
              A balanced skill set across frontend, backend, databases, and
              core computer science, enabling me to build end-to-end solutions.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card-glass group relative overflow-hidden p-5 sm:p-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-slate-950/60 opacity-0 transition group-hover:opacity-100" />
              <div className="relative z-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {category.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="tag-pill text-[11px] group-hover:border-primary-500/50 group-hover:bg-slate-900/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

