import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

/* ─── 3D Tilt Card Wrapper ─────────────────────────── */
function TiltCard({ children, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 25 });
  const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
    >
      {/* Glare layer */}
      <motion.div
        style={{
          position: "absolute", inset: 0, borderRadius: "inherit", zIndex: 10,
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.07), transparent 65%)",
          backgroundPositionX: glareX,
          backgroundPositionY: glareY,
          pointerEvents: "none",
        }}
      />
      {children}
    </motion.div>
  );
}

/* ─── Thematic Animated Scenes ─────────────────────── */

/* 🏏 Cricket: spinning ball + stumps */
function CricketScene() {
  return (
    <div className="proj-scene cricket-scene" aria-hidden>
      <div className="cricket-pitch">
        <div className="stump" /><div className="stump" /><div className="stump" />
      </div>
      <motion.div
        className="cricket-ball"
        animate={{ x: [0, 120, 0], y: [0, -30, 0], rotate: [0, 360, 720] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="cricket-arc" />
    </div>
  );
}

/* 🎬 Movie: orbiting stars + film strip */
function MovieScene() {
  const stars = [
    { r: 38, delay: 0, color: "#f59e0b" },
    { r: 60, delay: 0.4, color: "#fbbf24" },
    { r: 82, delay: 0.8, color: "#fcd34d" },
  ];
  return (
    <div className="proj-scene movie-scene" aria-hidden>
      <div className="movie-reel" />
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="movie-star"
          style={{ "--r": `${s.r}px`, "--color": s.color }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "linear", delay: s.delay }}
        />
      ))}
    </div>
  );
}

/* 📰 News: spinning globe + floating headlines */
function NewsScene() {
  return (
    <div className="proj-scene news-scene" aria-hidden>
      <motion.div
        className="globe"
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="globe-ring ring1" />
        <div className="globe-ring ring2" />
        <div className="globe-ring ring3" />
        <div className="globe-core" />
      </motion.div>
      {["Breaking", "Trending", "Latest"].map((t, i) => (
        <motion.div
          key={t}
          className="news-pill"
          animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.7 }}
          style={{ top: `${20 + i * 28}%`, right: "8%" }}
        >
          {t}
        </motion.div>
      ))}
    </div>
  );
}

/* 🎓 Education: floating graduation cap + data bars */
function EduScene() {
  return (
    <div className="proj-scene edu-scene" aria-hidden>
      <motion.div
        className="grad-cap"
        animate={{ y: [0, -12, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        🎓
      </motion.div>
      <div className="data-bars">
        {[60, 80, 50, 90, 70].map((h, i) => (
          <motion.div
            key={i}
            className="data-bar"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeOut" }}
            style={{ "--bar-h": `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Project Data ──────────────────────────────────── */
const PROJECTS = [
  {
    Scene: CricketScene,
    title: "Cricket Player ML Predictor",
    github: "https://github.com/Jeswanth15/cricket-ml-",
    tags: ["Python", "ML", "Pandas", "Time Series"],
    bullets: [
      "ML model to predict cricket player performance",
      "Time-series analysis on historical match data",
      "Stat-driven scoring & career projection",
    ],
  },
  {
    Scene: MovieScene,
    title: "Movie Review & Rating System",
    github: "https://github.com/Jeswanth15/Movie-repo",
    tags: ["Spring Boot", "REST API", "SQL", "DTO"],
    bullets: [
      "Spring Boot backend with user review engine",
      "Dynamic rating recalculation on every review",
      "Optimised DTO architecture — no infinite loops",
    ],
  },
  {
    Scene: NewsScene,
    title: "News Aggregator — Personalised Feed",
    github: "https://github.com/HamsavardhanS/News_Aggregator_Personalised_Feed",
    tags: ["Python", "APIs", "NLP", "Data"],
    bullets: [
      "Aggregates live news from multiple global sources",
      "User interest profiling for personalised feed",
      "Category filtering & scalable backend pipeline",
    ],
  },
  {
    Scene: EduScene,
    title: "Educational Dashboard System",
    github: "https://github.com/Jeswanth15/edu-repo",
    tags: ["React", "Spring Boot", "DBMS"],
    bullets: [
      "Structured platform — classrooms, subjects, exams",
      "Modular scalable UI + backend integration",
      "Roadmap: ML-based student performance insights",
    ],
  },
];

/* ─── Main Section ──────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 55, damping: 15 } },
};

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
    >
      <motion.div variants={fadeUp}>
        <div className="section-label">Work</div>
        <h2 className="section-title">
          Featured <span className="grad">Projects</span>
        </h2>
      </motion.div>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <motion.div key={p.title} variants={fadeUp}>
            <TiltCard className="project-card">

              {/* Thematic animated scene */}
              <p.Scene />

              {/* Card body */}
              <div className="project-card-body">
                <h3 className="project-title">{p.title}</h3>

                <ul className="project-bullets">
                  {p.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>

                <div className="tag-row">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github-btn"
                  >
                    <i className="ri-github-line" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
