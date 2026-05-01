"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import type { SkillItem } from "@/data/skills";
import { skillCategories } from "@/data/skills";

function SkillCard({ skill, si }: { skill: SkillItem; si: number }) {
  const Icon = skill.icon;
  const gradId = useId().replace(/:/g, "");
  const circumference = 97.4;
  const offset = circumference - (skill.proficiency / 100) * circumference;

  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: si * 0.02 }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <div className="relative flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 transition hover:border-accent/35 hover:shadow-glow-sm">
        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center">
          <svg
            className="absolute h-11 w-11 -rotate-90 text-white/10 transition group-hover:text-accent/40"
            viewBox="0 0 36 36"
            aria-hidden
          >
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <motion.circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset: offset }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.2, delay: 0.08 + si * 0.04, ease: "easeOut" }}
              className="transition group-hover:opacity-100"
            />
            <defs>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00f5d4" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
          <Icon className="relative z-10 h-5 w-5 text-accent transition group-hover:scale-110" />
        </span>
        <div className="flex flex-1 items-center justify-between gap-2">
          <span className="text-sm font-medium text-neutral-200 group-hover:text-white">
            {skill.name}
          </span>
          <span className="text-xs font-bold text-accent">{skill.proficiency}%</span>
        </div>
      </div>
    </motion.li>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Stack
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills &amp; Technologies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Tools I use to ship polished products—from interface layer to APIs and
            cloud basics.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: ci * 0.06, duration: 0.45 }}
              className="rounded-2xl border border-white/10 bg-surface-elevated/80 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-5 font-display text-lg font-bold text-white">
                {cat.title}
              </h3>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-2">
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
