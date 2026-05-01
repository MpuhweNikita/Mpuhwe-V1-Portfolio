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
    <section id="contact" className="relative scroll-mt-24 py-32 lg:py-40 bg-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none tech-grid" />
        <motion.div
          className="absolute left-[5%] top-20 h-24 w-24 rounded-full border border-blue-500/20 bg-blue-50/50"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[5%] bottom-20 h-32 w-32 rounded-full border border-blue-500/10 bg-blue-50/30"
          animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
            Contact
          </p>
          <h2 className="font-urbanist text-5xl font-black tracking-tight text-gray-900 sm:text-6xl uppercase">
            LET&apos;S HAVE A CHAT
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 font-medium">
            Have a project in mind or want to collaborate? Drop a message—I&apos;ll
            get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            <motion.div 
              whileHover={{ x: 8 }}
              className="group flex items-start gap-5 rounded-3xl border border-gray-100 bg-gray-50/50 p-8 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Me</p>
                <a
                  href="mailto:hello@mpuhwe.dev"
                  className="mt-1 block text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600"
                >
                  hello@mpuhwe.dev
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 8 }}
              className="group flex items-start gap-5 rounded-3xl border border-gray-100 bg-gray-50/50 p-8 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Location</p>
                <p className="mt-1 text-xl font-bold text-gray-900">Kigali, Rwanda</p>
              </div>
            </motion.div>

            <div className="p-8">
              <p className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400">Follow My Work</p>
              <div className="flex gap-4">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all hover:scale-110 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative lg:col-span-3"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-blue-50/50 blur-2xl" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative rounded-[2rem] border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-200/50 sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-500">
                    Full Name
                  </label>
                  <input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition-all"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-xs font-semibold text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-500">
                    Email Address
                  </label>
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
                    className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition-all"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs font-semibold text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", { required: "Message is required" })}
                    className="w-full resize-none rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition-all"
                    placeholder="Tell me about your project or idea..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs font-semibold text-red-500">{errors.message.message}</p>
                  )}
                </div>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-5 text-sm font-bold text-white shadow-xl shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
              >
                <Send className="h-4 w-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
