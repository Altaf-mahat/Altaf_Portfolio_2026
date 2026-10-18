
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaPaperPlane
} from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Form submitted:', formData)

    alert('Thank you for your message! I will get back to you soon.')

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-background-glow contact-glow-one"></div>
      <div className="contact-background-glow contact-glow-two"></div>
      <div className="contact-grid-overlay"></div>

      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="contact-eyebrow">
            <span className="contact-status-dot"></span>
            LETS CONNECT
          </span>

          <h2 className="section-title contact-title-styled">
            Contact <span className="title-highlight">Me</span>
          </h2>

          <p className="contact-subtitle-main">
            Have an idea, a project, or an opportunity?
            Lets turn your vision into something extraordinary.
            Send me a message and lets i am open to work.
          </p>
        </motion.div>

        <div className="contact-layout">
          <motion.div
            className="contact-info-panel"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="contact-info-top">
              <span className="contact-small-label">GET IN TOUCH</span>

              <h3>
                Let make
                <br />
                <span>something great.</span>
              </h3>

              <p>
                I am always open to discussing new projects, creative ideas,
                and opportunities to grow. My inbox is always open!
              </p>
            </div>

            <a
              href="mailto:altafmahat5643.com"
              className="contact-email-card"
            >
              <span className="contact-icon-box">
                <FaEnvelope />
              </span>

              <span className="contact-email-text">
                <small>EMAIL ME AT</small>
                <strong>altafmahat5643@gmail.com</strong>
              </span>

              <span className="contact-arrow">↗</span>
            </a>

            <div className="contact-availability">
              <span className="contact-status-dot"></span>
              Available for new opportunities
            </div>

            <div className="contact-info-divider"></div>

            <p className="contact-social-heading">FIND ME ONLINE</p>

            <div className="contact-social-links">
              <a
                href="https://www.linkedin.com/in/altaf-mahat-560706296"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/Altaf-mahat"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:altafmahat5643@gmail.com"
                className="contact-social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://www.instagram.com/altaf_9_?vrfl=dXFtYm9qeTV1b2Ex"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="contact-form-heading">
              <div>
                <span className="contact-small-label">YOUR NEXT STEP</span>
                <h3 className="form-card-title">Send a Message</h3>
              </div>

              <div className="contact-form-icon">
                <FaPaperPlane />
              </div>
            </div>

            <p className="contact-form-description">
              Fill in the details below. I ll be happy to hear from you.
            </p>

            <form
              className="contact-form-modern"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group-contact">
                  <label htmlFor="name">YOUR NAME</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-group-contact">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="form-group-contact">
                <label htmlFor="subject">SUBJECT</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group-contact">
                <label htmlFor="message">YOUR MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your idea or project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn-send-message-new"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </motion.button>

              <p className="contact-form-note">
                <span>✦</span> Usually happy to connect and discuss new ideas.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Luukogod. All rights reserved.
          </p>

          <p className="footer-made">
            Designed with <span>♥</span> and creativity
          </p>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/altaf-mahat-560706296"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Altaf-mahat"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="altafmahat5643.com"
              className="footer-social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact
