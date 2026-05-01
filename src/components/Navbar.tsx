"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, GraduationCap, Home, Mail, UserRound } from "lucide-react";
import type { ComponentType } from "react";
import { useState } from "react";
import type { SectionId } from "@/hooks/useActiveSection";

const navLinks: {
  id: SectionId;
  label: string;
  Icon: ComponentType<{ className?: string }>;
}[] = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "What I Do", Icon: UserRound },
  { id: "skills", label: "Skills", Icon: Code2 },
  { id: "projects", label: "Projects", Icon: Briefcase },
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "contact", label: "Chat", Icon: Mail },
];

type NavbarProps = { activeSection: SectionId };

export function Navbar({ activeSection }: NavbarProps) {
  const [hovered, setHovered] = useState<SectionId | null>(null);

  const scrollTo = (id: SectionId) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-3 z-[90] px-3"
    >
      <div className="mx-auto flex h-[72px] w-full max-w-2xl items-center justify-between rounded-2xl border border-gray-300 bg-white/90 px-1.5 shadow-[0_0_20px_rgba(37,99,235,0.1)] backdrop-blur-xl">
        {navLinks.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => scrollTo(id)}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className="group relative flex flex-1 items-center justify-center"
            aria-label={label}
          >
            <motion.span
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex h-14 w-full max-w-[5.5rem] items-center justify-center rounded-xl transition ${
                activeSection === id
                  ? "text-blue-600"
                  : "text-gray-600 group-hover:text-gray-900"
              }`}
            >
              <Icon className="h-[1.15rem] w-[1.15rem]" />
              {(hovered === id || activeSection === id) && (
                <motion.span
                  initial={{ opacity: 0, y: 6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="pointer-events-none absolute -top-12 rounded-xl border border-gray-300 bg-white/95 px-3 py-1.5 text-[0.72rem] font-semibold text-gray-900 shadow-[0_0_12px_rgba(37,99,235,0.15)]"
                >
                  {label}
                  <span className="absolute left-1/2 top-full h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-gray-300 bg-white/95" />
                </motion.span>
              )}
              {activeSection === id && (
                <motion.span
                  layoutId="bottom-active"
                  className="absolute inset-1 -z-10 rounded-xl border border-blue-600/35 bg-blue-50/50 shadow-[0_0_12px_rgba(37,99,235,0.2)]"
                  transition={{ type: "spring", stiffness: 340, damping: 28 }}
                />
              )}
              <span
                className={`absolute -bottom-0.5 h-2.5 w-2.5 rotate-45 rounded-[2px] transition ${
                  activeSection === id ? "bg-blue-600/90" : "bg-transparent"
                }`}
              />
            </motion.span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
