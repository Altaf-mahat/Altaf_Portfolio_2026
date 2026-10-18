
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiRedux,
  SiGraphql,
  SiTailwindcss,
  SiSass,
  SiVuedotjs,
  SiDocker,
  SiGit,
  SiExpo,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGithub,
  SiPostman,
  SiFigma,
  SiJest,
  SiWebpack,
  SiVite,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMysql,
  SiRedis,
  SiBootstrap,
  SiAdobexd,
  SiSketch,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiStorybook,
  SiCypress,
  SiSelenium,
  SiMocha,
  SiAngular,
  SiSvelte,
  SiFlutter,
  SiKotlin,
  SiIonic,
  SiSwift,
  SiLaravel,
  SiNestjs,
  SiDotnet,
  SiOracle,
  SiAmazon,
  SiGoogle,
  SiKubernetes,
  SiJenkins,
  SiGitlab,
  SiPytorch,
  SiOpenai,
} from 'react-icons/si'

import {
  FaDatabase,
  FaCode,
  FaPalette,
  FaCog,
  FaComments,
  FaLightbulb,
  FaCrown,
  FaRocket,
  FaUsers,
  FaHeart,
  FaBrain,
} from 'react-icons/fa'

import './Skills.css'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Technical')

  const tabs = [
    { name: 'Technical', icon: <FaCode /> },
    { name: 'Soft Skills', icon: <FaUsers /> },
    { name: 'Tools', icon: <FaCog /> },
  ]

  const technicalSkillsTop = [
    {
      title: 'AI/ML',
      icon: <FaBrain />,
      skills: [
        { name: 'OpenAI', icon: <SiOpenai /> },
        { name: 'Generative AI', icon: <SiOpenai /> },
        { name: 'AI Agent', icon: <SiOpenai /> },
        { name: 'PyTorch', icon: <SiPytorch /> },
        { name: 'LLM', icon: <FaBrain /> },
        { name: 'RAG', icon: <FaBrain /> },
        { name: 'LangChain', icon: <FaBrain /> },
        { name: 'ANN-CNN', icon: <FaBrain /> },
        { name: 'Machine Learning', icon: <FaBrain /> },
        { name: 'Deep Learning', icon: <FaBrain /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'TensorFlow', icon: <FaBrain /> },
      ],
    },
    {
      title: 'Frontend',
      icon: <FaCode />,
      skills: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss3 /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      ],
    },
    {
      title: 'Libraries',
      icon: <FaCode />,
      skills: [
        { name: 'Pandas', icon: <FaCode /> },
        { name: 'React.js', icon: <SiReact /> },
        { name: 'NumPy', icon: <FaCode /> },
        { name: 'Matplotlib', icon: <FaCode /> },
      ],
    },
  ]

  const technicalSkillsBottom = [
    {
      title: 'Database & Cloud',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Oracle', icon: <SiOracle /> },
        { name: 'Firebase', icon: <SiFirebase /> },
      ],
    },
  ]

  const softSkills = [
    {
      title: 'Communication',
      icon: <FaComments />,
      description:
        'Effective verbal and written communication with stakeholders, team members, and clients.',
    },
    {
      title: 'Problem Solving',
      icon: <FaLightbulb />,
      description:
        'Analytical thinking and creative problem-solving abilities to tackle complex technical challenges.',
    },
    {
      title: 'Leadership',
      icon: <FaCrown />,
      description:
        'Experience leading teams, mentoring junior developers, and driving project success.',
    },
    {
      title: 'Adaptability',
      icon: <FaRocket />,
      description:
        'Quick learner with ability to adapt to new technologies and changing project requirements.',
    },
    {
      title: 'Team Collaboration',
      icon: <FaUsers />,
      description:
        'Strong team player with experience in agile methodologies and cross-functional collaboration.',
    },
    {
      title: 'Attention to Detail',
      icon: <FaHeart />,
      description:
        'Meticulous approach to code quality, testing, and delivering polished user experiences.',
    },
  ]

  const tools = [
    {
      title: 'Development Tools',
      icon: <FaCode />,
      tools: [
        { name: 'VS Code', icon: <FaCode /> },
        { name: 'Git', icon: <SiGit /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'Vite', icon: <SiVite /> },
        { name: 'npm', icon: <FaCode /> },
        { name: 'Docker', icon: <SiDocker /> },
      ],
    },
    {
      title: 'Design Tools',
      icon: <FaPalette />,
      tools: [
        { name: 'Figma', icon: <SiFigma /> },
        { name: 'Adobe XD', icon: <SiAdobexd /> },
        { name: 'Sketch', icon: <SiSketch /> },
        { name: 'Photoshop', icon: <SiAdobephotoshop /> },
        { name: 'Storybook', icon: <SiStorybook /> },
      ],
    },
  ]

  const renderSkillCategories = (categories, itemKey = 'skills') =>
    categories.map((category, index) => (
      <motion.div
        key={category.title}
        className="skill-category-card"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
      >
        <div className="category-header">
          <div className="category-icon-circle">{category.icon}</div>
          <h3 className="category-title-tech">{category.title}</h3>
        </div>

        <div className="skills-list-tech">
          {category[itemKey].map((item) => (
            <div key={item.name} className="skill-badge-with-icon">
              <span className="skill-icon-small">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    ))

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills &amp; Expertise
        </motion.h2>

        <motion.p
          className="skills-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technical competencies and professional skills I&apos;ve developed
          through experience and continuous learning
        </motion.p>

        {/* Skill Tabs */}
        <motion.div
          className="skill-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.name}
              type="button"
              className={`skill-tab ${
                activeTab === tab.name ? 'active' : ''
              }`}
              onClick={() => setActiveTab(tab.name)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'Technical' && (
            <motion.div
              key="technical"
              className="skills-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="technical-grid-3">
                {renderSkillCategories(technicalSkillsTop)}
              </div>

              <div className="technical-grid-2">
                {renderSkillCategories(technicalSkillsBottom)}
              </div>
            </motion.div>
          )}

          {activeTab === 'Soft Skills' && (
            <motion.div
              key="soft-skills"
              className="skills-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    className="soft-skill-card-compact"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -5, scale: 1.015 }}
                  >
                    <div className="soft-skill-icon-compact">
                      {skill.icon}
                    </div>
                    <h3 className="soft-skill-title-compact">
                      {skill.title}
                    </h3>
                    <p className="soft-skill-description-compact">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'Tools' && (
            <motion.div
              key="tools"
              className="skills-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="technical-grid-3">
                {renderSkillCategories(tools, 'tools')}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills
