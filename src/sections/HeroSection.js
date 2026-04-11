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
            Data Intelligence Architect · Open to Opportunities
          </div>
        </motion.div>

        <motion.h1 variants={fadeUp}>
          Hi, I'm{" "}
          <span className="name-grad">Jeswanth</span>.
          <br />
          I build scalable
          <br />
          software systems.
        </motion.h1>

        <motion.p className="hero-sub" variants={fadeUp} style={{ marginTop: "1.5rem" }}>
          Computer Science student focused on backend development, system design, and building
          data-driven applications across recommendation systems and education platforms.
        </motion.p>

        <motion.div className="hero-cta" variants={fadeUp}>
          <a href="#projects" className="btn-primary">
            <i className="ri-code-box-line" />
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
            <span className="code-filename">backend_node.py</span>
          </div>
          <div className="code-body">
            <span className="sc"># core system bootstrap</span><br />
            <span className="sk">from</span> core_engine <span className="sk">import</span> <span className="sb">System</span><br /><br />
            <span className="sv">backend_node</span> = <span className="sb">System</span>(<br />
            &nbsp;&nbsp;framework=<span className="ss">"Spring Boot"</span>,<br />
            &nbsp;&nbsp;architecture=<span className="ss">"Microservices"</span>,<br />
            &nbsp;&nbsp;consistency=<span className="sn">True</span>,<br />
            &nbsp;&nbsp;auth=<span className="ss">"OAuth2"</span>,<br />
            &nbsp;&nbsp;scale=<span className="sn">∞</span><br />
            )<br /><br />
            <span className="sc"># ignite 🚀</span><br />
            <span className="sv">backend_node</span>.<span className="sf">ignite</span>()
          </div>
        </div>
      </motion.div>
    </section>
  );
}
