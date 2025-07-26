import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import ParticlesContainer from "@/components/Other/ParticlesContainer/ParticlesContainer";
import Avatar from "@/components/Other/Avatar/Avatar";
import ProjectCard from "@/components/Other/ProjectCard/ProjectCard";

import { projectData } from "@/data/project";

const ProjectsPage = () => {
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
      
      {/* Full Screen Projects Content */}
      <div className="h-full w-full flex flex-col justify-center relative z-10">
        <div className="container mx-auto px-4 xl:px-0 py-8 xl:py-12">
          {/* Projects Header */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8 xl:mb-12 text-center"
          >
            <h2 className="h2 z-10 mb-6">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
              Explore my latest projects showcasing AI/ML applications, web development, and cloud solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 max-h-[70vh] overflow-hidden"
          >
            {projectData.slice(0, 6).map((project, index) => (
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
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={false}
                  />
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-[1.01]">
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
          </motion.div>

          {/* View All Projects Button */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center mt-8"
          >
            <button className="bg-accent/20 hover:bg-accent/30 border border-accent/50 hover:border-accent text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              View All Projects
            </button>
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

export default ProjectsPage;
