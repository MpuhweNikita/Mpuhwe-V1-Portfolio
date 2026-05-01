"use client";

import { motion } from "framer-motion";
import { Code2, Layers, MapPin, Rocket, Target } from "lucide-react";

const stats = [
  { label: "1+ Years Experience", value: "1+", sub: "Building in production" },
  { label: "15+ Projects Built", value: "15+", sub: "Web & mobile" },
  { label: "Technologies", value: "10+", sub: "Stack breadth" },
  { label: "Based in Kigali", value: "RW", sub: "Open to remote" },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 border-t border-gray-200 bg-gray-50/50 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">About Me</p>
          <h2 className="font-urbanist text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What I Do
          </h2>
          <motion.span
            className="mt-3 block h-0.5 w-28 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="space-y-6 text-gray-700"
          >
            <p className="text-lg leading-relaxed text-gray-800">
              Over the past year, I&apos;ve grown from writing my first production
              components to shipping full user flows across{" "}
              <strong className="font-medium text-gray-900">web and mobile</strong>.
              I specialize in{" "}
              <strong className="font-medium text-gray-900">
                frontend engineering
              </strong>{" "}
              and{" "}
              <strong className="font-medium text-gray-900">mobile development</strong>
              — translating designs into fast, accessible experiences users actually
              enjoy.
            </p>
            <p className="leading-relaxed text-gray-600">
              I care about maintainable architecture, thoughtful motion, and
              measurable performance. Every project is a chance to level up: new
              patterns, tighter TypeScript, cleaner state, and sharper product
              instincts.
            </p>
            <p className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-blue-50/50 p-4 leading-relaxed">
              <Target className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <span>
                I&apos;m actively open to roles and collaborations where I can
                contribute to ambitious products while continuing to deepen my
                craft in React, React Native, and modern full-stack tooling.
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
              >
                <div className="absolute inset-0 bg-card-glow opacity-0 transition group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 ring-1 ring-blue-200">
                    {i === 0 && <Rocket className="h-5 w-5" />}
                    {i === 1 && <Layers className="h-5 w-5" />}
                    {i === 2 && <Code2 className="h-5 w-5" />}
                    {i === 3 && <MapPin className="h-5 w-5" />}
                  </div>
                  <p className="font-urbanist text-3xl font-black text-gray-900">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    {s.label}
                  </p>
                  <p className="mt-1 text-xs text-gray-600">{s.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
