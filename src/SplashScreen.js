import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./splash.css";

const STEPS = [
  "Initialising runtime...",
  "Loading modules [React, Framer]...",
  "Compiling components...",
  "Almost ready...",
];

export default function SplashScreen({ onFinish }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timers = [];

    STEPS.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i), i * 900));
    });

    // Animate progress bar smoothly
    let p = 0;
    const interval = setInterval(() => {
      p += 1.2;
      if (p >= 100) { p = 100; clearInterval(interval); }
      setProgress(p);
    }, 36);

    const done = setTimeout(onFinish, 4200);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
      clearTimeout(done);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="splash-root"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
      transition={{ exit: { duration: 0.6, ease: "easeInOut" } }}
    >
      {/* Animated Aurora */}
      <div className="splash-aurora" />

      {/* Dot grid */}
      <div className="splash-grid" />

      {/* Center content */}
      <motion.div
        className="splash-inner"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo mark */}
        <motion.div
          className="splash-logo-wrap"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="splash-logo-ring" />
          <span className="splash-logo-initials">JA</span>
        </motion.div>

        <motion.h1
          className="splash-name"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Jeswanth A
        </motion.h1>

        <motion.p
          className="splash-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Backend Engineer &amp; CS Student
        </motion.p>

        {/* Progress bar */}
        <div className="splash-progress-track">
          <motion.div
            className="splash-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Terminal steps */}
        <div className="splash-terminal">
          <AnimatePresence mode="wait">
            <motion.span
              key={step}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <span className="splash-prompt">&gt;</span> {STEPS[step]}
              <span className="splash-cursor" />
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
