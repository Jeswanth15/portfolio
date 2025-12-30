import { motion } from "framer-motion";

export default function AchievementsSection({ sectionVariants, fadeInItem }) {
  return (
    <motion.section
      id="achievements"
      className="section"
      variants={sectionVariants}
    >
      <h2 className="section-title">Achievements</h2>
      <motion.div className="achievements-card" variants={fadeInItem}>
        <h3>Smart India Hackathon 2024 – Semi-Finalist</h3>
        <p className="achievement-meta">National Level · 2024</p>
       
      </motion.div>
    </motion.section>
  );
}
