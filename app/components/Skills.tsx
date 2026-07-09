import type { IconType } from "react-icons";
import {
    SiPython,
    SiFastapi,
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiCelery,
    SiDocker,
    SiNodedotjs,
    SiExpress,
    SiGraphql,
    SiTailwindcss,
    SiFramer,
    SiLangchain,
    SiGooglecloud,
    SiKubernetes,
    SiNginx,
    SiGithubactions,
    SiTerraform,
    SiPrisma,
    SiApachekafka,
    SiSocketdotio,
    SiFirebase,
    SiLanggraph,
    SiTanstack,
    SiR3,
    SiThreedotjs,
    SiAnthropic,
} from "react-icons/si";
import { FaAws, FaLinux } from "react-icons/fa";
import { TbBrandOpenai, TbMicrophone, TbApi } from "react-icons/tb";
import { FiDatabase } from "react-icons/fi";
import { BsFillFlaskFill } from "react-icons/bs";

type SkillChip = {
    label: string;
    icon: IconType;
    color: string;
};

type SkillRow = {
    id: string;
    speed: number;
    bg: string;
    reverse?: boolean;
    items: SkillChip[];
};

const rows: SkillRow[] = [
    {
        id: "row1",
        speed: 34,
        bg: "var(--mint)",
        items: [
            { label: "Python", icon: SiPython, color: "#3776AB" },
            { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { label: "FastAPI", icon: SiFastapi, color: "#009688" },
            { label: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { label: "React", icon: SiReact, color: "#61DAFB" },
            { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { label: "Redis", icon: SiRedis, color: "#DC382D" },
            { label: "Celery", icon: SiCelery, color: "#37814A" },
            { label: "Docker", icon: SiDocker, color: "#2496ED" },
        ],
    },
    {
        id: "row2",
        speed: 48,
        bg: "var(--pink)",
        reverse: true,
        items: [
            { label: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { label: "Express", icon: SiExpress, color: "#000000" },
            { label: "GraphQL", icon: SiGraphql, color: "#E10098" },
            { label: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
            { label: "OpenAI Agent SDK", icon: TbBrandOpenai, color: "#10A37F" },
            { label: "Langgraph", icon: SiLanggraph, color: "#326CE5" },
            { label: "Vector DB", icon: FiDatabase, color: "#000000" },
            { label: "Playwright", icon: BsFillFlaskFill, color: "#000000" },
            { label: "WebSockets", icon: SiSocketdotio, color: "#010101" },
        ],
    },
    {
        id: "row3",
        speed: 62,
        bg: "var(--sun)",
        items: [
            { label: "Threejs", icon: SiThreedotjs, color: "#00A3E0" },
            { label: "GCP", icon: SiGooglecloud, color: "#4285F4" },
            { label: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
            { label: "Nginx", icon: SiNginx, color: "#009639" },
            { label: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
            { label: "Prisma", icon: SiPrisma, color: "#2D3748" },
            { label: "Kafka", icon: SiApachekafka, color: "#231F20" },
            { label: "MCP", icon: SiAnthropic, color: "#000000" },
            { label: "Firebase", icon: SiFirebase, color: "#ff0000" },
            { label: "Tanstack", icon: SiTanstack, color: "#326CE5" },
        ],
    },
];

function Chip({ label, icon: Icon, color }: SkillChip) {
    return (
        <span className="inline-flex items-center gap-2 bg-cream border-[2.5px] border-[#1C1917] rounded-full px-5 py-2 text-sm md:text-base font-bold shadow-[2px_2px_0_0_#1C1917] whitespace-nowrap">
            <Icon size={18} style={{ color }} className="shrink-0" />
            {label}
        </span>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 md:py-32 bg-cream border-y-4 border-[#1C1917] overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 md:px-10 mb-12">
                <div className="flex items-end gap-4 mb-8 reveal">
                    <span className="bg-sun border-[3px] font-inter border-[#1C1917] rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest shadow-[3px_3px_0_0_#1C1917]">
                        02 · Tech stack
                    </span>
                    <div className="hidden md:block flex-1 h-0.75 bg-[#1C1917] opacity-20 rounded-full" />
                </div>

                <h2 data-testid="skills-heading" className="font-display font-black text-4xl md:text-5xl max-w-2xl leading-none reveal">
                    The <span className="hl-pink">tools</span> I reach for daily.
                </h2>
                <p className="mt-4 text-lg text-[#44403C] font-medium max-w-2xl reveal">
                    A small, sharp toolbox. Fast to prototype, boring where it counts, delightful where it matters.
                </p>
            </div>

            <div className="marquee-stack space-y-5 md:space-y-6">
                {rows.map((row, index) => (
                    <div
                        key={row.id}
                        data-testid={`stack-row-${index}`}
                        className="marquee-track py-3 border-y-[3px] border-[#1C1917] relative"
                        style={{ background: row.bg }}
                    >
                        <div
                            className="marquee-content"
                            style={{
                                animationDuration: `${row.speed}s`,
                                animationDirection: row.reverse ? "reverse" : "normal",
                            }}
                        >
                            {[0, 1].map((copy) => (
                                <div className="marquee-copy" key={copy} aria-hidden={copy === 1}>
                                    {row.items.map((item) => (
                                        <Chip key={`${copy}-${item.label}`} label={item.label} icon={item.icon} color={item.color} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}