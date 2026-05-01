"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
    {
        title: "Ideation & Prototyping Workshop",
        org: "Germany",
        year: "August 2025",
        detail: "Focused on rapid ideation and hardware/software prototyping methodologies.",
    },
    {
        title: "AI Guidance Program",
        org: "Korea",
        year: "April 2025",
        detail: "Comprehensive training and mentorship on leveraging AI tools for solving modern challenges.",
    },
    {
        title: "DevX Girls Summer Camp",
        org: "Tech Camp",
        year: "July – August 2025",
        detail: "Intensive summer boot camp focusing on modern software development practices.",
    },
    {
        title: "RCA 4th Hackathon 2025",
        org: "Rwanda Coding Academy",
        year: "2025",
        detail: "Participated and built MVP solutions addressing real-world community issues.",
    },
    {
        title: "African Girls Can Code Initiative (AGCCI)",
        org: "AGCCI Bootcamp",
        year: "Bootcamp",
        detail: "Empowering young girls with coding skills, digital literacy, and personal development.",
    },
    {
        title: "STEM Camp Participation",
        org: "St Andre",
        year: "Participation",
        detail: "Foundational STEM camp to build core critical thinking and scientific inquiry skills.",
    },
];

export function Certifications() {
    return (
        <section
            id="certifications"
            className="relative scroll-mt-24 py-20 lg:py-28 bg-transparent"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-14 text-center"
                >
                    <div className="mb-6 inline-flex rounded-full border border-gray-300 px-5 py-2">
                        <p className="font-display text-sm font-semibold uppercase tracking-widest text-[#0F172A]">Achievements</p>
                    </div>
                    <h2 className="font-display text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
                        Certifications & Programs
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                        Workshops, hackathons, and global bootcamps I have actively participated in.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, i) => (
                        <motion.article
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                            className="group flex flex-col rounded-[1.5rem] bg-white border border-gray-200 p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-gray-300/50"
                        >
                            <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB] ring-1 ring-gray-300/5 transition duration-200 group-hover:scale-110">
                                <Award className="h-6 w-6" />
                            </div>
                            <p className="font-sans text-xs font-bold uppercase tracking-widest text-gray-500">{cert.year}</p>
                            <h3 className="mt-2 font-display text-[1.35rem] leading-snug font-bold text-[#0F172A]">{cert.title}</h3>
                            <p className="font-sans mt-1 text-sm font-semibold text-[#0A1F44]">{cert.org}</p>
                            <p className="font-sans mt-4 flex-1 text-sm leading-relaxed text-gray-600">{cert.detail}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

