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

const contactItems = [
  {
    label: "Email",
    value: "mdfaizan35609@gmail.com",
    href: "mailto:mdfaizan35609@gmail.com"
  },
  {
    label: "GitHub",
    value: "github.com/Mdfaiza007",
    href: "https://github.com/Mdfaiza007"
  },
  {
    label: "LinkedIn",
    value: "Md Faizan",
    href: "https://www.linkedin.com/in/md-faizan-943a23291"
  }
];

const Contact = () => {
  const [ref, visible] = useRevealOnScroll();

  return (
    <section
      id="contact"
      ref={ref}
      className={`section-wrapper ${
        visible ? "reveal-section visible" : "reveal-section"
      }`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="section-title">Let&apos;s Connect</h2>
        <p className="section-subtitle mx-auto">
          I&apos;m actively looking for{" "}
          <span className="font-semibold text-slate-100">
            internship, freelance, and software development opportunities
          </span>
          . If you&apos;re hiring, building something interesting, or looking
          for a reliable full stack developer, I&apos;d be happy to connect.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "Email" ? "_self" : "_blank"}
              rel={item.label === "Email" ? undefined : "noreferrer"}
              className="card-glass group flex flex-col items-center justify-center gap-2 px-4 py-4 text-sm transition hover:-translate-y-1 hover:border-primary-500/70"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-slate-400">
                {item.label}
              </p>
              <p className="text-sm font-medium text-slate-100">
                {item.value}
              </p>
              <span className="mt-1 text-[11px] text-primary-300 opacity-0 transition group-hover:opacity-100">
                Click to open
              </span>
            </a>
          ))}
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Feel free to share a short description of the role, project, or
          collaboration you have in mind.
        </p>
      </div>
    </section>
  );
};

export default Contact;

