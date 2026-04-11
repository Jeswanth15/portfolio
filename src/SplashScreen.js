import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./splash.css";

const STEPS = [
  "Loading data pipelines...",
  "Initialising ML modules...",
  "Compiling insight engine...",
  "Rendering portfolio...",
];

/* Tiny canvas that draws animated flowing data bars */
function DataCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;

    const BARS = 24;
    const speeds  = Array.from({ length: BARS }, () => (Math.random() * 0.02 + 0.008) * (Math.random() < 0.5 ? 1 : -1));
    const phases  = Array.from({ length: BARS }, () => Math.random() * Math.PI * 2);

    let frame;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const barW = W / BARS;

      for (let i = 0; i < BARS; i++) {
        const h = ((Math.sin(t * speeds[i] * 60 + phases[i]) + 1) / 2) * 0.75 + 0.1;
        const barH = h * H;
        const alpha = h * 0.7 + 0.15;

        // Gradient per bar
        const grad = ctx.createLinearGradient(0, H - barH, 0, H);
        grad.addColorStop(0, `rgba(139,92,246,${alpha})`);
        grad.addColorStop(0.5, `rgba(59,130,246,${alpha * 0.7})`);
        grad.addColorStop(1, `rgba(6,182,212,${alpha * 0.3})`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(i * barW + 1, H - barH, barW - 2, barH, [3, 3, 0, 0]);
        ctx.fill();
      }
      t += 0.016;
      frame = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={320}
      height={80}
      className="splash-canvas"
    />
  );
}

export default function SplashScreen({ onFinish }) {
  const [step, setStep]       = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timers = STEPS.map((_, i) =>
      setTimeout(() => setStep(i), i * 900)
    );

    let p = 0;
    const interval = setInterval(() => {
      p = Math.min(p + 1.4, 100);
      setProgress(p);
      if (p >= 100) clearInterval(interval);
    }, 32);

    const done = setTimeout(onFinish, 4000);

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
      exit={{ opacity: 0, scale: 1.04, filter: "blur(18px)" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {/* Aurora */}
      <div className="splash-aurora" />
      {/* Dot grid */}
      <div className="splash-grid" />

      <motion.div
        className="splash-inner"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo ring */}
        <motion.div
          className="splash-logo-wrap"
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="splash-logo-ring" />
          <span className="splash-logo-initials">JA</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="splash-name"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Jeswanth A
        </motion.h1>

        {/* Fancy role badge */}
        <motion.div
          className="splash-role-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          <span className="splash-role-dot" />
          Data Insight Alchemist
        </motion.div>

        {/* Live data viz canvas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <DataCanvas />
        </motion.div>

        {/* Progress track */}
        <div className="splash-progress-track">
          <motion.div
            className="splash-progress-bar"
            style={{ width: `${progress}%` }}
          />
          <div className="splash-progress-glow" style={{ left: `${progress}%` }} />
        </div>

        {/* Progress number */}
        <div className="splash-pct">{Math.round(progress)}%</div>

        {/* Terminal step */}
        <div className="splash-terminal">
          <AnimatePresence mode="wait">
            <motion.span
              key={step}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <span className="splash-prompt">›</span> {STEPS[step]}
              <span className="splash-cursor" />
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
