import { motion } from "framer-motion";

const spring = { type: "spring", stiffness: 60, damping: 16 };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: spring } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const FOCUS = [
  {
    icon: "📊",
    title: "Data Analysis",
    desc: "Extracting patterns, trends, and actionable insights from complex datasets",
  },
  {
    icon: "🤖",
    title: "Machine Learning",
    desc: "Building predictive models with statistical rigour and real-world validation",
  },
  {
    icon: "🏗️",
    title: "Backend Systems",
    desc: "Designing robust APIs and data pipelines that power analytical workflows",
  },
  {
    icon: "💡",
    title: "Problem Solving",
    desc: "DSA, algorithmic thinking, and translating business questions into data solutions",
  },
];

export default function AboutSection() {
  return (
    <motion.section
      id="about" className="section"
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <motion.div variants={fadeUp}>
        <div className="section-label">About</div>
        <h2 className="section-title">
          Turning data into <span className="grad">decisions</span>.
        </h2>
      </motion.div>

      <motion.p className="about-body" variants={fadeUp}>
        I'm a Computer Science Engineering student with a strong focus on{" "}
        <strong style={{ color: "#f0f0f0" }}>data analysis</strong> and{" "}
        <strong style={{ color: "#f0f0f0" }}>machine learning</strong>. I build systems that
        don't just store data — they understand it. From time-series sports models to personalised
        news feeds, I love turning messy data into clean, interpretable intelligence that drives
        real outcomes.
      </motion.p>

      <motion.div className="focus-grid" variants={stagger}>
        {FOCUS.map((item) => (
          <motion.div
            key={item.title}
            className="focus-item"
            variants={fadeUp}
            whileHover={{ scale: 1.02, borderColor: "rgba(139,92,246,0.35)" }}
          >
            <span className="focus-icon">{item.icon}</span>
            <div className="focus-text">
              <strong>{item.title}</strong>
              {item.desc}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
