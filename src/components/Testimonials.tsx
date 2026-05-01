"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "IZERE Joshua",
    role: "CEO of BranlyCode",
    quote: "Mpuhwe is a passionate and dedicated programmer who consistently produces high-quality work. She is eager to learn, adapts quickly, and is a valuable addition to any software development team.",
    image: "/joshua.jpeg",
  },
  {
    name: "TWARIMITWE Aaron",
    role: "10X Engineer",
    quote: "Mpuhwe turns rough ideas into interfaces that feel premium. Great attention to detail and delivery speed.",
    image: "/aaron.jpeg",
  },
  {
    name: "UWASE UTUJE Sandrine",
    role: "Project Manager",
    quote: "I highly recommend Nikita for any senior Frontend Role. She is a 10x developer who builds robust and maintainable architectures. Beyond her technical skills, she is a strategic thinker who understands the full web and mobile stack. Nikita is a high-impact engineer and a true asset to any team.",
    image: "/sandy.jpg",
  },
  {
    name: "Keza Delice",
    role: "Frontend Developer",
    quote: "Clean architecture, thoughtful motion, and performance-first decisions all the way through is what Mpuhwe does.",
    image: "/delice.png",
  },
  {
    name: "CYIZERE Happy",
    role: "Frontend Architect",
    quote: "Working with her was a positive experience. She brings strong teamwork skills, communicates well, and shows real dedication to her work. Her passion is evident in the way she approaches tasks,and she always makes sure to see things through properly.",
    image: "/happy.jpg",
  },
];

export function Testimonials() {
  const [paused, setPaused] = useState(false);
  const orbiting = testimonials.slice(0, 5);

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 py-20 lg:py-28 bg-transparent"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex rounded-full border border-gray-300 bg-white px-5 py-2">
            <p className="font-urbanist text-sm font-semibold uppercase tracking-widest text-gray-700">Testimonials</p>
          </div>
          <h2 className="font-urbanist text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Words of Appreciation
          </h2>
        </motion.div>

        <div
          className={`relative mx-auto h-[52rem] max-w-6xl overflow-hidden rounded-[3rem] bg-white ${paused ? "orbit-paused" : ""}`}
        >
          {/* Subtle blue center gradient */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)]" />

          {/* High-Precision Concentric Diamonds Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            {/* Center Fill */}
            <div className="absolute w-40 h-40 bg-blue-500/20 rotate-45 border-dashed border border-blue-500/50 rounded-3xl" />

            {/* Thin Diamond Layers */}
            <div className="absolute w-64 h-64 border-[0.5px] border-blue-200/30 rotate-45 rounded-[2rem] bg-blue-600/20" />
            <div className="absolute w-80 h-80 border-[0.5px] border border-blue-200/20 rotate-45 rounded-[2.5rem]" />
            <div className="absolute w-[35rem] h-[35rem] border-[0.5px] border-blue-100/20 border-dashed rounded-[3rem]" />
            <div className="absolute w-[36rem] h-[36rem] border-[0.5px] border-dashed border-blue-100/10 rounded-[4rem]" />
          </div>

          {orbiting.map((item, i) => {
            return (
              <div
                key={item.name}
                className="orbit-item absolute left-1/2 top-1/2 z-10"
                style={
                  {
                    "--orbit-duration": "45s",
                    animationDelay: `-${(i / orbiting.length) * 45}s`,
                  } as CSSProperties
                }
              >
                <motion.article
                  className="w-[20rem] bg-[#0A162B] rounded-[1.5rem] rounded-br-[6rem] overflow-hidden shadow-2xl border border-white/5 group relative"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  whileHover={{ scale: 1.02, zIndex: 50 }}
                  style={{ transformOrigin: "center" }}
                >
                  {/* The specific "Sandrine" cutout shape */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-br-[3.5rem] z-10 overflow-hidden shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>

                  <div className="pt-7 pl-36 pr-6 min-h-[8rem] flex flex-col justify-center">
                    <h3 className="font-urbanist font-bold text-white text-[1rem] leading-tight">{item.name}</h3>
                    <p className="font-urbanist text-[0.7rem] text-slate-400 font-bold uppercase tracking-wider mt-1">{item.role}</p>
                    <div className="mt-2 flex text-blue-400 text-[8px] gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>

                  <div className="px-8 pt-2 pb-14">
                    <p className="font-urbanist text-[13px] font-medium leading-relaxed text-slate-300 italic opacity-90">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                </motion.article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
