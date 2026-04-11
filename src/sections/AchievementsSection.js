import { motion } from "framer-motion";

const spring = { type: "spring", stiffness: 60, damping: 16 };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: spring } };

export default function AchievementsSection() {
  return (
    <motion.section
      id="achievements" className="section"
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
    >
      <motion.div variants={fadeUp}>
        <div className="section-label">Recognition</div>
        <h2 className="section-title">
          <span className="grad">Achievements</span>
        </h2>
      </motion.div>

      <div className="achievements-grid">
        <motion.div className="achievement-card" variants={fadeUp}
          whileHover={{ y: -6, borderColor: "rgba(139,92,246,0.4)" }}
        >
          <div className="achievement-badge">🏆 National Level · 2024</div>
          <div className="achievement-title">Smart India Hackathon 2024</div>
          <div className="achievement-sub">Semi-Finalist — Competed among top engineering teams nationally</div>
        </motion.div>

        <motion.div className="achievement-card" variants={fadeUp}
          whileHover={{ y: -6, borderColor: "rgba(139,92,246,0.4)" }}
        >
          <div className="achievement-badge">🥇 Top 10 Teams · 2025</div>
          <div className="achievement-title">NeoHack 2025</div>
          <div className="achievement-sub">Top 10 finish — Competitive hackathon recognition for innovative solution</div>
        </motion.div>
      </div>
    </motion.section>
  );
}
