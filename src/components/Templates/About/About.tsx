import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { RiArrowRightLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "@/validators/sendEmail";
import Swal from "sweetalert2";

import { fadeIn } from "@/components/Animations/FadeIn";
import { SendEmailInterface } from "@/interfaces/SendEmailInterface";
import ParticlesContainer from "@/components/Other/ParticlesContainer/ParticlesContainer";
import Avatar from "@/components/Other/Avatar/Avatar";
import ProjectCard from "@/components/Other/ProjectCard/ProjectCard";
import ResumeBtn from "@/components/Other/ResumeBtn/ResumeBtn";
import Socials from "@/components/Other/Socials/Socials";

import { projectData } from "@/data/project";

const About = () => {
  const router = useRouter();

  // Contact form setup
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SendEmailInterface>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SendEmailInterface> = (data) => {
    const templateParams = {
      name: data.name,
      subject: data.subject,
      message: data.message,
      email: data.email,
      url: window.location.href,
    };

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error("Environment variables are not defined correctly.");
    }

    emailjs
      .send(serviceId.toString(), templateId.toString(), templateParams, publicKey.toString())
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Message sent successfully!",
            text: "Thank you for reaching out. I&apos;ll get back to you soon.",
            showConfirmButton: false,
            timer: 3000,
            customClass: {
              popup: 'bg-primary border-2 border-accent/20',
              title: 'text-white',
              htmlContainer: 'text-white/80'
            }
          });
        },
        (error) => {
          console.error('Email send failed:', error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Failed to send message",
            text: "Something went wrong. Please try again later.",
            showConfirmButton: false,
            timer: 3000,
            customClass: {
              popup: 'bg-primary border-2 border-red-500/20',
              title: 'text-white',
              htmlContainer: 'text-white/80'
            }
          });
        }
      );
  };

  // Initialize navigation state when component mounts
  useEffect(() => {
    // Ensure proper navigation state when About page loads
    if (router.pathname === '/about' && !router.asPath.includes('#')) {
      window.history.replaceState(null, '', '/about#top');
      window.dispatchEvent(new Event('urlchange'));
    }
  }, [router.pathname, router.asPath]);

  // Handle scroll to sections when hash is present
  useEffect(() => {
    const scrollToSection = (sectionId: string) => {
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        const scrollContainer = document.querySelector('.h-full.overflow-y-auto.scrollbar-custom');
        
        if (element && scrollContainer) {
          const elementTop = element.offsetTop;
          // Calculate offset to prevent overlap with the heading
          // The heading has "text-4xl xl:text-6xl" which is roughly 56px-96px height
          // Adding extra padding for better visual spacing
          const offset = sectionId === 'home' ? 0 : 120; // No offset for home, 120px for others
          
          scrollContainer.scrollTo({
            top: Math.max(0, elementTop - offset),
            behavior: 'smooth'
          });
        }
      }, 300); // Reduced delay for better responsiveness
      
      return () => clearTimeout(timer);
    };

    if (router.asPath.includes('#home')) {
      scrollToSection('home');
    } else if (router.asPath.includes('#about')) {
      scrollToSection('about');
    } else if (router.asPath.includes('#projects')) {
      scrollToSection('projects');
    } else if (router.asPath.includes('#contact')) {
      scrollToSection('contact');
    } else if (router.asPath.includes('#top') || router.pathname === '/about') {
      const timer = setTimeout(() => {
        const scrollContainer = document.querySelector('.h-full.overflow-y-auto.scrollbar-custom');
        if (scrollContainer) {
          scrollContainer.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          // Ensure navigation shows "Home" when at top
          if (!router.asPath.includes('#home')) {
            window.history.replaceState(null, '', '/about#home');
            window.dispatchEvent(new Event('urlchange'));
          }
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [router.asPath, router.pathname]);

  // Handle scroll detection to update URL hash
  useEffect(() => {
    const handleScroll = () => {
      const homeElement = document.getElementById('home');
      const aboutElement = document.getElementById('about');
      const projectsElement = document.getElementById('projects');
      const contactElement = document.getElementById('contact');
      
      if (!homeElement || !aboutElement || !projectsElement || !contactElement) return;
      
      const sections = [
        { id: 'home', element: homeElement, hash: '#home' },
        { id: 'about', element: aboutElement, hash: '#about' },
        { id: 'projects', element: projectsElement, hash: '#projects' },
        { id: 'contact', element: contactElement, hash: '#contact' }
      ];
      
      let currentSection = '#home';
      let maxVisibility = 0;
      
      sections.forEach(section => {
        const rect = section.element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the section is visible
        const visibleTop = Math.max(0, -rect.top);
        const visibleBottom = Math.min(rect.height, windowHeight - rect.top);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibility = visibleHeight / windowHeight;
        
        // If this section is more visible than the current one, use it
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          currentSection = section.hash;
        }
        
      });
      
      // Special case: if we're at the very top, always show home
      const scrollContainer = document.querySelector('.h-full.overflow-y-auto.scrollbar-custom');
      if (scrollContainer && scrollContainer.scrollTop < 100) {
        currentSection = '#home';
      }
      
      // Update URL if different from current hash
      const currentUrlHash = router.asPath.split('#')[1] || 'home';
      const newHash = currentSection.substring(1); // Remove the # symbol
      
      if (currentUrlHash !== newHash) {
        window.history.replaceState(null, '', `/about${currentSection}`);
        window.dispatchEvent(new Event('urlchange'));
      }
    };

    const scrollContainer = document.querySelector('.h-full.overflow-y-auto.scrollbar-custom');
    if (scrollContainer) {
      // Use throttling for better performance
      let ticking = false;
      const throttledScrollHandler = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };

      scrollContainer.addEventListener('scroll', throttledScrollHandler, { passive: true });
      
      // Initial check with delay to ensure DOM is ready
      const timer = setTimeout(() => {
        handleScroll();
      }, 1000);
      
      return () => {
        scrollContainer.removeEventListener('scroll', throttledScrollHandler);
        clearTimeout(timer);
      };
    }
  }, [router.asPath, router.pathname]);
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
      position: "Term Paper ",
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
      category: "Programming & Scripting",
      items: [
        { name: "Python", badge: "https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" },
        { name: "C", badge: "https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" },
        { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" },
        { name: "SQL", badge: "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" }
      ]
    },
    {
      category: "Web Development & API Design",
      items: [
        { name: "Django", badge: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" },
        { name: "FastAPI", badge: "https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi&logoColor=white" },
        { name: "RESTful APIs", badge: "https://img.shields.io/badge/REST-02569B?style=for-the-badge&logo=rest&logoColor=white" },
        { name: "Postman", badge: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" }
      ]
    },
    {
      category: "Databases & Data Engineering",
      items: [
        { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" },
        { name: "MySQL", badge: "https://img.shields.io/badge/MySQL-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" },
        { name: "Chroma (Vector DB)", badge: "https://img.shields.io/badge/Chroma-FF6B6B?style=for-the-badge&logo=database&logoColor=white" },
        { name: "Apache Flink", badge: "https://img.shields.io/badge/Apache%20Flink-E6526F?style=for-the-badge&logo=apache-flink&logoColor=white" },
        { name: "Apache Airflow", badge: "https://img.shields.io/badge/Apache%20Airflow-017CEE?style=for-the-badge&logo=apache-airflow&logoColor=white" }
      ]
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS", badge: "https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" },
        { name: "Google Cloud Platform", badge: "https://img.shields.io/badge/GCP-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" },
        { name: "Git", badge: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
        { name: "GitHub", badge: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" },
        { name: "Docker", badge: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
        { name: "CI/CD", badge: "https://img.shields.io/badge/CI%2FCD-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" }
      ]
    },
    {
      category: "AI & Language Model Applications",
      items: [
        { name: "LangChain", badge: "https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=chainlink&logoColor=white" },
        { name: "LangGraph", badge: "https://img.shields.io/badge/LangGraph-FF6B35?style=for-the-badge&logo=graph&logoColor=white" },
        { name: "OpenAI APIs", badge: "https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" },
        { name: "AI Agents", badge: "https://img.shields.io/badge/AI%20Agents-FF6B6B?style=for-the-badge&logo=robot&logoColor=white" },
        { name: "RAG", badge: "https://img.shields.io/badge/RAG-4CAF50?style=for-the-badge&logo=search&logoColor=white" },
        { name: "NLP", badge: "https://img.shields.io/badge/NLP-9C27B0?style=for-the-badge&logo=natural-language-processing&logoColor=white" }
      ]
    },
    {
      category: "Data Analytics & Visualization",
      items: [
        { name: "Pandas", badge: "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" },
        { name: "NumPy", badge: "https://img.shields.io/badge/Numpy-013243?style=for-the-badge&logo=numpy&logoColor=white" },
        { name: "Streamlit", badge: "https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white" },
        { name: "Qlik", badge: "https://img.shields.io/badge/Qlik-009848?style=for-the-badge&logo=qlik&logoColor=white" }
      ]
    }
  ];

  const certificationsData = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "AWS",
      earnedOn: "July 2025",
      expiresOn: "July 2028",
      certificateId: "f5b2db1925584d68adb105aa2f7e8fc3",
      verificationUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/f5b2db1925584d68adb105aa2f7e8fc3",
      backgroundImage: "/AWSCertifiedCloudPractitionercertificatepage.jpg"
    },
    {
      name: "Google Associate Cloud Engineer",
      issuer: "Google",
      earnedOn: "August 2024",
      expiresOn: "August 2027",
      certificateId: "914ef83e09564d21b41a3bad6f8a83ba",
      verificationUrl: "https://www.credly.com/badges/d6cae25b-50c6-4015-98a8-221df2d5b064",
      backgroundImage: "/GoogleAssociateCloudEngineer.png"
    },
    {
      name: "IBM Python Certification",
      issuer: "Etrain Education",
      earnedOn: "October 2024",
      expiresOn: "Never",
      certificateId: "16099bc225934617885c38cff2d8ce98",
      verificationUrl: "https://courses.etrain.skillsnetwork.site/certificates/16099bc225934617885c38cff2d8ce98",
      backgroundImage: "/IBM-Python.png"
    },
    {
      name: "Hacker Rank certified SQL Intermediate ",
      issuer: "HackerRank",
      earnedOn: "June 2024",
      expiresOn: "Never Expires",
      certificateId: "46d61bb25ce0",
      verificationUrl: "https://www.hackerrank.com/certificates/46d61bb25ce0",
      backgroundImage: "/HackerRankcertifiedSQLIntermediate.png"
    },
    {
      name: "Oracle Cloud Infrastructure 2024 AI Certified Foundations Associate",
      issuer: "Oracle",
      earnedOn: "July 2024",
      expiresOn: "July 2026",
      certificateId: "A77DDE0D6389956619942BF1D476D6A7F935062EB60432F7193ED37E45A9EF51",
      verificationUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A77DDE0D6389956619942BF1D476D6A7F935062EB60432F7193ED37E45A9EF51",
      backgroundImage: "/OracleCloudInfrastructure2024GenerativeAICertifiedProfessional.png"
    },
    
    {
      name: "NAT - N5 japanese Language Proficiency certification",
      issuer: "NAT",
      earnedOn: "June 2025",
      expiresOn: "Never Expires",
      certificateId: "NA",
      verificationUrl: "https://drive.google.com/file/d/1lEiurHvwODSIiJySUONd5P8SfJC1-c8F/view?usp=sharing",
      backgroundImage: "/natn5certificate.png"
    }
  ];

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <ParticlesContainer />
      
      {/* Single Full-Screen Scrollable Container */}
      <div className="h-full w-full overflow-y-auto scrollbar-custom">
        <div className="min-h-screen container mx-auto px-6 xl:px-8 relative z-10 py-12 xl:py-16">
          
          {/* Home Section */}
          <motion.div
            id="home"
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="min-h-screen flex flex-col justify-start xl:justify-start items-center xl:items-start mb-8 xl:mb-12 pt-8 xl:pt-16"
          >
            <div className="flex flex-col xl:flex-row-reverse items-center xl:items-start gap-8 xl:gap-12 text-left max-w-6xl w-full">
              {/* Profile Picture */}
              <div className="flex-shrink-0">
                <div className="relative w-64 h-64 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl">
                  <Image 
                    src="/avatar.webp" 
                    alt="Kushal's Profile" 
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/10"></div>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="flex-1 text-center xl:text-left max-w-2xl xl:max-w-4xl w-full">
              <h1 className="h1 xl:mt-4 mt-0 mx-0 mb-8 w-fit text-4xl xl:text-6xl">
                Hello, My name is <br /> 
                <span className="text-accent">Kushal</span>
              </h1>
              <p className="max-w-lg xl:max-w-2xl mx-0 mb-10 xl:mb-8 text-lg xl:text-xl text-white/80">
                I&apos;m a Final year AI & Data Science student at KL University with a strong passion for building solutions that bridge data, code, and the cloud. 
              </p>
              
              {/* Buttons container */}
              <div className="flex flex-col items-start gap-4 mt-12">
                {/* Resume button */}
                <motion.div
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  <ResumeBtn />
                </motion.div>
                
                {/* Social Links under button */}
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="mt-2"
                >
                  <Socials />
                </motion.div>
              </div>
            </div>
            </div>
          </motion.div>
          
          {/* About Me Section */}
          <motion.div
            id="about"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8 xl:mb-12 pt-8 xl:pt-12"
          >
            <h2 className="h2 z-10 mb-6 text-center xl:text-left text-3xl xl:text-4xl">
              About <span className="text-accent">Me</span>
            </h2>
            <p className="text-white/80 text-lg xl:text-xl leading-relaxed max-w-5xl mx-auto xl:mx-0 text-center xl:text-left">
              I&apos;m Kushal, a final-year B.Tech student specializing in Artificial Intelligence & Data Science with a focus on Cloud and Edge Computing at KL University. Passionate about building innovative, real-world AI solutions, I have hands-on experience in Python, Django, RESTful APIs, and integrating large language models (LLMs) into production systems.
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
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 xl:p-8 border border-white/10">
              <h3 className="text-2xl xl:text-3xl font-bold text-white mb-6 flex items-center justify-center xl:justify-start">
                <span className="text-accent mr-3 text-2xl">📚</span>
                Education
              </h3>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <div key={index} className="border-l-2 border-accent/50 pl-4">
                    <div className="flex flex-col space-y-2">
                      <h4 className="font-semibold text-white text-lg xl:text-xl">{edu.degree}</h4>
                      <p className="text-accent font-medium text-base xl:text-lg">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <span className="text-white/60 text-sm xl:text-base">{edu.period}</span>
                        <span className="text-accent text-sm xl:text-base font-medium">CGPA: {edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 xl:p-8 border border-white/10">
              <h3 className="text-2xl xl:text-3xl font-bold text-white mb-6 flex items-center justify-center xl:justify-start">
                <span className="text-accent mr-3 text-2xl">💼</span>
                Work Experience
              </h3>
              <div className="space-y-6">
                {workExperienceData.map((work, index) => (
                  <div key={index} className="border-l-2 border-accent/50 pl-4">
                    <div className="flex flex-col space-y-2">
                      <h4 className="font-semibold text-white text-lg xl:text-xl">{work.position}</h4>
                      <p className="text-accent font-medium text-base xl:text-lg">{work.company}</p>
                      <span className="text-white/60 text-sm xl:text-base">{work.period}</span>
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
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 xl:p-8 border border-white/10 mb-12 xl:mb-16"
          >
            <h3 className="text-2xl xl:text-3xl font-bold text-white mb-8 flex items-center justify-center xl:justify-start">
              <span className="text-accent mr-3 text-2xl">🛠️</span>
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {skillsData.map((skillCategory, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6 xl:p-8 border border-white/10 hover:border-accent/30 transition-all duration-300">
                  <h4 className="text-xl xl:text-2xl font-semibold text-white mb-4 text-center">
                    {skillCategory.category}
                  </h4>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="transition-all duration-300 hover:scale-110"
                      >
                        <img
                          src={skill.badge}
                          alt={skill.name}
                          className="skill-badge-image h-8 xl:h-9"
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
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 xl:p-8 border border-white/10 mb-12 xl:mb-16"
          >
            <h3 className="text-2xl xl:text-3xl font-bold text-white mb-8 flex items-center justify-center xl:justify-start">
              <span className="text-accent mr-3 text-2xl">🏆</span>
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {certificationsData.map((cert, index) => (
                <div 
                  key={index} 
                  className="relative group cursor-pointer overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg h-60 xl:h-64 transition-all duration-300 hover:bg-white/15 hover:border-accent/50 hover:scale-105"
                  onClick={() => window.open(cert.verificationUrl, '_blank')}
                >
                  {/* Background Certificate Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    style={{ backgroundImage: `url(${cert.backgroundImage})` }}
                  ></div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60 group-hover:from-black/30 group-hover:via-black/10 group-hover:to-black/50 transition-all duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-4 xl:p-5 h-full flex flex-col">
                    <div className="flex items-start mb-3">
                      <span className="text-accent text-xl mr-3">🎓</span>
                      <div className="flex-1">
                        <h4 className="text-sm xl:text-base font-bold text-white line-clamp-2 mb-2">
                          {cert.name}
                        </h4>
                      </div>
                    </div>
                    
                    <div className="space-y-2 flex-grow text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Issued by:</span>
                        <span className="text-accent font-medium">{cert.issuer}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Earned:</span>
                        <span className="text-white/90 font-medium">{cert.earnedOn}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <div className="flex items-center justify-center text-accent text-sm group-hover:text-white transition-colors duration-300">
                        <span className="mr-2">🔗</span>
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
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 xl:p-8 border border-white/10 mb-8 xl:mb-12 pt-8 xl:pt-12"
          >
            <h3 className="text-2xl xl:text-3xl font-bold text-white mb-8 flex items-center justify-center xl:justify-start">
              <span className="text-accent mr-3 text-2xl">🚀</span>
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
              {projectData.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0, scale: 0.95 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-lg h-full">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      initial={false}
                    />
                    <div className="relative z-10 transition-transform duration-300 group-hover:scale-[1.01] h-full">
                      <div className="transform scale-90 h-full">
                        <ProjectCard id={index} project={project} specialStyle={true} />
                      </div>
                    </div>
                    
                    {/* Glow effect */}
                    <motion.div 
                      className="absolute -inset-2 bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20 rounded-lg opacity-0 blur-lg group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      initial={false}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            id="contact"
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 xl:p-8 border border-white/10 mb-8 xl:mb-12 pt-8 xl:pt-12"
          >
            <h3 className="text-2xl xl:text-3xl font-bold text-white mb-8 flex items-center justify-center xl:justify-start">
              <span className="text-accent mr-3 text-2xl">📧</span>
              Contact Me
            </h3>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Let&apos;s Connect!</h4>
                  <p className="text-white/80 text-base xl:text-lg leading-relaxed">
                    Ready to start a conversation about your next project? Get in touch with me here. 
                    I&apos;m excited to discuss your ideas and how I can help you achieve your software development goals.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-accent text-lg">📍</span>
                    <span className="text-white/80">Andhra Pradesh, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-accent text-lg">📧</span>
                    <span className="text-white/80">kushalmandala29@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-accent text-lg">⏰</span>
                    <span className="text-white/80">Available for freelance work</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          placeholder="Your Name"
                          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-accent focus:outline-none transition-all duration-300"
                        />
                      )}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          placeholder="Your Email"
                          type="email"
                          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-accent focus:outline-none transition-all duration-300"
                        />
                      )}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Controller
                    name="subject"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        placeholder="Subject"
                        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-accent focus:outline-none transition-all duration-300"
                      />
                    )}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        placeholder="Your Message"
                        rows={4}
                        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-accent focus:outline-none transition-all duration-300 resize-none"
                      />
                    )}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 w-full md:w-auto"
                >
                  <span>Send Message</span>
                  <RiArrowRightLine className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Bottom spacing */}
          <div className="h-16"></div>
        </div>
      </div>

      {/* Background */}
      <div className="w-full h-full absolute right-0 bottom-0 -z-10">
        <div className="xl:opacity-100 opacity-30 bg-paints bg-cover bg-center bg-no-repeat hue-rotate-[-20deg] w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
      </div>
    </div>
  );
};

export default About;