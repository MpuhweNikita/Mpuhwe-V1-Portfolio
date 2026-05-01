"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X, ImageIcon, Clock } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/40 "
            aria-label="Close modal"
            onClick={onClose}
          />
          <motion.div
            className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
            initial={{ y: 40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            {/* Header Area with Close */}
            <div className="absolute right-6 top-6 z-20">
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 shadow-sm  transition hover:scale-105 hover:bg-white hover:text-slate-900"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col lg:flex-row">
                {/* Left Column: Hero Image */}
                <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-slate-100 lg:sticky lg:top-0 lg:aspect-[4/3] lg:w-1/2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Right Column: Project Details */}
                <div className="flex flex-col p-8 sm:p-10 lg:w-1/2 lg:p-12">
                  <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#2563EB]">
                    {project.category.replace("-", " ")}
                  </p>
                  <h3
                    id="project-modal-title"
                    className="mb-2 font-display text-3xl font-black text-gray-800 sm:text-4xl"
                  >
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm font-bold text-slate-500 uppercase tracking-widest">{project.role}</p>

                  <div className="mb-8 mt-6 h-px w-16 bg-slate-200" />

                  <p className="font-sans leading-relaxed text-slate-600 text-lg">{project.longDescription}</p>

                  <div className="mt-8">
                    <h4 className="font-display mb-3 text-sm font-bold uppercase tracking-widest text-slate-900">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-sans rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-100 bg-blue-50/50 p-5">
                      <h4 className="font-display mb-2 text-sm font-bold text-blue-900 uppercase tracking-widest">Challenges</h4>
                      <p className="font-sans text-sm leading-relaxed text-blue-800/80">{project.challenges}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                      <h4 className="font-display mb-2 text-sm font-bold text-slate-900 uppercase tracking-widest">Outcomes</h4>
                      <p className="font-sans text-sm leading-relaxed text-slate-600">{project.results}</p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="mt-10 flex flex-wrap gap-4 pt-10 border-t border-slate-100">
                    {project.liveUrl && (
                      project.liveUrl.startsWith("http") ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-150 hover:bg-blue-600 hover:scale-[1.02] sm:flex-none"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Live Site
                        </a>
                      ) : (
                        <div className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-bold text-slate-400 sm:flex-none cursor-default">
                          <Clock className="h-4 w-4" />
                          {project.liveUrl}
                        </div>
                      )
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-150 hover:border-[#2563EB]/30 hover:text-[#2563EB] hover:scale-[1.02] sm:flex-none"
                      >
                        <Github className="h-4 w-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Row: Additional Gallery Block */}
              <div className="bg-slate-50 p-8 sm:p-10 lg:p-12 border-t border-slate-100">
                <h4 className="mb-6 font-display text-2xl font-bold tracking-tight text-slate-900">Gallery & Screenshots</h4>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Placeholders for future gallery implementations */}
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex aspect-video w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white text-slate-400">
                      <ImageIcon className="mb-2 h-8 w-8 text-slate-300" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Placeholder image</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
