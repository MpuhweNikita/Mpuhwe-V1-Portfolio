"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Layout, Smartphone, Zap, Brain, Layers, Lightbulb, Target } from "lucide-react";

export function HireMe() {
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hire-me"
            className="relative scroll-mt-24 py-20 lg:py-28 bg-transparent"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="mb-14 text-center"
                >
                    <div className="mb-6 inline-flex rounded-full border border-gray-300 px-5 py-2">
                        <p className="font-display text-sm font-semibold uppercase tracking-widest text-[#0F172A]">Work With Me</p>
                    </div>
                    <h2 className="font-display text-4xl font-black tracking-tight text-[#0F172A] sm:text-5xl">
                        Let&apos;s Build Something Meaningful
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
                        I deliver robust fullstack systems, seamless mobile apps, and reliable embedded solutions
                        — bridging complex challenges and clean, scalable digital products.
                    </p>
                    <p className="mt-4 text-sm font-bold uppercase tracking-wider text-[#0A1F44]">
                        Open to internships, freelance work, and long-term collaborations.
                    </p>
                </motion.div>

                {/* Service cards */}
                <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { tag: "Web Development", Icon: Code, desc: "Fast, responsive web apps using React, Next.js, and modern tools." },
                        { tag: "Mobile Apps", Icon: Smartphone, desc: "Cross-platform development natively adapted for iOS and Android." },
                        { tag: "UI/UX Design", Icon: Layout, desc: "User-centered design ensuring high engagement and clear user flows." },
                        { tag: "Embedded Systems", Icon: Zap, desc: "Hardware integration bridging the physical world to analytics." },
                    ].map((s, i) => (
                        <motion.div
                            key={s.tag}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                            className="group flex flex-col rounded-[1.5rem] border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-gray-300/50 hover:shadow-md"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB] transition duration-200 group-hover:scale-110">
                                <s.Icon className="h-8 w-8" />
                            </div>
                            <h3 className="mb-3 font-display text-lg font-bold text-[#0F172A]">
                                {s.tag}
                            </h3>
                            <p className="font-sans text-sm leading-relaxed text-gray-600">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose Me */}
                <div className="mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="mb-12 text-center"
                    >
                        <h3 className="font-display text-4xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                            Why Choose Me?
                        </h3>
                    </motion.div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-2">
                        {[
                            { title: "Fast Learner", desc: "Quickly mastering new technologies and adjusting to shifting requirements.", Icon: Brain },
                            { title: "Domain Diversity", desc: "Experience building systems for agriculture, mining, and edtech sectors.", Icon: Layers },
                            { title: "Problem Solver", desc: "Focused on scalable architecture and efficient logic over quick hacks.", Icon: Lightbulb },
                            { title: "Impact Driven", desc: "Motivated by developing solutions that create real community difference.", Icon: Target },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10px" }}
                                transition={{ delay: i * 0.12, duration: 0.4, ease: "easeOut" }}
                                className="relative flex flex-col rounded-[1.5rem] bg-white pt-10 p-8 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                            >
                                {/* Top Right Bracket */}
                                <div className="absolute -top-[2px] -right-[2px] h-12 w-12 rounded-tr-[1.2rem] border-r-[5px] border-t-[5px] border-[#2563EB]" />
                                {/* Bottom Left Bracket */}
                                <div className="absolute -bottom-[2px] -left-[2px] h-16 w-16 rounded-bl-[1.2rem] border-b-[6px] border-l-[6px] border-[#2563EB]" />

                                <div className="mb-6 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-[0.85rem] bg-[#2563EB]/10 shadow-md">
                                    <item.Icon className="h-6 w-6 text-[#2563EB]" />
                                </div>
                                <h4 className="mb-3 font-display text-[1.15rem] font-bold text-[#0F172A] tracking-tight">{item.title}</h4>
                                <p className="text-[13px] leading-relaxed font-sans font-medium text-gray-600 flex-1">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button
                            type="button"
                            onClick={scrollToContact}
                            className="group inline-flex items-center gap-2.5 rounded-full bg-[#2563EB] px-12 py-5 font-bold text-white shadow-md transition-all duration-200 hover:bg-blue-600 hover:scale-[1.03] active:scale-[0.98]"
                        >
                            <span>Let&apos;s Talk</span>
                            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

