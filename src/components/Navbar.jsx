import React, { useEffect, useState } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (!section) continue;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActive(link.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/70 shadow-soft-glow"
          : "bg-transparent"
      }`}
    >
      <nav className="section-padding flex h-16 items-center justify-between sm:h-18 lg:h-20">
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 text-base sm:text-lg font-semibold tracking-tight text-white"
          aria-label="Go to Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-sm font-bold shadow-lg">
            MF
          </span>
          <span className="hidden xs:inline-block">Md Faizan</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`transition hover:text-white ${
                    active === link.id ? "text-primary-400" : "text-slate-300/90"
                  }`}
                  aria-current={active === link.id ? "page" : undefined}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="/Md_Faizan_Resume.pdf"
              download
              className="hidden lg:inline-flex items-center gap-1.5 btn-outline text-xs"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
              className="hidden lg:inline-flex btn-primary text-xs"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <button
          className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 text-slate-100 shadow-sm transition hover:border-primary-500 hover:bg-slate-900"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="sr-only">Open navigation</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-100 transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 rounded-full bg-slate-100 transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-slate-100 transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-800/70 bg-slate-950/95 backdrop-blur-xl shadow-soft-glow">
          <ul className="section-padding space-y-1 py-4 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 transition ${
                    active === link.id
                      ? "bg-primary-600/20 text-primary-300"
                      : "hover:bg-slate-900"
                  }`}
                >
                  <span>{link.label}</span>
                  {active === link.id && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                  )}
                </button>
              </li>
            ))}
            <li className="pt-1">
              <a
                href="/Md_Faizan_Resume.pdf"
                download
                className="flex w-full items-center justify-center gap-2 btn-outline text-sm mb-2"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full btn-primary text-sm"
              >
                Hire / Collaborate
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

