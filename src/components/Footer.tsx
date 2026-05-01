"use client";

import { motion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-[#eaeae2] py-10 relative z-10">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold text-black/60">
            © {year} Mpuhwe. All rights reserved.
          </p>
          <p className="mt-2 text-sm font-medium text-gray-800">
            Made with care in Kigali, Rwanda 🌍
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

