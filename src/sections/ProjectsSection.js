import { motion } from "framer-motion";

export default function ProjectsSection({
  sectionVariants,
  staggerChildren,
  fadeInItem
}) {
  return (
    <motion.section id="projects" className="section" variants={sectionVariants}>
      <h2 className="section-title">Projects</h2>

      <motion.div className="projects-grid" variants={staggerChildren}>
        <motion.article className="project-card" variants={fadeInItem}>
          <h3>Movie Review & Rating Backend</h3>
          <p className="project-desc">
            Spring Boot backend with users, movies & dynamic rating updates.
          </p>
          <ul className="project-points">
            <li>DTO structure prevents infinite loops</li>
            <li>Review update → auto rating recalculation</li>
          </ul>
        </motion.article>

        <motion.article className="project-card" variants={fadeInItem}>
          <h3>Educational Dashboard</h3>
          <p className="project-desc">
            Classrooms, subjects & exam scheduling with clean UI flow.
          </p>
          <ul className="project-points">
            <li>Reusable modular UI components</li>
            <li>Future: ML exam mark prediction</li>
          </ul>
        </motion.article>

        <motion.article className="project-card" variants={fadeInItem}>
          <h3>Pharmacy Billing UI</h3>
          <p className="project-desc">
            Inventory management + billing interface using React.
          </p>
        </motion.article>

        <motion.article className="project-card" variants={fadeInItem}>
          <h3>Freelancer Platform (Prototype)</h3>
          <p className="project-desc">
            System design for proposals, contracts & workflow automation.
          </p>
        </motion.article>
      </motion.div>
    </motion.section>
  );
}
