"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const entries = [
  {
    period: "2026 — Present",
    title: "CEO & Founder",
    org: "Twubake",
    type: "Full-time",
    highlights: [
      "Leading the vision and strategy for a construction materials logistics platform.",
      "Managing end-to-end product development mapping clients with truck owners.",
      "Spearheading business operations and market reach strategies.",
    ],
  },
  {
    period: "2025",
    title: "Embedded Systems Engineer",
    org: "SmartMine Ltd",
    type: "Full-time",
    highlights: [
      "Engineered hardware solutions for environmental anomaly detection in mines.",
      "Integrated embedded sensors with frontend analytics for real-time safety tracking.",
      "Contributed to cross-functional mobile application development for the same platform.",
    ],
  },
  {
    period: "2024",
    title: "Designer",
    org: "Brainly Code",
    type: "Contract",
    highlights: [
      "Designed an appealing and engaging UX/UI for an educational coding software.",
      "Produced comprehensive wireframes, mockups, and interactive prototypes.",
      "Collaborated closely with developers to translate design logic into courses and challenges.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 bg-transparent py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-6 inline-flex rounded-full border border-gray-300 px-5 py-2">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-[#0F172A]">Journey</p>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            Experience & Growth
          </h2>
          <p className="mt-6 text-lg text-gray-600">My professional journey growing systems, companies, and designs.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[11px] top-3 bottom-0 w-px bg-gray-200 md:left-[23px]" />
          <ul className="space-y-10">
            {entries.map((job, i) => (
              <motion.li
                key={job.title + job.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="relative flex gap-6 md:gap-10"
              >
                <div className="relative z-10 flex h-10 w-6 shrink-0 justify-center md:h-12 md:w-12">
                  <span className="mt-0 flex h-6 w-6 items-center justify-center rounded-full border border-[#2563EB]/20 bg-[#2563EB]/10 shadow-sm md:h-12 md:w-12">
                    <Briefcase className="h-3 w-3 text-[#2563EB] md:h-5 md:w-5" />
                  </span>
                </div>
                <div
                  className="flex-1 rounded-[1.5rem] bg-white border border-gray-200 p-6 md:p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-gray-300/50"
                >
                  <p className="font-sans text-xs font-bold uppercase tracking-widest text-gray-500">{job.period}</p>
                  <div className="mt-2 flex flex-wrap items-baseline gap-2">
                    <h3 className="font-display text-2xl font-bold text-[#0F172A]">{job.title}</h3>
                    <span className="font-sans text-sm font-medium text-gray-500">· {job.type}</span>
                  </div>
                  <p className="font-sans mt-1 text-base font-semibold text-[#0A1F44]">{job.org}</p>
                  <ul className="font-sans mt-6 space-y-3 text-base text-gray-600">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 leading-relaxed">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
