import { motion } from "framer-motion";

const spring = { type: "spring", stiffness: 60, damping: 16 };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: spring } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const SKILLS = [
  {
    title: "Languages",
    icon: "ri-code-s-slash-line",
    items: [
      { icon: "ri-java-line", name: "Java" },
      { icon: "ri-file-code-line", name: "C++" },
      { icon: "ri-code-box-line", name: "Python" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: "ri-server-line",
    items: [
      { icon: "ri-server-line", name: "Spring Boot" },
      { icon: "ri-links-line", name: "REST APIs" },
      { icon: "ri-layout-masonry-line", name: "System Design" },
      { icon: "ri-database-2-line", name: "SQL / DBMS" },
    ],
  },
  {
    title: "Data & ML",
    icon: "ri-bar-chart-box-line",
    items: [
      { icon: "ri-table-2", name: "Pandas" },
      { icon: "ri-line-chart-line", name: "Data Analysis" },
      { icon: "ri-flashlight-line", name: "Time Series" },
      { icon: "ri-brain-line", name: "ML Basics" },
    ],
  },
  {
    title: "Core CS",
    icon: "ri-node-tree",
    items: [
      { icon: "ri-node-tree", name: "Data Structures & Algorithms" },
      { icon: "ri-puzzle-line", name: "Problem Solving" },
      { icon: "ri-hard-drive-2-line", name: "DBMS" },
    ],
  },
  {
    title: "Tools",
    icon: "ri-tools-line",
    items: [
      { icon: "ri-github-fill", name: "Git & GitHub" },
      { icon: "ri-code-s-slash-fill", name: "VS Code" },
      { icon: "ri-rocket-line", name: "Postman" },
    ],
  },
  {
    title: "Communication",
    icon: "ri-global-line",
    items: [
      { icon: "ri-translate-2", name: "Tamil — Native" },
      { icon: "ri-global-line", name: "English — Fluent" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills" className="section"
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.div variants={fadeUp}>
        <div className="section-label">Expertise</div>
        <h2 className="section-title">
          Skills & <span className="grad">Technologies</span>
        </h2>
      </motion.div>

      <motion.div className="skills-grid" variants={stagger}>
        {SKILLS.map((group) => (
          <motion.div key={group.title} className="card" variants={fadeUp}
            whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(139,92,246,0.15)" }}
          >
            <div className="skill-card-title">
              <i className={group.icon} />
              {group.title}
            </div>
            {group.items.map((skill) => (
              <div key={skill.name} className="skill-item">
                <i className={skill.icon} />
                {skill.name}
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
