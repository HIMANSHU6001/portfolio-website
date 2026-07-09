"use client";

import Image from "next/image";
import { ArrowRight, Cloud, Squiggle, Star, Sun } from "./Illustrations";

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-20 pb-24 md:pt-20 md:pb-32">
      <div className="hidden md:block absolute top-24 right-8 md:right-24 animate-drift" aria-hidden>
        <Cloud size={140} />
      </div>
      <div className="hidden md:block absolute top-52 right-40 md:right-72 animate-drift" style={{ animationDelay: "2s" }} aria-hidden>
        <Cloud size={90} fill="#FFF6E9" />
      </div>
      <div className="hidden md:block absolute top-40 left-6 md:left-16 animate-twinkle" aria-hidden>
        <Star size={44} />
      </div>
      <div className="hidden md:block absolute bottom-16 left-1/3 animate-twinkle" style={{ animationDelay: "1.2s" }} aria-hidden>
        <Star size={28} fill="#F7C6D9" />
      </div>
      <div className="absolute top-16 left-1/2 hidden md:block animate-bob" aria-hidden>
        <Sun size={70} />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
        <div className="inline-flex mb-8 reveal">
          <span
            data-testid="hero-tag"
            className="bg-[#B8E6C6] border-[2px] border-[#1C1917] rounded-full px-5 py-2 text-xs md:text-sm font-extrabold uppercase tracking-widest"
          >
            Fullstack Developer · NIT Rourkela
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div className="reveal">
            <h1
              data-testid="hero-heading"
              className="font-display font-black text-[3.0rem] sm:text-6xl md:text-6xl lg:text-[5.2rem] leading-[0.95] text-[#1C1917]"
            >
              I build the
              <br />
              web that <span className="hl-mint italic">actually</span>
              <br />
              <span className="hl-pink">ships.</span>
            </h1>

            <p
              data-testid="hero-subtitle"
              className="mt-8 text-lg md:text-xl text-[#44403C] font-medium max-w-xl leading-relaxed"
            >
              Hey - I&apos;m <span className="font-bold text-[#1C1917]">Himanshu Kaushik</span>, a fullstack developer
              from NIT Rourkela crafting fast, thoughtful, AI-powered products from database to pixel.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <button
                data-testid="hero-cta-work"
                type="button"
                onClick={() => scrollToSection("contact")}
                className="press sticker inline-flex items-center gap-2 bg-[#B8E6C6] border-[3px] border-[#1C1917] rounded-full px-7 py-3.5 font-extrabold text-sm uppercase tracking-wider"
              >
                Work with me <ArrowRight size={18} />
              </button>
              <button
                data-testid="hero-cta-projects"
                type="button"
                onClick={() => scrollToSection("projects")}
                className="press sticker inline-flex items-center gap-2 bg-[#FFF6E9] border-[3px] border-[#1C1917] rounded-full px-7 py-3.5 font-extrabold text-sm uppercase tracking-wider"
              >
                See projects
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#F7C6D9] border-2 border-[#1C1917]" />
                  <div className="w-8 h-8 rounded-full bg-[#B8E6C6] border-2 border-[#1C1917]" />
                  <div className="w-8 h-8 rounded-full bg-[#FDE68A] border-2 border-[#1C1917]" />
                </div>
                <p className="text-sm font-semibold text-[#44403C]">
                  <span className="text-[#1C1917] font-extrabold">Systems + AI</span> engineer
                </p>
              </div>
              <div className="hidden sm:block h-6 w-px bg-[#1C1917] opacity-30" />
              <p className="text-sm font-semibold text-[#44403C]">
                Open to <span className="text-[#1C1917] font-extrabold">SDE / Full-stack roles</span>
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end reveal">
            <div
              data-testid="hero-avatar-card"
              className="relative bg-[#B8E6C6] border-[4px] border-[#1C1917] rounded-[2rem] p-4 shadow-[8px_8px_0_0_#1C1917] rotate-2 hover:rotate-0 transition-transform"
            >
              <div className="overflow-hidden rounded-[1.5rem]  bg-[#FBEEDC]">
                <Image
                  src="/images/cartoon_avatar.png"
                  alt="Himanshu Kaushik portrait"
                  width={1024}
                  height={1024}
                  priority
                  className="h-auto w-full max-w-[320px]"
                />
              </div>
              <div className="absolute -top-4 -left-6 rotate-[-8deg] bg-[#FDE68A] border-[3px] border-[#1C1917] rounded-full px-4 py-1.5 shadow-[3px_3px_0_0_#1C1917]">
                <span className="font-display font-black text-sm">hello!</span>
              </div>
              <div className="mt-3 flex items-center justify-between gap-4">
                <div>
                  <p className="font-display text-xl font-black leading-none">Himanshu Kaushik</p>
                  <p className="text-xs font-semibold text-[#44403C] mt-1">NIT Rourkela · IST</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7FC69C] border border-[#1C1917]" />
                  Available
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-4 hidden md:block animate-bob" style={{ animationDelay: "0.4s" }}>
              <Squiggle size={90} color="#E89AB6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}