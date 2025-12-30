import { motion } from "framer-motion";

export default function HeroSection({
  sectionVariants,
  staggerChildren,
  fadeInItem
}) {
  return (
    <motion.section className="hero" variants={sectionVariants} id="hero">
      <motion.div className="hero-content" variants={staggerChildren}>
        <motion.p className="tagline" variants={fadeInItem}>
          Aspiring Software Engineer
        </motion.p>

        <motion.h1 variants={fadeInItem}>
          Hi, I'm <span className="highlight">Jeswanth</span>.
          <br />
          I build reliable and structured software.
        </motion.h1>

        <motion.p className="hero-subtitle" variants={fadeInItem}>
          Focused on problem solving and real-world projects in{" "}
          <span className="highlight">movies</span>,{" "}
          <span className="highlight">education</span>, and{" "}
          <span className="highlight">backend systems</span>.
        </motion.p>

        <motion.div className="hero-actions" variants={fadeInItem}>
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </motion.div>

        <motion.div className="social-row" variants={fadeInItem}>
          <a href="mailto:jeswanth1504@gmail.com" className="social-pill">
            📧 Email
          </a>
          <a href="tel:+919600548904" className="social-pill">
            📱 +91 96005 48904
          </a>
          <a
            href="https://github.com/Jeswanth15"
            className="social-pill"
            target="_blank"
            rel="noreferrer"
          >
            💻 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jeswanth-a-74b911290"
            className="social-pill"
            target="_blank"
            rel="noreferrer"
          >
            🔗 LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
