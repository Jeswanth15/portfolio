import { motion } from "framer-motion";

const spring = { type: "spring", stiffness: 60, damping: 16 };
const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: spring } };
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };

export default function HeroSection() {
  return (
    <section className="hero" id="hero" style={{ paddingTop: "100px" }}>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={fadeUp}>
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-dot" />
            Data Insight Alchemist · Open to Opportunities
          </div>
        </motion.div>

        <motion.h1 variants={fadeUp}>
          Hi, I'm{" "}
          <span className="name-grad">Jeswanth</span>.
          <br />
          I turn data into
          <br />
          intelligence.
        </motion.h1>

        <motion.p className="hero-sub" variants={fadeUp} style={{ marginTop: "1.5rem" }}>
          CS student specialising in data analysis, machine learning, and building
          insight-driven systems — turning raw datasets into real decisions and impact.
        </motion.p>

        <motion.div className="hero-cta" variants={fadeUp}>
          <a href="#projects" className="btn-primary">
            <i className="ri-bar-chart-box-line" />
            View Projects
          </a>
          <a href="#contact" className="btn-ghost">
            <i className="ri-send-plane-line" />
            Get in Touch
          </a>
        </motion.div>

        <motion.div className="social-row" variants={fadeUp}>
          <a href="mailto:jeswanth1504@gmail.com" className="social-pill">
            <i className="ri-mail-line" /> Email
          </a>
          <a href="tel:+919600548904" className="social-pill">
            <i className="ri-phone-line" /> +91 96005 48904
          </a>
          <a href="https://github.com/Jeswanth15" target="_blank" rel="noreferrer" className="social-pill">
            <i className="ri-github-line" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/jeswanth-a-74b911290" target="_blank" rel="noreferrer" className="social-pill">
            <i className="ri-linkedin-fill" /> LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* Code panel */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ ...spring, delay: 0.35 }}
      >
        <div className="code-panel">
          <div className="code-panel-header">
            <span className="code-dot red" />
            <span className="code-dot yellow" />
            <span className="code-dot green" />
            <span className="code-filename">insight_engine.py</span>
          </div>
          <div className="code-body">
            <span className="sc"># transform data → intelligence</span><br />
            <span className="sk">from</span> analytics <span className="sk">import</span> <span className="sb">Insight</span><br /><br />
            <span className="sv">pipeline</span> = <span className="sb">Insight</span>(<br />
            &nbsp;&nbsp;role=<span className="ss">"Data Analyst"</span>,<br />
            &nbsp;&nbsp;stack=[<span className="ss">"Python"</span>, <span className="ss">"Pandas"</span>, <span className="ss">"ML"</span>],<br />
            &nbsp;&nbsp;consistency=<span className="sn">True</span>,<br />
            &nbsp;&nbsp;impact=<span className="sn">∞</span><br />
            )<br /><br />
            <span className="sc"># ignite 🚀</span><br />
            <span className="sv">pipeline</span>.<span className="sf">run</span>()
          </div>
        </div>
      </motion.div>
    </section>
  );
}
