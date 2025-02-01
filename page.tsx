"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaMedium, FaPython, FaReact, FaDocker, FaAws } from "react-icons/fa"
import { SiTensorflow, SiPytorch, SiScikitlearn, SiJavascript, SiNextdotjs } from "react-icons/si"

const techIcons = [
  FaPython,
  FaReact,
  FaDocker,
  FaAws,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiJavascript,
  SiNextdotjs,
]

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Floating tech icons */}
      {techIcons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl text-blue-400 opacity-20"
          initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
          animate={{
            x: mousePosition.x + (Math.random() - 0.5) * 100,
            y: mousePosition.y + (Math.random() - 0.5) * 100,
            rotate: 360,
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <Icon />
        </motion.div>
      ))}

      {/* Main content */}
      <main className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-6xl font-bold mb-8 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Aaryan Rana
        </motion.h1>
        <motion.p
          className="text-2xl text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI/ML/Data Science Expert
        </motion.p>

        {/* About section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="mb-4">
            I'm a passionate AI/ML and Data Science enthusiast currently in my 3rd year (6th semester) at Chandigarh
            University. My journey in the world of technology and data has been exciting and full of learning
            experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">10th Grade</h3>
              <p className="text-4xl font-bold text-blue-400">82.4%</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">12th Grade</h3>
              <p className="text-4xl font-bold text-blue-400">87.4%</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Current CGPA</h3>
              <p className="text-4xl font-bold text-blue-400">7.62</p>
            </div>
          </div>
        </motion.section>

        {/* Projects section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="SynGen AI"
              description="A Synthetic Content Generator for Multimodal Experiences"
              technologies={[
                "LLMs",
                "CV",
                "NLP",
                "Deep Learning",
                "Stable Diffusion",
                "GPT-4",
                "DALL-E",
                "WaveNet",
                "React.js",
                "Flask",
                "AWS",
              ]}
            />
            <ProjectCard
              title="GenAI-Powered Customer Feedback Analysis"
              description="Analyze customer feedback using Generative AI and NLP"
              technologies={["LangChain", "Hugging Face", "Flask", "Power BI", "AWS", "MongoDB", "Streamlit"]}
            />
            <ProjectCard
              title="AI-Powered Digital Avatar"
              description="An AI assistant for real-world use in metro stations, bus stops, and educational institutions"
              technologies={["NLP", "Speech Recognition", "LLMs", "Flask", "React.js", "AWS"]}
            />
          </div>
        </motion.section>

        {/* Contact section */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <div className="flex justify-center space-x-8">
            <motion.a
              href="https://github.com/aaryanrana"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-4xl text-gray-300 hover:text-white"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/aaryanrana"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-4xl text-gray-300 hover:text-white"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://medium.com/@aaryanrana"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-4xl text-gray-300 hover:text-white"
            >
              <FaMedium />
            </motion.a>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  technologies,
}: {
  title: string
  description: string
  technologies: string[]
}) {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-blue-600 text-xs font-semibold px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

