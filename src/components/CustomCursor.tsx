"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const smoothX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.35 });
  const smoothY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.35 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      if (!visible) setVisible(true);
      const target = event.target as HTMLElement | null;
      const isInteractive = !!target?.closest(
        "a, button, input, textarea, select, [role='button']"
      );
      setInteractive(isInteractive);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseout", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", leave);
    };
  }, [visible, x, y]);

  return (
    <motion.div
      className="custom-cursor"
      style={{ x: smoothX, y: smoothY }}
      animate={{ opacity: visible ? 1 : 0, scale: interactive ? 1.25 : 1 }}
      transition={{ duration: 0.18 }}
    >
      <motion.div
        className="cursor-gear"
        animate={{ rotate: 360 }}
        transition={{ duration: interactive ? 1.2 : 2.2, repeat: Infinity, ease: "linear" }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      />
    </motion.div>
  );
}
