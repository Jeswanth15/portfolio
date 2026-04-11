import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

import SplashScreen from "./SplashScreen";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import AchievementsSection from "./sections/AchievementsSection";
import ContactSection from "./sections/ContactSection";

function App() {
  const form = useRef();
  const [showSplash, setShowSplash] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_1518", "template_smlri6t", form.current, "kEf77EIxG2QAN72i9")
      .then(
        () => { alert("Message sent!"); form.current.reset(); },
        (err) => alert("Failed: " + err.text)
      );
  };

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <SplashScreen key="splash" onFinish={() => setShowSplash(false)} />
      ) : (
        <motion.div
          key="app"
          className="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* ── Floating Pill Navbar ── */}
          <motion.header
            className="navbar"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 70, damping: 18, delay: 0.2 }}
          >
            <div className="logo">Jeswanth A</div>
            <nav className="nav-links">
              {["about", "skills", "projects", "achievements", "contact"].map((s) => (
                <a key={s} href={`#${s}`}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </a>
              ))}
            </nav>
          </motion.header>

          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection form={form} sendEmail={sendEmail} />

          <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            © {new Date().getFullYear()} Jeswanth A · Built with React & Framer Motion
          </motion.footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
