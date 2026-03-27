import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section-padding border-t border-slate-800/80 bg-slate-950/80 py-5 text-xs text-slate-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-center sm:text-left">
          © {year} Md Faizan. All rights reserved.
        </p>
        <p className="text-center sm:text-right">
          Built with{" "}
          <span className="font-medium text-slate-300">
            React, Vite, and Tailwind CSS
          </span>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;

