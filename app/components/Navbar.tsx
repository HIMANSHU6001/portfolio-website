"use client";

import { useEffect, useState } from "react";

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
      className={`fixed left-1/2 -translate-x-1/2 z-50 bg-[#FFF6E9]/95 backdrop-blur-md border-[#1C1917] transition-all duration-500 ${scrolled
        ? "top-3 md:top-4 w-[calc(100%-2rem)] md:w-[650px] rounded-full border-[2.5px]  px-4 py-1.5"
        : "top-0 w-full rounded-none border-b-[2.5px] border-t-0 border-x-0 shadow-none px-6 md:px-10 py-3 md:py-4"
        }`}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between w-full max-w-6xl mx-auto">
        <button
          data-testid="nav-logo"
          type="button"
          onClick={() => scrollToSection("hero")}
          className="font-display text-lg font-black pr-3 border-r-2 border-[#1C1917] mr-2 cursor-pointer"
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
              className="px-3.5 py-1.5 font-inter text-xs font-bold uppercase tracking-wider text-[#78716c] hover:text-[#1C1917] transition-colors relative group cursor-pointer"
            >
              <span className="relative">
                {link.label}
                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#1C1917] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              </span>
            </button>
          ))}
        </div>
        <button
          data-testid="nav-hire-cta cursor-pointer"
          type="button"
          onClick={() => scrollToSection("contact")}
          className="px-4 py-1.5 rounded-full font-extrabold text-xs uppercase tracking-wider bg-[#1C1917] text-[#FFF6E9] hover:bg-[#44403C] transition-transform hover:-translate-y-0.5"
        >
          Hire me
        </button>
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
        <button
          data-testid="nav-toggle"
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="w-8 h-8 rounded-full bg-mint border-2 border-[#1C1917] flex items-center justify-center"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1">
            <span className="block w-3.5 h-0.5 bg-[#1C1917]" />
            <span className="block w-3.5 h-0.5 bg-[#1C1917]" />
            <span className="block w-3.5 h-0.5 bg-[#1C1917]" />
          </div>
        </button>

        {open ? (
          <div
            data-testid="mobile-menu"
            className="md:hidden absolute top-14 right-0 bg-[#FFF6E9] border-[3px] border-[#1C1917] rounded-2xl p-3 shadow-[6px_6px_0_0_#1C1917] flex flex-col gap-1 min-w-[180px]"
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
                className="text-left px-4 py-2 font-inter text-xs font-bold uppercase tracking-wider text-[#78716c] hover:text-[#1C1917] transition-colors relative group w-fit cursor-pointer"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#1C1917] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                </span>
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}