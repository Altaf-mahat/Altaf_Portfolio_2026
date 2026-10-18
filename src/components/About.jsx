import { motion } from 'framer-motion'

import {
  SiReact,
  SiNodedotjs,
  SiVuedotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiGraphql,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiAngular,
} from 'react-icons/si'
import {
  FaHospital,
  FaMoneyBillWave,
  FaShoppingCart,
  FaShieldAlt,
  FaBitcoin,
  FaRobot,
} from 'react-icons/fa'
import './About.css'

const About = () => {
  // Floating icons are decorative; each icon has its own position and timing.
  const techIcons = [
    { icon: <SiReact />, position: { top: '8%', left: '7%' }, delay: 0 },
    { icon: <SiPython />, position: { top: '18%', left: '24%' }, delay: 1 },
    { icon: <SiJavascript />, position: { top: '9%', right: '22%' }, delay: 2 },
    { icon: <SiTypescript />, position: { top: '17%', right: '7%' }, delay: 3 },
    { icon: <SiNodedotjs />, position: { top: '38%', left: '4%' }, delay: 4 },
    { icon: <SiNextdotjs />, position: { top: '43%', right: '5%' }, delay: 5 },
    { icon: <SiTailwindcss />, position: { bottom: '24%', left: '8%' }, delay: 6 },
    { icon: <SiMongodb />, position: { bottom: '17%', right: '9%' }, delay: 7 },
    { icon: <SiRedux />, position: { bottom: '8%', left: '25%' }, delay: 8 },
    { icon: <SiDocker />, position: { bottom: '8%', right: '25%' }, delay: 9 },
    { icon: <SiVuedotjs />, position: { top: '61%', left: '17%' }, delay: 10 },
    { icon: <SiGraphql />, position: { top: '63%', right: '17%' }, delay: 11 },
    { icon: <SiFirebase />, position: { top: '30%', left: '15%' }, delay: 12 },
    { icon: <SiPostgresql />, position: { top: '30%', right: '15%' }, delay: 13 },
    { icon: <SiAngular />, position: { bottom: '35%', left: '3%' }, delay: 14 },
    { icon: <FaRobot />, position: { bottom: '34%', right: '3%' }, delay: 15 },
    { icon: <FaHospital />, position: { top: '5%', left: '43%' }, delay: 16 },
    { icon: <FaMoneyBillWave />, position: { bottom: '5%', left: '43%' }, delay: 17 },
    { icon: <FaShoppingCart />, position: { top: '48%', left: '11%' }, delay: 18 },
    { icon: <FaShieldAlt />, position: { top: '49%', right: '11%' }, delay: 19 },
    { icon: <FaBitcoin />, position: { bottom: '48%', left: '22%' }, delay: 20 },
  ]

  const paragraphMotion = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.65, ease: 'easeOut' },
  }

  return (
    <section id="about" className="about">
      {/* Animated background grid and soft glows */}
      <div className="about-grid-bg" aria-hidden="true" />
      <motion.div
        className="about-orb about-orb-one"
        aria-hidden="true"
        animate={{ x: [0, 28, 0], y: [0, -22, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="about-orb about-orb-two"
        aria-hidden="true"
        animate={{ x: [0, -24, 0], y: [0, 25, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Tech Icons - Full Width */}
      <div className="floating-icons" aria-hidden="true">
        {techIcons.map((item, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            style={item.position}
            initial={{ opacity: 0, scale: 0.5, rotate: -18 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: item.delay * 0.04 },
              scale: { duration: 0.6, delay: item.delay * 0.04 },
              y: { duration: 4 + (index % 3), repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 5 + (index % 4), repeat: Infinity, ease: 'easeInOut' },
            }}
            whileHover={{ scale: 1.18, y: -5 }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container about-container">
        <motion.div
          className="about-heading-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="about-eyebrow"><span className="about-eyebrow-dot" /> GET TO KNOW ME</span>
          <h2 className="section-title">
            About <span className="title-highlight">Me</span>
          </h2>
          <motion.div
            className="about-title-line"
            initial={{ width: 0 }}
            whileInView={{ width: '92px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
        </motion.div>

        <motion.div
          className="about-wrapper"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="about-card-glow" aria-hidden="true" />
          <div className="about-content">
            <motion.p {...paragraphMotion} transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}>
              I am a <strong>Computer Science Engineer</strong> with a strong interest in building practical software solutions and exploring emerging technologies.
            </motion.p>
            <motion.p {...paragraphMotion} transition={{ duration: 0.65, delay: 0.3, ease: 'easeOut' }}>
              I am an <strong>AI/ML &amp; GenAI Developer</strong> passionate about building intelligent applications using <strong>LLMs</strong>, <strong>RAG</strong>, and <strong>LangChain</strong>. I have skills in <strong>Python</strong>, <strong>Neural Networks</strong>, <strong>Machine Learning</strong>, <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>SQL</strong>. I am continuously learning, building AI-driven solutions, and exploring emerging technologies to solve real-world problems.
            </motion.p>
            <motion.p {...paragraphMotion} transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}>
              Although I do not have formal job experience yet, I have successfully completed <strong>one internship</strong>, where I gained valuable exposure to professional development practices and continued strengthening my technical skills.
            </motion.p>
             </div>
          <div className="about-card-footer">
            <span className="about-footer-dot" /> Always learning. Always building.
            <span className="about-footer-line" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About