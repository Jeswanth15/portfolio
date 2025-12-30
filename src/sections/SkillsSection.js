import { motion } from "framer-motion";

export default function SkillsSection({
  sectionVariants,
  staggerChildren,
  fadeInItem,
  StarRating
}) {
  return (
    <motion.section id="skills" className="section" variants={sectionVariants}>
      <h2 className="section-title">Skills</h2>

      <motion.div className="skills-grid" variants={staggerChildren}>
        <motion.div className="skill-card" variants={fadeInItem}>
          <h3 className="subheading">Programming</h3>
          <ul className="skill-list">
            <li>Java <StarRating value={4} /></li>
            <li>C++ <StarRating value={4} /></li>
            <li>Python <StarRating value={3} /></li>
          </ul>
        </motion.div>

        <motion.div className="skill-card" variants={fadeInItem}>
          <h3 className="subheading">Python / ML</h3>
          <ul className="skill-list">
            <li>Pandas <StarRating value={3} /></li>
            <li>Seaborn <StarRating value={3} /></li>
            <li>ML Basics <StarRating value={3} /></li>
          </ul>
        </motion.div>

        <motion.div className="skill-card" variants={fadeInItem}>
          <h3 className="subheading">Core CS</h3>
          <ul className="skill-list">
            <li>DBMS <StarRating value={3.5} /></li>
            <li>Problem Solving <StarRating value={3.5} /></li>
          </ul>
        </motion.div>

        <motion.div className="skill-card" variants={fadeInItem}>
          <h3 className="subheading">Languages</h3>
          <ul className="skill-list">
            <li>Tamil <span className="pill">Fluent</span></li>
            <li>English <span className="pill">Fluent</span></li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
