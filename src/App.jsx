import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './App.css'

const navItems = ['ABOUT', 'EXPERTISE', 'SKILLS', 'PROJECTS', 'CERTIFICATIONS', 'CONTACT']

const expertise = [
  {
    index: '01',
    title: 'Cybersecurity',
    items: ['Threat Analysis', 'VAPT', 'Risk Assessment', 'Security Operations'],
  },
  {
    index: '02',
    title: 'Artificial Intelligence',
    items: ['AI-assisted Security', 'Anomaly Analysis', 'Risk Scoring', 'Security Intelligence'],
  },
  {
    index: '03',
    title: 'Blockchain',
    items: ['Blockchain Security', 'Wallet Intelligence', 'Validator Analysis', 'Smart Contract Concepts'],
  },
  {
    index: '04',
    title: 'Cloud & Web Security',
    items: ['Cloud Security', 'OWASP', 'Security Posture', 'Web Security'],
  },
]

const techGroups = [
  {
    category: 'Programming',
    tags: ['Python', 'C++', 'Java', 'C', 'DSA', 'DBMS', 'Bash'],
  },
  {
    category: 'Cybersecurity',
    tags: ['Network Security', 'Threat Analysis', 'VAPT', 'Security Analysis', 'Risk Assessment', 'Ethical Hacking'],
  },
  {
    category: 'Security Operations',
    tags: ['SIEM', 'SOC Fundamentals', 'Log Analysis', 'Threat Intelligence', 'Security Alert Triage'],
  },
  {
    category: 'Cloud & Web',
    tags: ['Cloud Security', 'Microsoft Azure', 'OWASP Fundamentals'],
  },
  {
    category: 'Blockchain',
    tags: ['Blockchain Fundamentals', 'Smart Contract Concepts', 'Decentralized Systems'],
  },
  {
    category: 'Tools',
    tags: ['Linux', 'Windows', 'GitHub', 'VS Code'],
  },
]

const projects = [
  {
    number: '01',
    name: 'CYBERSATHI',
    title: 'AI-Powered Blockchain Security & Threat Intelligence Platform',
    description: 'AI-driven blockchain security and threat intelligence platform focused on wallet intelligence, validator analysis, and operational risk monitoring.',
    features: ['Blockchain Security', 'Wallet Intelligence', 'Node Health', 'Risk Scoring'],
    stack: ['Python', 'Blockchain', 'Cybersecurity', 'AI/ML', 'JavaScript'],
  },
  {
    number: '02',
    name: 'TRINETRA AI',
    title: 'AI-Powered Campus Safety & Risk Intelligence Platform',
    description: 'Security-focused intelligence platform designed to assess risk patterns, detect anomalies, and improve campus safety through actionable insights.',
    features: ['Threat Detection', 'Anomaly Analysis', 'Risk Intelligence', 'Safety Monitoring'],
    stack: ['AI', 'Threat Analysis', 'Security Operations', 'Python'],
  },
  {
    number: '03',
    name: 'CYBERRAKSHAK',
    title: 'AI-Powered Security Operations & Threat Assessment Platform',
    description: 'Focused on threat assessment, security operations workflows, and AI-based analysis to strengthen digital defence and response readiness.',
    features: ['Security Operations', 'Threat Assessment', 'Incident Analysis', 'Log Intelligence'],
    stack: ['SIEM', 'Python', 'Threat Analysis', 'Security Operations', 'AI'],
  },
  {
    number: '04',
    name: 'CYBERTECH',
    title: 'AI-Driven Cloud Cyber Defence & Incident Response Platform',
    description: 'Cloud and web security framework for evaluating exposure, strengthening posture, and supporting incident response workflows.',
    features: ['Cloud Security', 'OWASP', 'Web Security', 'Risk Response'],
    stack: ['Azure', 'OWASP', 'Cloud Security', 'Web Security', 'AI'],
  },
]

const certifications = [
  'Cybersecurity Analyst Job Simulation — FORAGE',
  'Cyber Security Assessment Certification — LEARNTUBE.AI',
  'Microsoft Security, Compliance, and Identity Fundamentals',
  'Cybersecurity Fundamentals',
]

function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const intervals = [0, 35, 70, 100]
    let index = 0
    const timer = setInterval(() => {
      const next = intervals[index]
      if (next !== undefined) {
        setProgress(next)
      }
      index += 1
      if (index >= intervals.length) {
        window.clearInterval(timer)
      }
    }, 280)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="loading-screen" aria-live="polite">
      <div className="loading-panel">
        <p className="loading-kicker">INITIALIZING SYSTEM</p>
        <h2>AVINASH THAKUR</h2>
        <p className="loading-subtitle">CYBERSECURITY / AI</p>
        <div className="loading-percent">{progress}%</div>
        <div className="loading-bar">
          <span style={{ width: `${progress}%` }} />
        </div>
        <div className="loading-status">{progress >= 100 ? 'SYSTEM READY' : 'LOADING'}</div>
      </div>
    </div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1100)
    return () => window.clearTimeout(timer)
  }, [])

  const revealSection = {
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.16 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }

  return (
    <div className="portfolio-app">
      {isLoading && <LoadingScreen />}

      <header className="site-header">
        <div className="brand-mark">AT.</div>
        <nav className="site-nav" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <a className="resume-link" href={`${import.meta.env.BASE_URL}assets/Avinash-Thakur-Resume.pdf`} target="_blank" rel="noreferrer">
          RESUME
        </a>
      </header>

      <main>
        <section id="home" className="hero-shell">
          <div className="headline-row">
            <span>Resume gets you shortlisted.</span>
            <span>Portfolio gets you hired.</span>
            <span className="headline-emoji">💼</span>
          </div>

          <motion.div
            className="hero-window"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="hero-window-inner">
              <div className="hero-left-copy">
                <p className="eyebrow">HI, I&apos;M AVINASH THAKUR</p>
                <h1>
                  <span>CYBER</span>
                  <span>SECURITY</span>
                  <span>ENGINEER</span>
                </h1>
              </div>

              <div className="hero-video-wrap" aria-hidden="true">
                <video
                  src={`${import.meta.env.BASE_URL}assets/portfolio-video.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  tabIndex={-1}
                />
              </div>

              <div className="hero-right-copy">
                <span className="micro-copy">SECURE SYSTEMS</span>
                <a href="#projects">VIEW MY WORK →</a>
                <a href="#contact">CONTACT ME →</a>
              </div>
            </div>
          </motion.div>

          <div className="hero-footer-meta">
            <div className="meta-block">
              <span>Bengaluru, India</span>
              <span>B.Tech — Computer Science in Cyber Security</span>
              <span>2023 — 2027</span>
            </div>
            <div className="scroll-hint">SCROLL TO EXPLORE</div>
          </div>
        </section>

        <motion.section id="about" className="content-section about-section" {...revealSection}>
          <div className="section-label">ABOUT / 01</div>
          <div className="about-layout">
            <div className="about-intro">
              <h2>
                CYBERSECURITY.
                <br />
                AI.
                <br />
                SECURE SYSTEMS.
              </h2>
            </div>

            <div className="about-copy">
              <p>
                I am Avinash Thakur, a cybersecurity-focused technology student based in Bengaluru, India, currently pursuing B.Tech in Computer Science in Cyber Security at VTU | BKIT Bhalki. My work centres on security, AI, blockchain, threat intelligence, and practical security system design.
              </p>
              <p>
                I build projects and learning experiences focused on detection, risk assessment, blockchain security, and intelligent defence. My goal is to create systems that are resilient, adaptive, and security-aware in modern digital environments.
              </p>
            </div>
          </div>

          <div className="info-strip">
            <div>
              <span className="info-label">Location</span>
              <strong>Bengaluru, India</strong>
            </div>
            <div>
              <span className="info-label">Education</span>
              <strong>B.Tech — Computer Science in Cyber Security</strong>
            </div>
            <div>
              <span className="info-label">Graduation</span>
              <strong>2027</strong>
            </div>
            <div>
              <span className="info-label">CGPA</span>
              <strong>7.86</strong>
            </div>
            <div>
              <span className="info-label">Focus</span>
              <strong>Cybersecurity / AI / Blockchain</strong>
            </div>
          </div>
        </motion.section>

        <motion.section id="expertise" className="content-section expertise-section" {...revealSection}>
          <div className="section-label">EXPERTISE / 02</div>
          <h3 className="section-title">WHAT I WORK WITH</h3>
          <div className="expertise-grid">
            {expertise.map((item) => (
              <article key={item.title} className="expertise-panel">
                <span className="expertise-index">{item.index}</span>
                <h4>{item.title}</h4>
                <ul>
                  {item.items.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="skills" className="content-section skills-section" {...revealSection}>
          <div className="section-label">TECHNICAL STACK / 03</div>
          <h3 className="section-title">TECHNOLOGIES I WORK WITH</h3>
          <div className="tag-groups">
            {techGroups.map((group) => (
              <div key={group.category} className="tag-group">
                <span className="tag-category">{group.category}</span>
                <div className="tag-cluster">
                  {group.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" className="content-section projects-section" {...revealSection}>
          <div className="section-label">SELECTED PROJECTS / 04</div>
          <div className="projects-stack">
            {projects.map((project) => (
              <article key={project.name} className="project-panel">
                <div className="project-header">
                  <span className="project-number">{project.number}</span>
                  <span className="project-name">{project.name}</span>
                </div>
                <div className="project-body">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-features">
                    {project.features.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>
                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <a className="project-link" href="#contact">EXPLORE →</a>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="certifications" className="content-section certifications-section" {...revealSection}>
          <div className="section-label">CERTIFICATIONS / 05</div>
          <div className="certification-layout">
            <h3 className="section-title">CONTINUOUS LEARNING</h3>
            <ul className="certification-list">
              {certifications.map((cert, index) => (
                <li key={cert}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section id="contact" className="content-section contact-section" {...revealSection}>
          <div className="section-label">CONTACT / 06</div>
          <div className="contact-panel">
            <div>
              <p className="contact-eyebrow">AVAILABLE FOR SECURITY-DRIVEN PROJECTS</p>
              <h3>
                LET&apos;S BUILD
                <br />
                SOMETHING
                <br />
                SECURE.
              </h3>
            </div>

            <div className="contact-links">
              <a href="mailto:at0297284@gmail.com">EMAIL — at0297284@gmail.com</a>
              <a href="https://www.linkedin.com/in/avinash-singh-thakur" target="_blank" rel="noreferrer">LINKEDIN — Avinash Singh Thakur</a>
              <a href="https://github.com/avinash9219s" target="_blank" rel="noreferrer">GITHUB — avinash9219s</a>
              <a href="tel:+919611111828">PHONE — +91-9611111828</a>
              <a className="download-link" href={`${import.meta.env.BASE_URL}assets/Avinash-Thakur-Resume.pdf`} target="_blank" rel="noreferrer">DOWNLOAD RESUME →</a>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="site-footer">
        <span>AVINASH THAKUR</span>
        <span>CYBERSECURITY STUDENT</span>
        <span>AI &amp; SECURITY BUILDER</span>
      </footer>
    </div>
  )
}

export default App
