"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const TYPING_TEXT = "Software Engineer | Frontend & Mobile Development";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 12 },
  },
};

function TypingLine() {
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const full = TYPING_TEXT;

    if (phase === "typing") {
      if (display.length < full.length) {
        timeout = setTimeout(() => {
          setDisplay(full.slice(0, display.length + 1));
        }, 45);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 2200);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 400);
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => {
          setDisplay((d) => d.slice(0, -1));
        }, 18);
      } else {
        timeout = setTimeout(() => setPhase("typing"), 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, phase]);

  return (
    <p className="font-urbanist text-sm text-blue-600 sm:text-base md:text-lg">
      <span className="text-blue-700 font-semibold">{display}</span>
      <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-blue-600 align-middle" />
    </p>
  );
}

export function Hero() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 20;
      const y = (event.clientY / window.innerHeight - 0.5) * 20;
      setParallax({ x, y });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-6 bg-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-[90px]" />
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />

      <motion.div
        className="pointer-events-none absolute left-[8%] top-[10%] z-30 hidden lg:block"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
          <Sparkles className="h-6 w-6 text-blue-600" />
        </div>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[12%] top-[35%] hidden lg:block"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-14 w-14 rotate-12 rounded-lg border border-blue-200 bg-blue-50" />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-4 py-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 max-w-xl"
        >
          <motion.p
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gray-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-sm" />
            Available for opportunities
          </motion.p>
          <motion.h1
            variants={item}
            className="font-urbanist text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-blue-600">Mpuhwe</span>
          </motion.h1>
          <motion.div variants={item} className="mt-4 min-h-[2.5rem]">
            <TypingLine />
          </motion.div>
          <motion.p
            variants={item}
            className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg"
          >
            With over 1 year of hands-on experience, I build high-performance,
            user-centric web and mobile applications. Passionate about clean
            code, intuitive interfaces, and turning ideas into impactful digital
            products. Based in{" "}
            <span className="text-gray-900 font-semibold">Kigali, Rwanda</span>.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:scale-[1.02]"
            >
              Explore My Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-blue-600 hover:bg-gray-50"
            >
              <MessageCircle className="h-4 w-4 text-blue-600" />
              Get In Touch
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.2 }}
          className="relative z-10 mx-auto flex max-w-md justify-center lg:mx-0 lg:max-w-none lg:justify-end"
        >
          <div className="relative">
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              style={{
                x: parallax.x * -0.7,
                y: parallax.y * -0.7,
              }}
            >
              <div className="absolute inset-0 rounded-full border border-blue-300/30 shadow-[0_0_20px_rgba(37,99,235,0.2)]" />
              <div className="absolute inset-8 rounded-full border border-blue-200/25" />
              <div className="absolute inset-14 rounded-full border border-blue-100/20" />
              <motion.span
                className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]"
                animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2.8, repeat: Infinity }}
              />
              <motion.span
                className="absolute bottom-12 left-3 h-2.5 w-2.5 rounded-full bg-blue-400/90 shadow-[0_0_12px_rgba(96,165,250,0.8)]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.6, repeat: Infinity }}
              />
              <motion.span
                className="absolute right-8 top-20 h-2 w-2 rounded-full bg-blue-300/90 shadow-[0_0_12px_rgba(147,197,253,0.8)]"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-dashed border-blue-200/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-100/30 via-blue-50/20 to-blue-100/30 opacity-60 blur-2xl" />
            <div className="relative z-10 rounded-3xl border border-gray-200 bg-white p-1 shadow-xl">
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-gray-200">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/10 via-transparent to-blue-50/10" />
                <div className="absolute left-3 top-3 z-10 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <Image
                  src="/profile.jpg"
                  alt="Mpuhwe — professional portrait"
                  width={480}
                  height={600}
                  className="aspect-[4/5] w-full max-w-[320px] object-cover sm:max-w-[380px] lg:max-w-[420px] rounded-2xl"
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
              </div>
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 z-20 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-xs text-gray-600">Focus</p>
              <p className="font-urbanist text-sm font-bold text-gray-900">
                Frontend · Mobile
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-gray-300 p-1">
          <motion.div
            className="mx-auto h-2 w-1 rounded-full bg-blue-600"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
