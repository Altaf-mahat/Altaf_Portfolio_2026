import { motion } from 'framer-motion'
import {
  SiReact,
  SiAndroid,
  SiNodedotjs,
  SiEthereum,
  SiOpenai,
  SiGraphql,
} from 'react-icons/si'
import {
  FaMobileAlt,
  FaCode,
  FaServer,
  FaBrain,
  FaRobot,
  FaDatabase,
  FaArrowRight,
  FaLayerGroup,
} from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <SiReact />,
      title: 'React Development',
      number: '01',
      color: 'react',
      description:
        'Building modern, responsive web applications with React, Next.js, TypeScript, and state management solutions for scalable enterprise systems.',
      technologies: ['React', 'Next.js', 'TypeScript'],
    },
    {
      icon: <SiOpenai />,
      title: 'AIML Integration',
      number: '02',
      color: 'ai',
      description:
        'Integrating OpenAI GPT, machine learning models, and intelligent automation solutions into modern web and mobile applications.',
      technologies: ['OpenAI', 'Machine Learning', 'AI Agents'],
    },
    {
      icon: <SiNodedotjs />,
      title: 'Backend Development',
      number: '03',
      color: 'frontend',
      description:
        'End-to-end solutions combining React frontend with Node.js backend, RESTful/GraphQL APIs, and database integration.',
      technologies: ['JavaScript', 'Express.js', 'MySQL'],
    },
  ]

  return (
    <section id="services" className="services">
      {/* Background effects */}
      <div className="services-background-glow services-glow-one" />
      <div className="services-background-glow services-glow-two" />
      <div className="services-grid-pattern" />

      <div className="container services-container">
        {/* Section heading */}
        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
         
          <h2 className="section-title services-main-title">
            What I <span>Build</span>
          </h2>

         
        </motion.div>

        {/* Services cards */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className={`service-card-professional service-${service.color}`}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -9 }}
            >
              {/* Animated top border */}
              <div className="service-card-top-line" />

              <div className="service-card-top">
                <span className="service-number">{service.number}</span>

                <span className="service-mini-label">
                  <span className="service-status-dot" />
                  SPECIALIZATION
                </span>
              </div>

              {/* Icon */}
              <motion.div
                className="service-icon-professional"
                whileHover={{ rotate: 5, scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                <span className="service-icon-orbit" />
                <span className="service-icon-inner">{service.icon}</span>
              </motion.div>

              {/* Service details */}
              <h3 className="service-title-professional">
                {service.title}
              </h3>

              <p className="service-description-professional">
                {service.description}
              </p>

              {/* Technology tags */}
              <div className="service-tech-list">
                {service.technologies.map((technology) => (
                  <span className="service-tech-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              {/* Bottom accent */}
              
            </motion.article>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          className="services-bottom-note"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
         
        </motion.div>
      </div>
    </section>
  )
}

export default Services