"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const socials = [
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://github.com", label: "GitHub", Icon: Github },
  { href: "https://x.com", label: "X", Icon: Twitter },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Contact form (placeholder):", data);
    alert(
      "Thanks for reaching out! This is a demo submit—connect your backend or Formspree to send real messages."
    );
    reset();
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[8%] top-10 h-10 w-10 rounded-full border border-accent/35 bg-accent/10"
          animate={{ y: [0, -12, 0], opacity: [0.4, 0.85, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-[12%] top-24"
          animate={{ y: [0, 8, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Mail className="h-8 w-8 text-accent/40" />
        </motion.div>
        <motion.div
          className="absolute bottom-8 right-[20%] h-6 w-6 rounded-full border border-purple-400/35 bg-purple-400/10"
          animate={{ y: [0, -9, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4.5, repeat: Infinity }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s Have a Chat
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Have a project in mind or want to collaborate? Drop a message—I&apos;ll
            get back as soon as I can.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:col-span-2"
          >
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500">Email</p>
                <a
                  href="mailto:hello@mpuhwe.dev"
                  className="mt-1 block font-medium text-white hover:text-accent"
                >
                  hello@mpuhwe.dev
                </a>
                <p className="mt-2 text-xs text-neutral-500">
                  Replace with your real email.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500">Location</p>
                <p className="mt-1 font-medium text-white">Kigali, Rwanda</p>
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-medium text-neutral-500">Social</p>
              <div className="flex gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/5 p-3 text-neutral-400 transition hover:border-accent/40 hover:text-accent"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-white/10 bg-surface-elevated/80 p-6 backdrop-blur-sm sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <motion.label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                  initial={{ width: 0, opacity: 0.6 }}
                  whileInView={{ width: "fit-content", opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Name
                </motion.label>
                <input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full rounded-xl border border-white/10 bg-background/80 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/40"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>
              <div className="sm:col-span-1">
                <motion.label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                  initial={{ width: 0, opacity: 0.6 }}
                  whileInView={{ width: "fit-content", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 }}
                >
                  Email
                </motion.label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full rounded-xl border border-white/10 bg-background/80 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/40"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <motion.label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                  initial={{ width: 0, opacity: 0.6 }}
                  whileInView={{ width: "fit-content", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 }}
                >
                  Message
                </motion.label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className="w-full resize-y rounded-xl border border-white/10 bg-background/80 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/40"
                  placeholder="Tell me about your project or idea..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-cyan-400 py-3.5 text-sm font-bold text-background shadow-glow-sm transition hover:shadow-glow sm:w-auto sm:px-10"
            >
              <Send className="h-4 w-4" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
