import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./index.css";

import ZipGame from "./tictactoe";
import SplashScreen from "./SplashScreen";

/* Section components */
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import AchievementsSection from "./sections/AchievementsSection";
import ContactSection from "./sections/ContactSection";

/* ⭐ StarRating stays SAME */
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

/* Animation variants (UNCHANGED) */
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
  const [showZip, setShowZip] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1518",
      "template_smlri6t",
      form.current,
      "kEf77EIxG2QAN72i9"
    ).then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (err) => alert("Failed to send: " + err.text)
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
      {/* NAVBAR */}
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

      {/* HERO */}
      <HeroSection
        sectionVariants={sectionVariants}
        staggerChildren={staggerChildren}
        fadeInItem={fadeInItem}
      />

      {/* ABOUT */}
      <AboutSection
        sectionVariants={sectionVariants}
        fadeInItem={fadeInItem}
      />

      {/* SKILLS */}
      <SkillsSection
        sectionVariants={sectionVariants}
        staggerChildren={staggerChildren}
        fadeInItem={fadeInItem}
        StarRating={StarRating}
      />

      {/* ZIP GAME (SEPARATE FEATURE) */}
      <motion.section className="section" variants={sectionVariants}>
        <button
          className="btn secondary"
          onClick={() => setShowZip(!showZip)}
        >
          {showZip ? "Close Zip Game" : "Play Zip Game"}
        </button>

        {showZip && <ZipGame />}
      </motion.section>

      {/* PROJECTS */}
      <ProjectsSection
        sectionVariants={sectionVariants}
        staggerChildren={staggerChildren}
        fadeInItem={fadeInItem}
      />

      {/* ACHIEVEMENTS */}
      <AchievementsSection
        sectionVariants={sectionVariants}
        fadeInItem={fadeInItem}
      />

      {/* CONTACT */}
      <ContactSection
        sectionVariants={sectionVariants}
        fadeInItem={fadeInItem}
        form={form}
        sendEmail={sendEmail}
      />

      {/* FOOTER */}
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
