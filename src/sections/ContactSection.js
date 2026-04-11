import { motion } from "framer-motion";

const spring = { type: "spring", stiffness: 60, damping: 16 };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: spring } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const LINKS = [
  { icon: "ri-mail-line",        label: "Email",         value: "jeswanth1504@gmail.com",                 href: "mailto:jeswanth1504@gmail.com" },
  { icon: "ri-phone-line",       label: "Phone",         value: "+91 96005 48904",                        href: "tel:+919600548904" },
  { icon: "ri-github-line",      label: "GitHub",        value: "github.com/Jeswanth15",                  href: "https://github.com/Jeswanth15" },
  { icon: "ri-linkedin-fill",    label: "LinkedIn",      value: "jeswanth-a-74b911290",                   href: "https://www.linkedin.com/in/jeswanth-a-74b911290" },
];

export default function ContactSection({ form, sendEmail }) {
  return (
    <motion.section
      id="contact" className="section"
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
      variants={stagger}
    >
      <motion.div variants={fadeUp}>
        <div className="section-label">Say Hi</div>
        <h2 className="section-title">
          Let's <span className="grad">Connect</span>
        </h2>
      </motion.div>

      <div className="contact-grid">
        <motion.div variants={fadeUp}>
          <p className="contact-intro">
            I'm actively seeking software engineering opportunities where I can contribute
            to real-world systems and grow alongside a strong engineering team. Whether you
            have a role, a project idea, or just want to talk tech — I'd love to hear from you.
          </p>

          <div className="contact-links">
            {LINKS.map((l) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="contact-link-item"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="contact-link-icon">
                  <i className={l.icon} />
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {l.label}
                  </div>
                  <div style={{ fontSize: "0.92rem", color: "var(--text-2)", marginTop: "0.1rem" }}>{l.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div className="contact-form-wrap" variants={fadeUp}>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" name="user_name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="user_email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="What's on your mind..." required />
            </div>
            <button type="submit" className="submit-btn">
              Send Message <i className="ri-send-plane-fill" />
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
