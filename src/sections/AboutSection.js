import { motion } from "framer-motion";

export default function AboutSection({ sectionVariants, fadeInItem }) {
  return (
    <motion.section id="about" className="section" variants={sectionVariants}>
      <h2 className="section-title">About Me</h2>

      <div className="section-content two-col">
        <motion.p variants={fadeInItem}>
          I am a Computer Science Engineering student with hands-on experience
          in building structured application flows using Java, C++, Python,
          DBMS and problem-solving.
        </motion.p>

        <motion.div variants={fadeInItem}>
          <h3 className="subheading">What I focus on</h3>
          <ul className="bullet-list">
            <li>Movie review & rating backend structures.</li>
            <li>Educational dashboard & exam automation.</li>
            <li>Clean logic building with DSA + ML basics.</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
