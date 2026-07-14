"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "STACK" },
  { id: "projects", label: "PROJECTS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "contact", label: "CONTACT" },
] as const;

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-testid="main-navbar"
      className={`fixed left-1/2 -translate-x-1/2 z-50 bg-paper/95 backdrop-blur-md border-ink transition-all duration-500 ${scrolled
        ? "top-3 md:top-4 w-[calc(100%-2rem)] md:w-[750px] rounded-full border-[2.5px]  px-4 py-1.5"
        : "top-0 w-full rounded-none border-b-[2.5px] border-t-0 border-x-0 shadow-none px-6 md:px-10 py-3 md:py-4"
        }`}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between w-full max-w-6xl mx-auto">
        <button
          data-testid="nav-logo"
          type="button"
          onClick={() => scrollToSection("hero")}
          className="font-display text-lg font-black pr-3 border-r-2 border-ink mr-2 cursor-pointer"
        >
          HK<span className="text-mint-dark">*</span>
        </button>
        <div className="flex items-center gap-0.5">
          {links.map((link) => (
            <button
              key={link.id}
              data-testid={`nav-${link.id}-link`}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="px-3.5 py-1.5 font-inter text-xs font-bold uppercase tracking-wider text-ink opacity-70 hover:text-ink transition-colors relative group cursor-pointer"
            >
              <span className="relative">
                {link.label}
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-ink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              </span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            data-testid="nav-hire-cta cursor-pointer"
            type="button"
            onClick={() => scrollToSection("contact")}
            className="px-4 py-1.5 rounded-full font-extrabold text-xs uppercase tracking-wider bg-ink text-paper transition-transform hover:-translate-y-0.5 shadow-[2px_2px_0_0_var(--color-mint-dark)]"
          >
            Hire me
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between w-full relative">
        <button
          data-testid="nav-logo-mobile"
          type="button"
          onClick={() => scrollToSection("hero")}
          className="font-display text-base font-black"
        >
          HK<span className="text-mint-dark">*</span>
        </button>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            data-testid="nav-toggle"
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="w-8 h-8 rounded-full bg-mint text-ink border-2 border-ink flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="flex flex-col gap-1">
              <span className="block w-3.5 h-0.5 bg-ink" />
              <span className="block w-3.5 h-0.5 bg-ink" />
              <span className="block w-3.5 h-0.5 bg-ink" />
            </div>
          </button>
        </div>

        {open ? (
          <div
            data-testid="mobile-menu"
            className="md:hidden absolute top-14 right-0 bg-paper border-[3px] border-ink rounded-2xl p-3 flex flex-col gap-1 min-w-[180px]"
          >
            {links.map((link) => (
              <button
                key={link.id}
                data-testid={`mobile-nav-${link.id}`}
                type="button"
                onClick={() => {
                  setOpen(false);
                  scrollToSection(link.id);
                }}
                className="text-left px-4 py-2 font-inter text-xs font-bold uppercase tracking-wider text-ink opacity-70 hover:text-ink transition-colors relative group w-fit cursor-pointer"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-ink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                </span>
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}