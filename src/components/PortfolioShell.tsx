"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { HireMe } from "./HireMe";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Testimonials } from "./Testimonials";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[200] overflow-hidden bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" />
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-[90px]" />
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: [1, 1.03, 1] }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            scale: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="text-center font-urbanist text-3xl font-black tracking-tight text-gray-900 drop-shadow-[0_0_8px_rgba(37,99,235,0.3)] sm:text-5xl"
        >
          Welcome, visitor. Let&apos;s dive in.
        </motion.p>
      </div>
    </motion.div>
  );
}

export function PortfolioShell() {
  const activeSection = useActiveSection();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading ? <LoadingScreen /> : null}</AnimatePresence>
      <motion.div
        initial={{ opacity: 0.65, scale: 1.015 }}
        animate={{
          opacity: isLoading ? 0.65 : 1,
          scale: isLoading ? 1.015 : 1,
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Navbar activeSection={activeSection} />
        <main className="pb-28 md:pb-24">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <HireMe />
          <Experience />
          <Education />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
