
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import {
  FaMobileAlt,
  FaServer,
  FaBitcoin,
  FaBrain,
  FaGamepad,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaApple,
  FaGooglePlay,
} from 'react-icons/fa'

import balancerImg from '../assets/balancer.png'
import goshuinImg from '../assets/goshu.png'
import gsapImg from '../assets/gsap.png'
import aiHealthcareImg from '../assets/healthcare.png'
import hosicoImg from '../assets/hosico.png'
import nexusmdImg from '../assets/nexusmd.png'
import quickaiImg from '../assets/quickai.png'
import shopifyImg from '../assets/shopify.png'
import sophiaverseImg from '../assets/sophiaverse.png'
import spokenImg from '../assets/spoken.png'
import suitheticImg from '../assets/Suithetic.png'
import teddiesImg from '../assets/teddies.png'
import veenoxImg from '../assets/veenox.png'
import zenImg from '../assets/zen.png'
import shopping from '../assets/Shopping.jpeg'
import rag from '../assets/Rag.jpeg'
import voting from '../assets/voting.jpeg'
import lost from '../assets/lost.jpeg'
import pockemon from '../assets/pockemon.jpeg'

import './Projects.css'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const categories = [
    { name: 'All', icon: <FaCode /> },
    { name: 'Fullstack', icon: <FaServer /> },
    { name: 'AI/ML', icon: <FaBrain /> },
  ]

  // Only images confirmed in your src/assets screenshot are imported.
  // For projects without their own screenshot, an available image is reused.

  const projects = [
    {
      title: 'Online Shopping Mall',
      subtitle: 'Shopify E-commerce Platform',
      description:
        'Modern e-commerce platform for Nothing tech products featuring innovative design, seamless shopping experience, product showcases, and integrated payment systems.',
      technologies: [
        'Shopify',
        'JavaScript',
        'React',
        'CSS3',
        'Shopify API',
      ],
      categories: ['Fullstack'],
      image: shopping,
      liveLink: 'https://e-commerce-web-shopping.netlify.app/',
      githubLink: 'https://github.com/Altaf-mahat/E-Commerce_website/tree/main'
    },
    {
      title: 'Online Voting System',
      subtitle: 'Voting System',
      description:
        'A secure voting web app with user login, real-time vote counting, and admin dashboard.',
      technologies: ['HTML','CSS','JavaScript','PHP','MySQL'],
      categories: ['Fullstack'],
      image: voting,
      githubLink: 'https://github.com/Altaf-mahat/Voting_Website/tree/main',
    },
    {
      title: 'AI-Powered Lost Person Detection System',
      subtitle: '',
      description:
        'A facial recognition system using machine learning to identify and persons.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Python',
        'Machine Learning',
        'MySQL',
      ],
      categories: ['AI/ML'],
      image: lost,
      
    },
    {
      title: 'RAG Chat Website',
      subtitle: 'Document Chat bot',
      description:
         'AI-powered document chatbot that allows users to upload documents and ask questions to get accurate, context-aware answers using RAG, text chunking, embeddings, vector database retrieval, and Mistral AI.',
      technologies: [
        'Chunk',
        'Embedding',
        'VectorDB',
        'Retriver',
        'Mistral AI',
        'Python'
        
      ],
      categories: ['AI/ML'],
      image: rag,
      githubLink: 'https://github.com/Altaf-mahat/RAG-Chat_Webpage/tree/main',
    },
    {
      title: 'AI chat-Bot',
      subtitle: 'Chat Gpt Bot',
      description:
        'AI-powered chatbot built with Python and LangChain, integrating OpenAI, Mistral AI, and Hugging Face models to deliver intelligent conversations, context-aware responses, and semantic search using embeddings and vector databases.',
      technologies: [
        'LangChain',
        'Python',
        'OpenAI',
        'Embeddings',
        'VectorDB',
        
      ],
      categories: ['AI/ML'],
      image: veenoxImg,
      githubLink: 'https://github.com/Altaf-mahat/AI_Chatbot/tree/main',
    },
    {
      title: 'Restaurant-Menu Organizer',
      subtitle: 'Menu Card',
      description:
        'Interactive restaurant menu website that showcases food items, categories, prices, and detailed menu information with a clean, responsive design, making it easy for customers to explore dishes and discover their favorite meals.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript'
      ],
      categories: ['Fullstack'],
      image: gsapImg,
      githubLink: 'https://github.com/Altaf-mahat/Restaurant-Menu-Organizer/tree/main',
    },
    {
      title: 'Pockemon',
      subtitle: 'Pockemon Data using API',
      description:
       'Interactive Pokémon web application built with React that fetches Pokémon data from an API and displays character details in a user-friendly interface, allowing users to explore Pokémon information with a responsive design.',
      technologies: [
        'React',
        'HTML',
        'CSS',
        'API',
      ],
      categories: ['Fullstack'],
      image: pockemon,
      liveLink: 'https://apipokemona.netlify.app/',
      githubLink: 'https://github.com/Altaf-mahat/Pokemon-API-Fetch-/tree/main',
    },
    {
      title: 'Student Performance- Prediction',
      subtitle: 'Student Performance using Deep learning',
      description:
        'Deep learning-based student performance prediction system that analyzes academic data to predict student outcomes using ANN and CNN models. Built with TensorFlow, Pandas, and Matplotlib for data preprocessing, model training, performance evaluation, and visualization.',
      technologies: [
        'Deep Learning',
        'Machin Learning',
        'ANN-CNN',
        'Pandas',
        'Mathpotlib',
        'Tensrflow',
      ],
      categories: ['AI/ML'],
      image: balancerImg,
      githubLink: 'https://github.com/Altaf-mahat/Student_Performance_DL/tree/main',
    },
    {
      title: 'QuickAI',
      subtitle: 'AI SaaS Platform',
      description:
        'AI-powered SaaS platform offering content generation, image creation, code assistance, and data analysis tools.',
      technologies: [
        'React',
        'FastAPI',
        'Python',
        'OpenAI',
        'PostgreSQL',
        'Redis',
      ],
      categories: ['AI/ML'],
      image: quickaiImg,
      liveLink: 'https://quick-ai-gray-eight.vercel.app/',
    }
    
  ]

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (project) =>
            Array.isArray(project.categories) &&
            project.categories.includes(activeCategory)
        )

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="project-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              type="button"
              className={`category-btn ${
                activeCategory === category.name ? 'active' : ''
              }`}
              onClick={() => {
                setActiveCategory(category.name)
                setShowAll(false)
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: (index % 6) * 0.07 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="project-image"
                    loading="lazy"
                  />
                </div>

                <div className="project-content">
                  <div className="project-header-row">
                    <h3 className="project-title-new">{project.title}</h3>

                    <div className="project-action-links">
                      {project.githubLink ? (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-link-icon"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="View on GitHub"
                          aria-label={`${project.title} GitHub repository`}
                        >
                          <FaGithub />
                        </motion.a>
                      ) : (
                        <span
                          className="action-link-icon disabled"
                          title="Repository link unavailable"
                          aria-label="Repository link unavailable"
                        >
                          <FaGithub />
                        </span>
                      )}

                      {(project.websiteLink || project.liveLink) && (
                        <motion.a
                          href={project.websiteLink || project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-link-icon"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Open Website"
                          aria-label={`${project.title} website`}
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}

                      {project.appStoreLink && (
                        <motion.a
                          href={project.appStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-link-icon"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="App Store"
                          aria-label={`${project.title} App Store`}
                        >
                          <FaApple />
                        </motion.a>
                      )}

                      {project.playStoreLink && (
                        <motion.a
                          href={project.playStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-link-icon"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Google Play"
                          aria-label={`${project.title} Google Play`}
                        >
                          <FaGooglePlay />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="project-subtitle">{project.subtitle}</div>

                  <p className="project-description-new">
                    {project.description}
                  </p>

                  <div className="project-tech-pills">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length > 6 && (
          <motion.div
            className="view-more-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              type="button"
              className="btn-view-more-projects"
              onClick={() => setShowAll((previous) => !previous)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll
                ? 'Show Less'
                : `View More Projects (${filteredProjects.length - 6} more)`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
