import { CoffeeCup, Plant, Star } from "./Illustrations";

const focusAreas = [
    "System Design",
    "Full-Stack & AI Development",
    "Operating Systems",
    "DBMS",
    "Computer Networks",
    "DSA",
] as const;

export default function About() {
    return (
        <section id="about" className="relative py-24 md:py-32">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <div className="flex items-end gap-4 mb-10 reveal">
                    <span className="bg-[#F7C6D9] border-[3px] font-inter border-[#1C1917] rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest shadow-[3px_3px_0_0_#1C1917]">
                        01 · About
                    </span>
                    <div className="hidden md:block flex-1 h-0.75 bg-[#1C1917] opacity-20 rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
                    <div className="relative reveal">
                        <div className="bg-[#B8E6C6] border-4 border-[#1C1917] rounded-4xl p-8 shadow-[8px_8px_0_0_#1C1917] -rotate-2">
                            <div className="flex justify-center py-4">
                                <CoffeeCup size={120} />
                            </div>
                            <p className="font-display italic text-xl font-bold text-center leading-snug">
                                {"\u201C"}The best system is the one that reads like a friendly note.{"\u201D"}
                            </p>
                            <p className="text-center text-xs font-bold uppercase tracking-widest mt-3 text-[#44403C]">
                                - my sticky note
                            </p>
                        </div>
                        <div className="absolute -top-6 -right-6 rotate-12 hidden md:block">
                            <Star size={54} fill="#FDE68A" />
                        </div>
                        <div className="absolute -bottom-8 -left-4 -rotate-6 hidden md:block">
                            <Plant size={110} />
                        </div>
                    </div>

                    <div className="reveal">
                        <h2 data-testid="about-heading" className="font-display font-black text-4xl md:text-5xl leading-none text-[#1C1917]">
                            I turn <span className="hl-mint">wild ideas</span> into calm, shippable systems.
                        </h2>
                        <div className="mt-6 space-y-4 text-[#44403C] text-lg leading-relaxed">
                            <p>
                                I{"\u2019"}m a full-stack developer at NIT Rourkela,
                                I navigate the space between distributed backends, polished frontends, and autonomous AI agents that actually execute tasks
                            </p>
                            <p>
                                My favorite work happens where strategic planning meets execution: defining a product roadmap on Monday, aligning operations on Wednesday, and shipping a pilot launch by Friday.
                            </p>
                            <p>
                                Off screen: sci-fi movies, basketball, music, gym and side projects.
                            </p>
                        </div>

                        <div className="mt-8">
                            <p className="text-xs font-extrabold uppercase tracking-widest text-[#44403C] mb-3">Focus areas</p>
                            <div className="flex flex-wrap gap-2">
                                {focusAreas.map((focusArea, index) => {
                                    const colors = ["#B8E6C6", "#F7C6D9", "#FDE68A", "#FFF6E9", "#C4E4FF", "#FFD6A5"];
                                    return (
                                        <span
                                            key={focusArea}
                                            data-testid={`focus-${focusArea.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                            className="border-[2.5px] border-[#1C1917] rounded-full px-4 py-1.5 text-sm font-bold shadow-[2px_2px_0_0_#1C1917]"
                                            style={{ background: colors[index % colors.length] }}
                                        >
                                            {focusArea}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}