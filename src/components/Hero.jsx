
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'
import developerImage from './Devloper image.jpeg'

import {
  FaCalendar,
  FaMobileAlt,
  FaTasks,
} from 'react-icons/fa'

import {
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiTelegram,
  SiReact,
} 
from 'react-icons/si'
import './Hero.css'
const profileImage = '/images/profile.jpg'

const roles = [
  'AIML Engineer',
  'Frontend Engineer',
  'React Developer',
]

const quickStats = [
  { icon: <FaCalendar />, value: 'FRESHER', label: 'Experience' },
  { icon: <SiReact />, value: '6+', label: 'Projects' },
  { icon: <FaMobileAlt />, value: '3+', label: 'AI Models' },
  { icon: <FaTasks />, value: '5+', label: 'Machine Learning' },
]

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:altafmahat5643@gmail.com',
    icon: <SiGmail />,
  },

  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/altaf-mahat-560706296',
    icon: <SiLinkedin />,
  },

  {
    name: 'GitHub',
    href: 'https://github.com/Altaf-mahat',
    icon: <SiGithub />,
  },

  {
    name: 'Instagram',
    href: 'https://www.instagram.com/altaf_9_?vrfl=dXFtYm9qeTV1b2Ex',
    icon: <FaInstagram />,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <section id="home" className="hero">
      {/* Animated background */}
      <div className="hero-grid-bg" />
      <motion.div
        className="hero-glow hero-glow-one"
        animate={{
          x: [0, 35, -15, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.12, 0.95, 1],
        }}

        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="hero-glow hero-glow-two"
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.9, 1.1, 1],
        }}

        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="hero-container">
        <div className="hero-layout">
          {/* Profile image animations */}
          <motion.div
            className="hero-profile"
            initial={{
              opacity: 0,
              x: -70,
              scale: 0.75,
              rotate: -8,
            }}

            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              rotate: 0,
            }}

            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: 0.15,
            }}
          >

            <motion.div
              className="profile-orbit profile-orbit-one"
              animate={{ rotate: 360 }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <motion.div
              className="profile-orbit profile-orbit-two"
              animate={{ rotate: -360 }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <motion.div
              className="profile-image-shell"
              animate={{
                y: [0, -10, 0],
              }}

              whileHover={{
                scale: 1.045,
                rotate: 2,
              }}

              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                scale: {
                  duration: 0.3,
                },
                rotate: {
                  duration: 0.3,
                },
              }}
            >

              <div className="profile-image-inner">
                <img
                  src={developerImage}
                  alt="Altaf Mahat"
                  className="profile-image"
                />
              </div>
            </motion.div>

            {/* Animated availability badge */}
            <motion.div
              className="profile-status"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.06 }}
            >
              <motion.span
                className="status-dot"
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [1, 0.6, 1],
                }}

                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
              Open to Work
            </motion.div>
            {/* Floating code badge */}
            <motion.div
              className="profile-decoration decoration-top"
              animate={{
                y: [0, -9, 0],
                rotate: [8, 15, 8],
              }}

              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >

              {'</>'}
            </motion.div>
            <motion.div
              className="profile-decoration decoration-bottom"
              animate={{
                y: [0, 8, 0],
                rotate: [-8, -15, -8],
              }}

              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >

              AI ✦

            </motion.div>
          </motion.div>
          {/* Animated introduction */}
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            <motion.div
              className="hero-eyebrow"
              variants={fadeUpVariants}
            >
              <span className="eyebrow-line" />
              HELLO, IM
              <span className="eyebrow-sparkle">✦</span>
            </motion.div>

            <motion.h1
              className="hero-name"
              variants={fadeUpVariants}
            >

              <span className="name-first">Altaf</span>
              <motion.span
                className="name-gradient"
                initial={{
                  opacity: 0,
                  y: 35,
                  filter: 'blur(10px)',
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                }}

                transition={{
                  duration: 0.9,
                  delay: 0.5,
                }}
              >
                Mahat
              </motion.span>
            </motion.h1>

            <motion.div
              className="hero-role-line"
              variants={fadeUpVariants}
            >

              <span className="role-prefix">Im a</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[currentRole]}
                  className="hero-role"
                  initial={{
                    opacity: 0,
                    y: 18,
                    filter: 'blur(5px)',
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                  }}

                  exit={{
                    opacity: 0,
                    y: -18,
                    filter: 'blur(5px)',
                  }}
                  transition={{ duration: 0.35 }}
                >

                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
            <motion.h2
              className="hero-title-sub"
              variants={fadeUpVariants}
            >
              Building Scalable Web &amp; AI Applications
            </motion.h2>

            <motion.p
              className="hero-description"
              variants={fadeUpVariants}
            >
              Passionate about AI/ML development, React and Next.js.
              I build modern web experiences and intelligent applications
              that solve real-world problems.
            </motion.p>
            {/* Animated social icons */}

            <motion.div
              className="hero-contacts"
              variants={fadeUpVariants}
              aria-label="Social and contact links"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  title={social.name}
                  target={
                    social.name === 'Email' ? undefined : '_blank'
                  }
                  rel={
                    social.name === 'Email'
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="contact-link-hero"
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.7,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}

                  transition={{
                    delay: 0.65 + index * 0.12,
                    duration: 0.45,
                  }}

                  whileHover={{
                    y: -7,
                    scale: 1.12,
                    rotate: 5,
                  }}

                  whileTap={{
                    scale: 0.9,
                  }}
                >

                  {social.icon}
                </motion.a>
              ))}

            </motion.div>
            {/* Animated action buttons */}
            <motion.div
              className="hero-buttons"
              variants={fadeUpVariants}
            >

              
           
<motion.button
  type="button"
  className="btn btn-primary"
  onClick={() => {
    window.open(
      '/Devloper_resume.jpeg',
      '_blank',
      'noopener,noreferrer'
    )
  }}
  whileHover={{
    y: -4,
    scale: 1.035,
  }}
  whileTap={{ scale: 0.96 }}
>
  Resume
  <motion.span
    className="button-arrow"
    animate={{ x: [0, 4, 0] }}
    transition={{
      duration: 1.3,
      repeat: Infinity,
    }}
  >
    ↗
  </motion.span>
</motion.button>



              <motion.button
                type="button"
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
                whileHover={{
                  y: -4,
                  scale: 1.035,
                }}

                whileTap={{ scale: 0.96 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated statistics */}
        <motion.div
          className="quick-stats-section"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
        >

          <motion.div
            className="stats-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <span className="stats-heading-line" />
            <span>MY JOURNEY AT A GLANCE</span>
            <span className="stats-heading-line" />
          </motion.div>

          <motion.div
            className="quick-stats-horizontal"
            variants={containerVariants}
            initial="hidden"
            animate="visible"

          >

            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="quick-stat-pill"
                variants={fadeUpVariants}
                transition={{
                  duration: 0.6,
                  delay: 1.1 + index * 0.12,
                }}

                whileHover={{
                  y: -7,
                  scale: 1.025,
                }}
              >

                <motion.span
                  className="stat-icon-pill"
                  whileHover={{
                    rotate: 12,
                    scale: 1.12,
                  }}
                >

                  {stat.icon}
                </motion.span>
                <div className="stat-content-pill">
                  <span className="stat-value-pill">
                    {stat.value}
                  </span>

                  <span className="stat-label-pill">
                    {stat.label}
                  </span>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
export default Hero
