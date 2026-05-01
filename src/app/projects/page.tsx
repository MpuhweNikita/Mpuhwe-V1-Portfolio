"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";
import { ProjectModal } from "@/components/ProjectModal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const tabs: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "mobile", label: "Mobile" },
  { id: "full-stack", label: "Full-Stack" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection="projects" />
      
      <main className="mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-bold text-[#0F172A] transition-all hover:bg-gray-50 shadow-sm hover:shadow-md"
            >
              <ArrowLeft className="h-4 w-4" />
              Return Back
            </Link>
            <h1 className="font-display text-4xl font-bold tracking-tight text-[#0F172A] sm:text-6xl">
              All Projects
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
              Explore the full portfolio of systems, applications, and digital experiences I have designed and engineered.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setFilter(t.id)}
                className={`relative rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${filter === t.id
                  ? "text-white"
                  : "border border-gray-200 bg-white text-[#0F172A] shadow-sm hover:border-gray-300"
                  }`}
              >
                {filter === t.id && (
                  <motion.span
                    layoutId="filter-pill-page"
                    className="absolute inset-0 rounded-full bg-[#0A1F44]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.ul layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] hover:border-blue-100">
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="relative aspect-[16/10] w-full overflow-hidden text-left bg-gray-100"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#0A1F44] backdrop-blur-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </button>

                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#2563EB]">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-400">{project.role}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">
                    {project.shortDescription}
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-lg bg-gray-50 px-2.5 py-1 text-[10px] font-bold text-[#0F172A] border border-gray-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-xs font-bold text-[#0F172A] transition-all hover:bg-gray-50 hover:border-gray-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="flex-1 inline-flex items-center justify-center rounded-xl bg-[#2563EB] py-3 text-xs font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </main>

      <Footer />
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
