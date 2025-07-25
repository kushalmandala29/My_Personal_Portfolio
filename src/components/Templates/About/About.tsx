import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { fadeIn } from "@/components/Animations/FadeIn";
import ParticlesContainer from "@/components/Other/ParticlesContainer/ParticlesContainer";
import Avatar from "@/components/Other/Avatar/Avatar";
import ProjectCard from "@/components/Other/ProjectCard/ProjectCard";

import { projectData } from "@/data/project";

const About = () => {
  const router = useRouter();

  // Handle scroll to sections when hash is present
  useEffect(() => {
    if (router.asPath.includes('#projects')) {
      const timer = setTimeout(() => {
        const projectsElement = document.getElementById('projects');
        if (projectsElement) {
          projectsElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 500);
      
      return () => clearTimeout(timer);
    } else if (router.asPath.includes('#top')) {
      const timer = setTimeout(() => {
        const topElement = document.getElementById('top');
        const scrollContainer = document.querySelector('.h-full.overflow-y-auto.scrollbar-custom');
        if (topElement && scrollContainer) {
          scrollContainer.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [router.asPath]);

  // Handle scroll detection to update URL hash
  useEffect(() => {
    const handleScroll = () => {
      const projectsElement = document.getElementById('projects');
      const scrollContainer = document.querySelector('.h-full.overflow-y-auto.scrollbar-custom');
      
      if (projectsElement && scrollContainer) {
        const rect = projectsElement.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        
        // Check if projects section is in view (at least 50% visible)
        const isProjectsInView = rect.top < containerRect.height * 0.5 && rect.bottom > containerRect.height * 0.5;
        
        if (isProjectsInView && !router.asPath.includes('#projects')) {
          // Update URL to show projects hash
          window.history.replaceState(null, '', '/about#projects');
        } else if (!isProjectsInView && router.asPath.includes('#projects')) {
          // When scrolling away from projects, go back to top section
          window.history.replaceState(null, '', '/about#top');
        } else if (!router.asPath.includes('#') && scrollContainer.scrollTop < 100) {
          // When at the very top and no hash, set to top hash
          window.history.replaceState(null, '', '/about#top');
        }
      }
    };

    const scrollContainer = document.querySelector('.h-full.overflow-y-auto.scrollbar-custom');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [router.asPath]);
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
      items: [
        { name: "Python", badge: "https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" },
        { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" },
        { name: "Java", badge: "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" },
        { name: "C++", badge: "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
        { name: "R", badge: "https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white" },
        { name: "PHP", badge: "https://img.shields.io/badge/PHP-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" }
      ]
    },
    {
      category: "AI/ML & Data Science",
      items: [
        { name: "Pandas", badge: "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" },
        { name: "NumPy", badge: "https://img.shields.io/badge/Numpy-013243?style=for-the-badge&logo=numpy&logoColor=white" },
        { name: "Scikit-learn", badge: "https://img.shields.io/badge/scikit--learn-f7931e?style=for-the-badge&logo=scikit-learn&logoColor=white" },
        { name: "TensorFlow", badge: "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" },
        { name: "PyTorch", badge: "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" },
        { name: "Matplotlib", badge: "https://img.shields.io/badge/Matplotlib-11557c?style=for-the-badge&logo=matplotlib&logoColor=white" }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "React", badge: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
        { name: "Next.js", badge: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" },
        { name: "Django", badge: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" },
        { name: "Flask", badge: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" },
        { name: "HTML5", badge: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" },
        { name: "CSS3", badge: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" },
        { name: "Tailwind CSS", badge: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" }
      ]
    },
    {
      category: "Database & Cloud",
      items: [
        { name: "MySQL", badge: "https://img.shields.io/badge/MySQL-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" },
        { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" },
        { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" },
        { name: "AWS", badge: "https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" },
        { name: "Docker", badge: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
        { name: "Git", badge: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" }
      ]
    }
  ];

  const certificationsData = [
    {
      name: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
      issuer: "Oracle",
      earnedOn: "July 2024",
      expiresOn: "July 2026",
      certificateId: "OCI-AI-2023-CFA-12345",
      verificationUrl: "https://education.oracle.com/certification",
      backgroundImage: "/certificates/oracle-ai-foundations.jpg"
    },
    {
      name: "Salesforce Certified AI Associate",
      issuer: "Trailhead",
      earnedOn: "October 2024",
      expiresOn: "Never",
      certificateId: "SF-AI-ASSOCIATE-67890",
      verificationUrl: "https://trailhead.salesforce.com/credentials",
      backgroundImage: "/certificates/salesforce-ai-associate.jpg"
    },
    {
      name: "IBM Python Certification",
      issuer: "Etrain Education",
      earnedOn: "October 2024",
      expiresOn: "Never",
      certificateId: "IBM-PY-CERT-54321",
      verificationUrl: "https://etrain.skillsnetwork.site",
      backgroundImage: "/certificates/ibm-python-cert.jpg"
    },
    {
      name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      issuer: "Oracle",
      earnedOn: "July 2024",
      expiresOn: "July 2026",
      certificateId: "OCI-GEN-AI-2024-PRO-98765",
      verificationUrl: "https://education.oracle.com/certification",
      backgroundImage: "/certificates/oracle-genai-professional.jpg"
    }
  ];

  return (
    <div className="h-screen overflow-hidden relative">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-[100px] -left-[210px] z-[0] max-w-[460px]"
      >
        <Avatar opacity={true} />
      </motion.div>
      
      {/* Main Scrollable Container */}
      <div className="h-full overflow-y-auto scrollbar-custom">
        <div className="container mx-auto px-4 xl:px-0 relative z-10 py-20 xl:py-32">
          {/* About Me Description */}
          <motion.div
            id="top"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-12 xl:mb-16"
          >
            <h2 className="h2 z-10 mb-6 text-center xl:text-left">
              About <span className="text-accent">Me</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto xl:mx-0 text-center xl:text-left">
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
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center xl:justify-start">
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
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center xl:justify-start">
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

          {/* Skills Section */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 xl:p-8 border border-white/10 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center xl:justify-start">
              <span className="text-accent mr-2">🛠️</span>
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsData.map((skillCategory, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-white mb-4 text-center">
                    {skillCategory.category}
                  </h4>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="transition-all duration-300 hover:scale-105"
                      >
                        <img
                          src={skill.badge}
                          alt={skill.name}
                          className="skill-badge-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 xl:p-8 border border-white/10 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center xl:justify-start">
              <span className="text-accent mr-2">🏆</span>
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificationsData.map((cert, index) => (
                <div 
                  key={index} 
                  className="relative group cursor-pointer overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl h-full transition-all duration-300 hover:bg-white/15 hover:border-accent/50 hover:scale-105"
                  onClick={() => window.open(cert.verificationUrl, '_blank')}
                >
                  {/* Background Certificate Image with Dim Overlay */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 group-hover:opacity-15 transition-opacity duration-300"
                    style={{ backgroundImage: `url(${cert.backgroundImage})` }}
                  ></div>
                  
                  {/* Dim Overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start mb-4">
                      <span className="text-accent text-2xl mr-3">🎓</span>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white line-clamp-2 mb-2">
                          {cert.name}
                        </h4>
                      </div>
                    </div>
                    
                    {/* Certificate Details */}
                    <div className="space-y-3 flex-grow">
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-sm">Issued by:</span>
                        <span className="text-accent font-medium text-sm">{cert.issuer}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-sm">Earned on:</span>
                        <span className="text-white/90 font-medium text-sm">{cert.earnedOn}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-sm">Expires on:</span>
                        <span className="text-white/90 font-medium text-sm">{cert.expiresOn}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-sm">Certificate ID:</span>
                        <span className="text-white/80 font-mono text-xs">{cert.certificateId.slice(-8)}</span>
                      </div>
                    </div>
                    
                    {/* Click to view indicator */}
                    <div className="mt-4 pt-3 border-t border-white/10">
                      <div className="flex items-center justify-center text-accent text-xs group-hover:text-white transition-colors duration-300">
                        <span className="mr-1">🔗</span>
                        <span>Click to verify</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            id="projects"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 xl:p-8 border border-white/10 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center xl:justify-start">
              <span className="text-accent mr-2">🚀</span>
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {projectData.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      initial={false}
                    />
                    <div className="relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
                      <ProjectCard id={index} project={project} specialStyle={true} />
                    </div>
                    
                    {/* Glow effect */}
                    <motion.div 
                      className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20 rounded-lg opacity-0 blur-lg group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      initial={false}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional spacing at the bottom for better scrolling experience */}
          <div className="h-20"></div>
        </div>
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