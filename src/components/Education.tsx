"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const items = [
  {
    title: "Software Programming & Embedded Systems",
    org: "Rwanda Coding Academy",
    year: "2024 — Present",
    detail: "Intensive program focusing on advanced software engineering, embedded systems, and product development.",
    icon: GraduationCap,
  },
  {
    title: "Ordinary Level – STEM & Sciences",
    org: "FAWE Girls School",
    year: "2021 — 2024",
    detail: "Rigorous science and mathematics curriculum establishing a strong technical foundation.",
    icon: Award,
  },
  {
    title: "Primary & Nursery",
    org: "Ecole Saint Andre Gitarama",
    year: "2012 — 2021",
    detail: "Early education grounding in core academic and analytical skills.",
    icon: Award,
  },
];

export function Education() {
  return (
    <section
      id="education"
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
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-[#0F172A]">Learning</p>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            Education
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            My academic background shaping my software and engineering principles.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
                className="group flex gap-5 rounded-[1.5rem] bg-white border border-gray-200 p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-gray-300/50"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB] ring-1 ring-gray-300/5">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-widest text-gray-500">{item.year}</p>
                  <h3 className="mt-2 font-display text-[1.35rem] font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="font-sans mt-1 text-sm font-semibold text-[#0A1F44]">{item.org}</p>
                  <p className="font-sans mt-4 text-sm leading-relaxed text-gray-600">{item.detail}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
