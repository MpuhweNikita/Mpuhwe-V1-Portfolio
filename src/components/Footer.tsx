"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUpRight, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "/projects" },
    { label: "Experience", href: "#experience" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com", label: "Twitter" },
  ];

  return (
    <footer className="relative overflow-hidden bg-white pt-24 pb-12 border-t border-gray-100">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-black tracking-tighter text-gray-900 uppercase">
                Mpuhwe<span className="text-blue-600">.</span>
              </h2>
            </Link>
            <p className="text-xl font-medium text-gray-500 leading-relaxed max-w-md">
              Building digital experiences that are as reliable as they are beautiful. Focused on precision, performance, and user-centric design.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-100 bg-white text-gray-400 transition-all hover:border-blue-600 hover:text-blue-600 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7 space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Navigation</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="group flex items-center gap-2 text-lg font-bold text-gray-900 transition-all hover:text-blue-600"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Status</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-lg font-bold text-gray-900">Available for hire</span>
              </div>
              <p className="text-gray-500 font-medium">
                I am currently looking for new opportunities and interesting projects to collaborate on.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-sm hover:gap-4 transition-all"
              >
                Start a conversation
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold text-gray-400">
            © {year} MPUHWE NIKITA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-sm font-bold text-gray-400">
            MADE WITH <Heart className="h-4 w-4 text-red-500 fill-red-500" /> IN KIGALI
          </div>
        </div>
      </div>
    </footer>
  );
}

