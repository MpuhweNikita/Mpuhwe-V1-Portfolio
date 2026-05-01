"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import type { SkillItem } from "@/data/skills";
import { skillCategories } from "@/data/skills";

function SkillCard({ skill, si }: { skill: SkillItem; si: number }) {
  const Icon = skill.icon;
  const circumference = 97.4;
  const offset = circumference - (skill.proficiency / 100) * circumference;

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: si * 0.03 }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 transition-all duration-200 hover:border-blue-200 hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center">
          <svg
            className="absolute h-12 w-12 -rotate-90 text-gray-100"
            viewBox="0 0 36 36"
            aria-hidden
          >
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <motion.circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="#60A5FA"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset: offset }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.2, delay: 0.1 + si * 0.05, ease: "easeOut" }}
            />
          </svg>
          <Icon className="relative z-10 h-5 w-5 text-[#2563EB]" />
        </span>
        <div className="flex flex-1 flex-col">
          <span className="text-sm font-bold text-gray-900 group-hover:text-[#2563EB] transition-colors">
            {skill.name}
          </span>
          <span className="text-[10px] font-black text-[#60A5FA] uppercase tracking-widest">{skill.proficiency}%</span>
        </div>
      </div>
    </motion.li>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 bg-white py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent">
            Expertise
          </p>
          <h2 className="font-urbanist text-5xl font-black tracking-tight text-primary sm:text-6xl">
            Skills & Tools
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary font-medium">
            My technical arsenal for building high-end digital products.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              className="rounded-3xl border border-gray-50 bg-gray-50/50 p-10"
            >
              <h3 className="mb-10 font-urbanist text-2xl font-black text-primary uppercase tracking-widest text-center">
                {cat.title}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.items.map((skill, si) => (
                  <SkillCard key={skill.name} skill={skill} si={si} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
