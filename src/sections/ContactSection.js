import { motion } from "framer-motion";

export default function ContactSection({
  sectionVariants,
  fadeInItem,
  form,
  sendEmail
}) {
  return (
    <motion.section id="contact" className="section" variants={sectionVariants}>
      <h2 className="section-title">Contact</h2>

      <div className="section-content two-col">
        <motion.div variants={fadeInItem}>
          <p>
            I am looking for opportunities where I can apply my programming
            skills to real projects. Feel free to reach out!
          </p>

          <div className="contact-cards icon-only-grid">
            <a href="mailto:jeswanth1504@gmail.com" className="contact-icon-card">
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
  );
}
