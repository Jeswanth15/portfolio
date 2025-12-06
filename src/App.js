import React, { useRef ,useState} from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./index.css";
import SplashScreen from "./SplashScreen";

const StarRating = ({ value, outOf = 5 }) => {
  const stars = [];
  const full = Math.floor(value);
  for (let i = 1; i <= outOf; i++) {
    if (i <= full) stars.push("★");
    else stars.push("☆");
  }
  return (
    <span className="stars">
      {stars.join(" ")} <span className="stars-value">({value}/5)</span>
    </span>
  );
};

// Animation variants
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.18 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeInItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function App() {
  const form = useRef();
  const [showSplash, setShowSplash] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1518",
        "template_smlri6t",
        form.current,
        "kEf77EIxG2QAN72i9"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (err) => {
          alert("Failed to send: " + err.text);
        }
      );
  };

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <motion.div
      className="app"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Navbar */}
      <motion.header
        className="navbar"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div className="logo">Jeswanth A</motion.div>

        <nav className="nav-links">
          {["about", "skills", "projects", "achievements", "contact"].map(
            (item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                whileHover={{ y: -2, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            )
          )}
        </nav>
      </motion.header>

      {/* Hero Section */}
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

          {/* Social Row */}
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
            >
              💻 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jeswanth-a-74b911290"
              className="social-pill"
              target="_blank"
            >
              🔗 LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Hero Card */}
        <motion.div className="hero-side">
          <motion.div
            className="hero-card"
            animate={{
              y: [0, -8, 0],
              boxShadow: [
                "0 20px 60px rgba(15,23,42,0.45)",
                "0 26px 70px rgba(15,23,42,0.65)",
                "0 20px 60px rgba(15,23,42,0.45)",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="hero-role">B.E CSE Student</p>
            <p className="hero-location">India · Tamil / English</p>
            <p className="hero-status">Open to backend / full-stack roles</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section */}
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

      {/* Skills */}
      <motion.section id="skills" className="section" variants={sectionVariants}>
        <h2 className="section-title">Skills</h2>

        <motion.div className="skills-grid" variants={staggerChildren}>
          <motion.div className="skill-card" variants={fadeInItem}>
            <h3 className="subheading">Programming</h3>
            <ul className="skill-list">
              <li>
                Java <StarRating value={4} />
              </li>
              <li>
                C++ <StarRating value={4} />
              </li>
              <li>
                Python <StarRating value={3} />
              </li>
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

      {/* Projects */}
      <motion.section
        id="projects"
        className="section"
        variants={sectionVariants}
      >
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

      {/* Achievements */}
      <motion.section
        id="achievements"
        className="section"
        variants={sectionVariants}
      >
        <h2 className="section-title">Achievements</h2>
        <motion.div className="achievements-card" variants={fadeInItem}>
          <h3>Smart India Hackathon 2024 – Semi-Finalist</h3>
          <p className="achievement-meta">National Level · 2024</p>
          <p>
            Selected for designing AI/data-driven solutions for real government
            problem statements.
          </p>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="section"
        variants={sectionVariants}
      >
        <h2 className="section-title">Contact</h2>

        <div className="section-content two-col">
          <motion.div variants={fadeInItem}>
            <p>
              I am looking for opportunities where I can apply my programming
              skills to real projects. Feel free to reach out!
            </p>

            {/* ICON-ONLY CONTACT GRID */}
            <div className="contact-cards icon-only-grid">
              <a
                href="mailto:jeswanth1504@gmail.com"
                className="contact-icon-card"
              >
                <i className="icon ri-mail-line"></i>
              </a>

              <a href="tel:+919600548904" className="contact-icon-card">
                <i className="icon ri-phone-line"></i>
              </a>

              <a
                href="https://github.com/Jeswanth15"
                target="_blank"
                rel="noreferrer"
                className="contact-icon-card"
              >
                <i className="icon ri-github-line"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/jeswanth-a-74b911290"
                target="_blank"
                rel="noreferrer"
                className="contact-icon-card"
              >
                <i className="icon ri-linkedin-box-line"></i>
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            variants={fadeInItem}
          >
            <input type="text" name="user_name" placeholder="Your Name" />
            <input type="email" name="user_email" placeholder="Your Email" />
            <textarea name="message" placeholder="Your Message"></textarea>

            <motion.button
              type="submit"
              className="btn primary full-width"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        © {new Date().getFullYear()} Jeswanth A · Portfolio
      </motion.footer>
    </motion.div>
  );
}

export default App;
