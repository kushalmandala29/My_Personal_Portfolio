import React, { useState } from "react";
import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import ParticlesContainer from "@/components/Other/ParticlesContainer/ParticlesContainer";
import Avatar from "@/components/Other/Avatar/Avatar";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const educationData = [
    {
      degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
      institution: "KL University",
      period: "2022 - Present",
      cgpa: "9.56/10",
      description: "Specializing in Cloud and Edge Computing, Machine Learning, and AI applications."
    },
    {
      degree: "M.P.C (Mathematics, Physics, Chemistry)",
      institution: "SRI SRINIVASA GRAVIITY Junior College",
      period: "2020 - 2022",
      cgpa: "889/1000",
      description: "Strong foundation in mathematics and sciences."
    },
    {
      degree: "High School Diploma",
      institution: "V.P.S Public School",
      period: "2011 - 2020",
      cgpa: "7.55/10",
      description: "Comprehensive secondary education with focus on academics."
    }
  ];

  const workExperienceData = [
    {
      position: "Research Assistant",
      company: "KLGLUG + BalaSwecha(SwechaAP)",
      period: "Feb 2025 - Apr 2025",
      description: "Working on term paper research focusing on open-source technologies and community development."
    },
    {
      position: "Business Analyst Intern",
      company: "SmartInternz",
      period: "Apr 2024 - June 2024",
      description: "Analyzed business requirements and provided data-driven insights for decision making."
    },
    {
      position: "AI/ML Virtual Intern",
      company: "AICTE x Edunet x AWS",
      period: "Jan 2024 - Mar 2024",
      description: "Developed machine learning models and deployed them on AWS cloud infrastructure."
    }
  ];

  const skillsData = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "Java", "C++", "R", "PHP"]
    },
    {
      category: "AI/ML & Data Science",
      items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Matplotlib"]
    },
    {
      category: "Web Development",
      items: ["React", "Next.js", "Django", "Flask", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Database & Cloud",
      items: ["MySQL", "PostgreSQL", "MongoDB", "AWS", "Docker", "Git"]
    }
  ];

  const certificationsData = [
    {
      name: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
      issuer: "Oracle",
      date: "July 2024",
      status: "Valid until July 2026"
    },
    {
      name: "Salesforce Certified AI Associate",
      issuer: "Trailhead",
      date: "October 2024",
      status: "Active"
    },
    {
      name: "IBM Python Certification",
      issuer: "Etrain Education",
      date: "October 2024",
      status: "Completed"
    },
    {
      name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      issuer: "Oracle",
      date: "July 2024",
      status: "Valid until July 2026"
    }
  ];

  return (
    <div className="min-h-screen xl:py-32 pt-20 xl:mb-0 xl:my-0 text-center xl:text-left">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-[100px] -left-[210px] z-[0] max-w-[460px]"
      >
        <Avatar opacity={true} />
      </motion.div>
      
      <div className="container mx-auto px-4 xl:px-0 relative z-10">
        {/* About Me Description */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-12 xl:mb-16"
        >
          <h2 className="h2 z-10 mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto xl:mx-0">
            I'm Kushal, a final-year B.Tech student specializing in Artificial Intelligence & Data Science with a focus on Cloud and Edge Computing at KL University. Passionate about building innovative, real-world AI solutions, I have hands-on experience in Python, Django, RESTful APIs, and integrating large language models (LLMs) into production systems. In my free time, I love listening to music and playing basketball, which help me stay creative, energized, and balanced.
          </p>
        </motion.div>

        {/* Education and Work Experience */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 mb-12 xl:mb-16"
        >
          {/* Education Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 xl:p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-accent mr-2">📚</span>
              Education
            </h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="border-l-2 border-accent/50 pl-4">
                  <div className="flex flex-col space-y-2">
                    <h4 className="font-semibold text-white text-lg">{edu.degree}</h4>
                    <p className="text-accent font-medium">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <span className="text-white/60 text-sm">{edu.period}</span>
                      <span className="text-accent text-sm font-medium">CGPA: {edu.cgpa}</span>
                    </div>
                    <p className="text-white/70 text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 xl:p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-accent mr-2">💼</span>
              Work Experience
            </h3>
            <div className="space-y-6">
              {workExperienceData.map((work, index) => (
                <div key={index} className="border-l-2 border-accent/50 pl-4">
                  <div className="flex flex-col space-y-2">
                    <h4 className="font-semibold text-white text-lg">{work.position}</h4>
                    <p className="text-accent font-medium">{work.company}</p>
                    <span className="text-white/60 text-sm">{work.period}</span>
                    <p className="text-white/70 text-sm">{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills and Certifications Tabs */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 xl:p-8 border border-white/10"
        >
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 xl:gap-x-8 mx-auto xl:mx-0 min-w-max px-2 xl:px-0 mb-8">
            <button
              onClick={() => setActiveTab("skills")}
              className={`
                ${activeTab === "skills" 
                  ? "text-accent after:w-[100%] after:bg-accent" 
                  : "text-white/60 after:w-8 after:bg-white hover:text-accent"
                }
                cursor-pointer capitalize xl:text-lg relative 
                after:h-[2px] after:absolute after:-bottom-1 after:left-0 
                after:transition-all after:duration-300
                text-[15px] transition-all duration-300
                whitespace-nowrap flex-shrink-0 py-2 px-4
              `}
            >
              <span className="mr-2">🛠️</span>
              Skills
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`
                ${activeTab === "certifications" 
                  ? "text-accent after:w-[100%] after:bg-accent" 
                  : "text-white/60 after:w-8 after:bg-white hover:text-accent"
                }
                cursor-pointer capitalize xl:text-lg relative 
                after:h-[2px] after:absolute after:-bottom-1 after:left-0 
                after:transition-all after:duration-300
                text-[15px] transition-all duration-300
                whitespace-nowrap flex-shrink-0 py-2 px-4
              `}
            >
              <span className="mr-2">🏆</span>
              Certifications
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {/* Skills Tab */}
            {activeTab === "skills" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                {skillsData.map((skillCategory, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-white mb-4 text-center">
                      {skillCategory.category}
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium hover:bg-accent/30 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications Tab */}
            {activeTab === "certifications" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                {certificationsData.map((cert, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <span className="text-accent text-2xl mr-3">🎓</span>
                      <h4 className="text-lg font-semibold text-white line-clamp-2">
                        {cert.name}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      <p className="text-accent font-medium">{cert.issuer}</p>
                      <p className="text-white/60 text-sm">Earned: {cert.date}</p>
                      <p className="text-white/60 text-sm">Status: {cert.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Background */}
      <div className="w-[100vw] h-full absolute right-0 bottom-0 -z-10">
        <div className="xl:opacity-100 opacity-30 bg-paints bg-cover bg-center bg-no-repeat hue-rotate-[-20deg] w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default About;