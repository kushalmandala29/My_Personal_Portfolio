import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import ParticlesContainer from "@/components/Other/ParticlesContainer/ParticlesContainer";
import Avatar from "@/components/Other/Avatar/Avatar";

const AboutMe = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
      institution: "KL University",
      period: "2022 - Present",
      cgpa: "9.56/10",
    },
    {
      degree: "M.P.C (Mathematics, Physics, Chemistry)",
      institution: "SRI SRINIVASA GRAVIITY Junior College",
      period: "2020 - 2022",
      cgpa: "889/1000",
    },
    {
      degree: "High School Diploma",
      institution: "V.P.S Public School",
      period: "2011 - 2020",
      cgpa: "7.55/10",
    }
  ];

  const workExperienceData = [
    {
      position: "Research Assistant",
      company: "KLGLUG + BalaSwecha(SwechaAP)",
      period: "Feb 2025 - Apr 2025",
    },
    {
      position: "Business Analyst Intern",
      company: "SmartInternz",
      period: "Apr 2024 - June 2024",
    },
    {
      position: "AI/ML Virtual Intern",
      company: "AICTE x Edunet x AWS",
      period: "Jan 2024 - Mar 2024",
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
      name: "AWS Certified cloud practitioner",
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
      name: "NAT - N5 japanese Language Proficiency certification",
      issuer: "NAT",
      earnedOn: "June 2025",
      expiresOn: "Never Expires",
      certificateId: "NA",
      verificationUrl: "https://drive.google.com/file/d/1lEiurHvwODSIiJySUONd5P8SfJC1-c8F/view?usp=sharing",
      backgroundImage: "/natn5certificate.png"
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
  ];

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <ParticlesContainer />
      
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-[100px] -left-[210px] z-[0] max-w-[460px]"
      >
        <Avatar opacity={true} />
      </motion.div>
      
      {/* Full Screen Content - No Internal Scroll */}
      <div className="h-full w-full flex flex-col justify-center relative z-10">
        <div className="container mx-auto px-4 xl:px-0 py-8 xl:py-12">
          {/* About Me Section */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8 xl:mb-12 text-center"
          >
            <h2 className="h2 z-10 mb-6 text-center">
              About <span className="text-accent">Me</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
              I&apos;m Kushal, a final-year B.Tech student specializing in Artificial Intelligence & Data Science with a focus on Cloud and Edge Computing at KL University. Passionate about building innovative, real-world AI solutions, I have hands-on experience in Python, Django, RESTful APIs, and integrating large language models (LLMs) into production systems.
            </p>
          </motion.div>

          {/* Education, Work Experience, Skills & Certifications Grid */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8 max-h-[60vh] overflow-hidden"
          >
            {/* Education Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 xl:p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-center">
                <span className="text-accent mr-2">📚</span>
                Education
              </h3>
              <div className="space-y-3">
                {educationData.slice(0, 2).map((edu, index) => (
                  <div key={index} className="border-l-2 border-accent/50 pl-3">
                    <div className="flex flex-col space-y-1">
                      <h4 className="font-semibold text-white text-sm">{edu.degree}</h4>
                      <p className="text-accent font-medium text-sm">{edu.institution}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-white/60 text-xs">{edu.period}</span>
                        <span className="text-accent text-xs font-medium">CGPA: {edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 xl:p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-center">
                <span className="text-accent mr-2">💼</span>
                Work Experience
              </h3>
              <div className="space-y-3">
                {workExperienceData.slice(0, 2).map((work, index) => (
                  <div key={index} className="border-l-2 border-accent/50 pl-3">
                    <div className="flex flex-col space-y-1">
                      <h4 className="font-semibold text-white text-sm">{work.position}</h4>
                      <p className="text-accent font-medium text-sm">{work.company}</p>
                      <span className="text-white/60 text-xs">{work.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Section (Compact) */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 xl:p-6 border border-white/10 mt-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-center">
              <span className="text-accent mr-2">🛠️</span>
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skillsData.slice(0, 3).map((skillCategory, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <h4 className="text-sm font-semibold text-white mb-2 text-center">
                    {skillCategory.category}
                  </h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {skillCategory.items.slice(0, 3).map((skill, skillIndex) => (
                      <img
                        key={skillIndex}
                        src={skill.badge}
                        alt={skill.name}
                        className="h-5"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Preview */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 xl:p-6 border border-white/10 mt-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-center">
              <span className="text-accent mr-2">🏆</span>
              Key Certifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {certificationsData.slice(0, 3).map((cert, index) => (
                <div 
                  key={index} 
                  className="relative group cursor-pointer overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg h-24 transition-all duration-300 hover:bg-white/15 hover:border-accent/50"
                  onClick={() => window.open(cert.verificationUrl, '_blank')}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
                    style={{ backgroundImage: `url(${cert.backgroundImage})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60"></div>
                  <div className="relative z-10 p-2 h-full flex flex-col justify-center">
                    <h4 className="text-xs font-bold text-white line-clamp-2 text-center">
                      {cert.name}
                    </h4>
                    <p className="text-accent text-xs text-center mt-1">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
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

export default AboutMe;
