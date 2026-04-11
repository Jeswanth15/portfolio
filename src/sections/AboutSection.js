import { motion } from "framer-motion";

const spring = { type: "spring", stiffness: 60, damping: 16 };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: spring } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

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
          Building systems that <span className="grad">scale</span>.
        </h2>
      </motion.div>

      <motion.p className="about-body" variants={fadeUp}>
        I'm a Computer Science Engineering student with strong foundations in data structures,
        backend development, and system design. I focus on building structured and scalable
        applications with clean logic and efficient workflows — writing code that doesn't just work
        but <em>lasts</em>.
      </motion.p>

      <motion.div className="focus-grid" variants={stagger}>
        {[
          { icon: "🏗️", title: "Backend Architecture", desc: "REST APIs, Spring Boot, system design & microservices patterns" },
          { icon: "🧠", title: "Data & ML", desc: "Pandas, time-series analysis, machine learning fundamentals" },
          { icon: "💡", title: "Problem Solving", desc: "DSA, competitive programming & algorithmic thinking" },
          { icon: "🔧", title: "Full Stack", desc: "React front-ends connected to robust, well-structured backends" },
        ].map((item) => (
          <motion.div key={item.title} className="focus-item" variants={fadeUp}
            whileHover={{ scale: 1.02, borderColor: "rgba(139,92,246,0.3)" }}
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
