"use client";

import { useEffect, useRef, useState } from "react";
import { RocketLaunch } from "./Illustrations";

type TimelineItem = {
  role: string;
  company: string;
  period: string;
  place: string;
  color: string;
  points: string[];
};

const timeline: TimelineItem[] = [
  {
    role: "Technical Lead HackNITR 7.0",
    company: "GDG NIT Rourkela",
    period: "2024 — 2025",
    place: "Rourkela, Odisha",
    color: "var(--color-paper)",
    points: [
      "Led technical execution of HackNITR 7.0, managing platform infrastructure and workflows for 1,000+ participants across 48 hours."
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Vizora Enterprises Pvt. Ltd.",
    period: "May 2024 — Dec 2024",
    place: "",
    color: "var(--lavender)",
    points: [
      "Built interactive 3D product visualizations for 15+ products using Three.js, enabling real-time in-browser exploration.",
      "Designed a role-based admin dashboard for 30+ internal users, reducing content update time by 40%."
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Soundpark",
    period: "May 2025 — Sep 2025",
    place: "Remote",
    color: "var(--pink)",
    points: [
      "Implemented PWA features using Next.js, enabling offline access and native app-like experience for mobile users.",
      "Reduced redundant re-renders by refactoring Zustand state slices and API caching.",
      "Shipped features across sprints in a 3-person agile team."
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Lamatic",
    period: "Present",
    place: "Remote",
    color: "var(--paper)",
    points: [
      "Engineer at Lamatic.ai, working across the stack on an AI workflow platform — from edge APIs and data pipelines to the product surfaces built on top of them.",
      "Focused on shipping features that stay simple to use and reliable under load."
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Atlan",
    period: "Nov 2025 — Feb 2026",
    place: "Remote",
    color: "var(--mint)",
    points: [
      "Engineered observability features for Automation Engine Studio for 100+ enterprise users.",
      "Reduced REST API calls by 50% via React Query caching, cutting workflow builder load times by 35%.",
      "Eliminated data-mismatch bugs by introducing an OpenAPI-generated TypeScript SDK, adopted across the frontend team.",
    ],
  }
];

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const timelineHeight = rect.height;
      const viewportCenter = window.innerHeight / 2;

      // How far the viewport center is into the timeline
      const scrolledInto = viewportCenter - rect.top;
      const ratio = Math.max(0, Math.min(1, scrolledInto / timelineHeight));
      setProgress(ratio);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-cream border-y-4 border-ink">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end gap-4 mb-10">
          <span className="bg-pink text-ink border-[3px] font-inter border-ink rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest shadow-[3px_3px_0_0_var(--color-ink)]">
            04 · The road so far
          </span>
          <div className="hidden md:block flex-1 h-0.75 bg-ink opacity-20 rounded-full" />
        </div>

        <h2 data-testid="experience-heading" className="font-display font-black text-4xl md:text-5xl max-w-3xl leading-none">
          A tiny <span className="hl-mint">timeline</span> of shipping.
        </h2>

        <div className="mt-14 relative" ref={timelineRef}>
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] bg-ink opacity-100" />

          {/* Scroll-tracking icon */}
          <div
            className="absolute left-4 md:left-1/2 z-10 pointer-events-none flex"
            style={{
              top: `${progress * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <RocketLaunch size={60} className="text-ink rotate-180" />
          </div>

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <div
                key={item.company}
                data-testid={`experience-item-${index}`}
                className={`relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 md:items-start ${index % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
              >
                <div
                  className={`sticker bg-cream border-4 border-ink rounded-2xl p-6 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8 md:col-start-2"
                    }`}
                  style={{ background: item.color }}
                >
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-widest bg-ink text-paper px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                    <span className="text-xs font-bold text-ink opacity-80">{item.place}</span>
                  </div>
                  <h3 className="font-display font-black text-2xl leading-tight">{item.role}</h3>
                  <p className="text-sm font-bold text-ink opacity-80 mb-3">@ {item.company}</p>
                  <ul className="space-y-2">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex gap-2 text-[15px] font-medium text-ink leading-snug">
                        <span className="mt-1 w-2 h-2 rounded-full bg-ink shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
