import { Fragment } from "react";
import { ArrowRight } from "./Illustrations";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

type ProjectVariant = "app" | "api" | "ai" | "ecom" | "dash" | "cli";

export type Project = {
  id: string;
  title: string;
  blurb: string;
  stack: string[];
  variant: ProjectVariant;
  accent: string;
  year: string;
  github?: string;
  live?: string;
  image?: string;
};

const projects: Project[] = [
  {
    id: "codespace",
    title: "CodeSpace",
    blurb:
      "Engineered a multi-language code execution sandbox using rootless Docker, implementing network isolation, memory caps, and seccomp filtering. Orchestrated decoupled execution using Celery + Redis, streaming results via Redis Pub/Sub over WebSocket. Integrated an AI code tutor using MCP tools and input guardrails.",
    stack: ["FastAPI", "Celery", "Redis", "Docker", "OpenAI Agents SDK"],
    variant: "api",
    accent: "var(--pink)",
    year: "2024",
    github: "https://github.com/HIMANSHU6001/remote-code-execution-engine",
    live: "https://codespace.himanshu6001.dev",
    image: "/images/codespace.png",
  },
  {
    id: "atlas",
    title: "Atlas",
    blurb:
      "Architected an multi agent Business Research system using Langgraph with seprate steps such as scoping , data collection, data analysis and report generation. Developed an async FastAPI orchestration layer managing multi-turn chat sessions with tool-calling. Containerized the full stack (Next, FastAPI, FastMCP) via Docker Compose.",
    stack: ["FastAPI", "FastMCP", "Langgraph", "RAG", "DuckDB"],
    variant: "ai",
    accent: "var(--mint)",
    year: "2024",
    github: "https://github.com/HIMANSHU6001/business-research-agent",
    live: "https://atlas.himanshu6001.dev/",
    image: "/images/atlas.png",
  },
  {
    id: "marble-race",
    title: "Marble Race",
    blurb:
      "Refactored and engineered a 3D web-based physics simulation using TypeScript to enforce strict type-safety across game logic and state management. Maintained 60fps across mobile devices by optimizing render loops.",
    stack: ["TypeScript", "React Three Fiber", "Three.js"],
    variant: "app",
    accent: "var(--baby-blue)",
    year: "2023",
    github: "https://github.com/HIMANSHU6001/marble-race-2",
    live: "https://marble-race-2-next.vercel.app",
    image: "/images/marble_race.png",
  },
  {
    id: "yogurt",
    title: "Project Yogurt",
    blurb:
      "Contributed and lead the development of project yougurt, the official website for HACKNITR7.0 - India's largest student run hackathon of east india with 4000+ registrations",
    stack: ["Python", "Celery", "Redis"],
    variant: "api",
    accent: "var(--lavender)",
    year: "2023",
    github: "https://github.com/HIMANSHU6001/project-yogurt",
    live: "https://hacknitr.com/",
    image: "/images/project_yogurt.png",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { id, title, blurb, stack, variant, accent, year, github, live } = project;
  const rotation = index % 2 === 0 ? "-0.6deg" : "0.6deg";

  return (
    <article
      data-testid={`project-card-${id}`}
      className="sticker bg-pink border-4 border-ink rounded-4xl overflow-hidden flex flex-col"
      style={{ transform: `rotate(${rotation})`, background: accent }}
    >
      <div className="border-b-4 border-ink relative aspect-video">
        {project.image ? (
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-cream flex items-center justify-center font-bold text-ink">
            No image
          </div>
        )}
      </div>
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs font-extrabold uppercase bg-paper tracking-widest px-3 py-1 rounded-full border-2 border-ink"
          // style={{ background: accent }}
          >
            {year}
          </span>
          <div className="flex gap-2 flex-wrap justify-end">
            {stack.map((stackItem, stackIndex) => (
              <Fragment key={stackItem}>
                {stackIndex > 0 && <span className="text-ink opacity-30">·</span>}
                <span className="text-[11px] font-bold text-ink opacity-80">{stackItem}</span>
              </Fragment>
            ))}
          </div>
        </div>

        <h3 className="font-display font-black text-2xl md:text-3xl">{title}</h3>
        <p className="mt-2 text-ink opacity-80 font-medium leading-relaxed">{blurb}</p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-cream hover:bg-mint text-ink border-2 border-ink rounded-full px-4 py-1.5 font-extrabold text-xs uppercase tracking-widest transition-colors shadow-[2px_2px_0_0_var(--color-ink)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--color-ink)]"
              >
                <FaGithub size={14} />
                Code
              </a>
            )}
            {live && live !== "#" && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-cream hover:bg-pink text-ink border-2 border-ink rounded-full px-4 py-1.5 font-extrabold text-xs uppercase tracking-widest transition-colors shadow-[2px_2px_0_0_var(--color-ink)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--color-ink)]"
              >
                Live
                <ArrowRight size={14} className="-rotate-45" />
              </a>
            )}
          </div>
          <span className="text-xs font-bold text-ink opacity-80">
            #{String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end gap-4 mb-10">
          <span className="bg-mint font-inter border-[3px] border-ink rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest shadow-[3px_3px_0_0_var(--color-ink)]">
            03 · Selected work
          </span>
          <div className="hidden md:block flex-1 h-0.75 bg-ink opacity-20 rounded-full" />
        </div>

        <h2 data-testid="projects-heading" className="font-display font-black text-4xl md:text-5xl max-w-3xl leading-none">
          Little worlds I{"\u2019"}ve <span className="hl-mint">built</span> recently.
        </h2>
        <p className="mt-4 text-lg text-ink opacity-80 font-medium max-w-2xl">
          A mix of client work, side quests, and open source. Ask me about any of them.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}