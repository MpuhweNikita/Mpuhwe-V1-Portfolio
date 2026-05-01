"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { ProjectCategory } from "@/data/projects";
import { projects } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";

const tabs: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "mobile", label: "Mobile" },
  { id: "full-stack", label: "Full-Stack" },
];

export function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 py-20 lg:py-28 bg-transparent"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div
              key="portal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[2rem] bg-[#0A1F44] p-8 shadow-2xl sm:p-14 lg:p-20 border border-white/5 backdrop-blur-3xl"
            >
              {/* Background ambient light */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#2563EB]/20 blur-[100px]" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#2563EB]/10 blur-[100px]" />

              <div className="relative z-10 max-w-2xl">
                <div className="mb-6 inline-flex rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 px-5 py-2">
                  <p className="mb-0 text-sm font-semibold uppercase tracking-widest text-white">Portfolio</p>
                </div>
                <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Featured Work
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-blue-100/70 sm:text-xl">
                  A curated collection of scalable platforms, mobile applications, and reliable systems I&apos;ve built to solve complex challenges.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setIsExpanded(true);
                    setTimeout(() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }), 100);
                  }}
                  className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-[#2563EB] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.03] hover:bg-blue-600 active:scale-[0.98]"
                >
                  See my work
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsExpanded(false);
                      setTimeout(() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }), 100);
                    }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-[#0F172A] transition-all hover:bg-gray-50 shadow-sm hover:shadow-md"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Featured
                  </button>
                  <h2 className="font-display text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
                    All Projects
                  </h2>
                  <p className="mt-4 max-w-xl text-lg text-gray-600">
                    Explore the systems, and applications I have helped bring to life.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tabs.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setFilter(t.id)}
                      className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-150 ${filter === t.id
                        ? "text-white"
                        : "border border-gray-200 bg-white text-[#0F172A] shadow-sm hover:border-gray-300/30"
                        }`}
                    >
                      {filter === t.id && (
                        <motion.span
                          layoutId="filter-pill"
                          className="absolute inset-0 rounded-full bg-[#0A1F44]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <motion.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((project, i) => (
                  <motion.li
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-gray-300/50">
                      <button
                        type="button"
                        onClick={() => setSelected(project)}
                        className="relative aspect-[16/10] w-full overflow-hidden text-left bg-black"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:saturate-[0.6] group-hover:sepia-[0.2]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[white]/90 via-[white]/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                        <div className="absolute inset-0 flex items-end justify-center bg-[white]/40 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-5 py-2.5 text-xs font-bold tracking-widest uppercase text-white ">
                            View Details
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                        <span className="absolute bottom-4 left-4 rounded-full bg-black/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-background shadow-sm ">
                          {project.category}
                        </span>
                      </button>

                      <div className="flex flex-1 flex-col p-6">
                        <button
                          type="button"
                          onClick={() => setSelected(project)}
                          className="text-left"
                        >
                          <h3 className="font-display text-xl font-bold text-[#0F172A] transition-colors duration-150 group-hover:text-[#2563EB]">
                            {project.title}
                          </h3>
                        </button>
                        <p className="font-sans mt-1.5 text-xs font-bold uppercase tracking-wider text-gray-500">{project.role}</p>
                        <p className="font-sans mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                          {project.shortDescription}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tech.slice(0, 4).map((t) => (
                            <span
                              key={t}
                              className="font-sans rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-[#0F172A]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-xs font-bold text-[#0F172A] transition-colors duration-150 hover:border-gray-300 hover:bg-gray-50 sm:flex-none sm:px-5"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Live
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-xs font-bold text-[#0F172A] transition-colors duration-150 hover:border-gray-300 hover:bg-gray-50 sm:flex-none sm:px-5"
                            >
                              <Github className="h-4 w-4" />
                              GitHub
                            </a>
                          )}
                          <button
                            type="button"
                            onClick={() => setSelected(project)}
                            className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#2563EB] py-2.5 text-xs font-bold text-white transition-colors duration-150 hover:bg-blue-600 sm:flex-none sm:px-5 hover:scale-[1.03]"
                          >
                            Details
                          </button>
                        </div>
                      </div>
                    </article>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

