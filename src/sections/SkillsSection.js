import { motion } from "framer-motion";

const spring = { type: "spring", stiffness: 60, damping: 16 };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: spring } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

/* ── Removed: Tools, Communication ── */
const SKILLS = [
  {
    title: "Programming Languages",
    icon: "ri-code-s-slash-line",
    color: "#8b5cf6",
    items: [
      { icon: "ri-code-box-line",    name: "Python" },
      { icon: "ri-java-line",        name: "Java" },
      { icon: "ri-file-code-line",   name: "C++" },
    ],
  },
  {
    title: "Data & Analytics",
    icon: "ri-bar-chart-box-line",
    color: "#06b6d4",
    items: [
      { icon: "ri-table-2",           name: "Pandas / NumPy" },
      { icon: "ri-line-chart-line",   name: "Data Analysis" },
      { icon: "ri-flashlight-line",   name: "Time Series Analysis" },
      { icon: "ri-pie-chart-line",    name: "Data Visualisation" },
    ],
  },
  {
    title: "Machine Learning",
    icon: "ri-brain-line",
    color: "#ec4899",
    items: [
      { icon: "ri-brain-line",          name: "ML Fundamentals" },
      { icon: "ri-robot-line",          name: "Scikit-Learn" },
      { icon: "ri-git-branch-line",     name: "Feature Engineering" },
      { icon: "ri-function-line",       name: "Statistical Modelling" },
    ],
  },
  {
    title: "Backend & Databases",
    icon: "ri-server-line",
    color: "#3b82f6",
    items: [
      { icon: "ri-server-line",         name: "Spring Boot" },
      { icon: "ri-links-line",          name: "REST APIs" },
      { icon: "ri-database-2-line",     name: "SQL / DBMS" },
      { icon: "ri-layout-masonry-line", name: "System Design" },
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
          Skills &amp; <span className="grad">Technologies</span>
        </h2>
      </motion.div>

      <motion.div className="skills-grid" variants={stagger}>
        {SKILLS.map((group) => (
          <motion.div
            key={group.title}
            className="card"
            variants={fadeUp}
            whileHover={{
              y: -6,
              borderColor: `${group.color}55`,
              boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${group.color}22`,
            }}
          >
            <div className="skill-card-title" style={{ "--skill-color": group.color }}>
              <i className={group.icon} style={{ color: group.color }} />
              {group.title}
            </div>
            {group.items.map((skill) => (
              <div key={skill.name} className="skill-item">
                <i className={skill.icon} style={{ color: group.color, opacity: 0.8 }} />
                {skill.name}
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
