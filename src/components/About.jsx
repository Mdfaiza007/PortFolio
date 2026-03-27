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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const About = () => {
  const [ref, visible] = useRevealOnScroll();

  return (
    <section
      id="about"
      ref={ref}
      className={`section-wrapper ${
        visible ? "reveal-section visible" : "reveal-section"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_minmax(0,1fr)]">
          <div>
            <h2 className="section-title">About</h2>
            <p className="section-subtitle">
              I&apos;m a B.Tech CSE (AI) student at Jamia Hamdard, focused on
              building robust backend systems and full stack web applications
              that solve real problems.
            </p>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-300">
              <p>
                I&apos;m currently pursuing{" "}
                <span className="font-semibold text-slate-100">
                  B.Tech in Computer Science &amp; Engineering (Artificial
                  Intelligence)
                </span>{" "}
                at Jamia Hamdard (2023–2027). I enjoy working across the stack,
                but I naturally gravitate towards{" "}
                <span className="font-semibold text-slate-100">
                  backend development, APIs, authentication, and system design.
                </span>
              </p>
              <p>
                My projects focus on{" "}
                <span className="font-semibold text-slate-100">
                  real-world problem solving
                </span>
                , from algorithm visualizations to full-stack applications with
                secure authentication and clean architecture. I emphasise{" "}
                <span className="font-semibold text-slate-100">
                  code quality, scalability, and clear abstractions
                </span>{" "}
                so that my work is maintainable as it grows.
              </p>
              <p>
                Alongside development, I actively work on{" "}
                <span className="font-semibold text-slate-100">
                  Data Structures &amp; Algorithms, Object-Oriented Programming,
                  Operating Systems, and Database Management Systems
                </span>
                . This strong CS foundation helps me reason about performance,
                edge cases, and system behaviour under load.
              </p>
              <p>
                I&apos;m currently{" "}
                <span className="font-semibold text-primary-300">
                  open to internships, freelance work, and software development
                  opportunities
                </span>{" "}
                where I can contribute to impactful products, learn from strong
                teams, and grow as a full stack engineer.
              </p>
            </div>
          </div>

          <div className="card-glass h-max space-y-4 p-5 sm:p-6 lg:p-7">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
              Quick Info
            </h3>
            <dl className="space-y-3 text-sm sm:text-[15px]">
              <div className="flex items-start justify-between gap-3 rounded-xl bg-slate-900/70 px-3 py-3">
                <dt className="text-slate-400">Education</dt>
                <dd className="text-right text-slate-100">
                  B.Tech CSE (AI) <br className="hidden sm:block" />
                  <span className="text-xs text-slate-400">
                    Jamia Hamdard · 2023–2027
                  </span>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-900/70 px-3 py-3">
                <dt className="text-slate-400">Location</dt>
                <dd className="text-right text-slate-100">New Delhi, India</dd>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-900/70 px-3 py-3">
                <dt className="text-slate-400">Status</dt>
                <dd className="text-right text-primary-300 font-medium">
                  Open to Opportunities
                </dd>
              </div>
              <div className="rounded-xl bg-slate-900/70 px-3 py-3">
                <dt className="text-slate-400">Focus</dt>
                <dd className="mt-1 space-y-1 text-slate-100">
                  <p>Full Stack Development and Software Engineering</p>
                  <p className="text-xs text-slate-400">
                    Backend-heavy apps, REST APIs, authentication, and scalable
                    systems with clean architecture.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

