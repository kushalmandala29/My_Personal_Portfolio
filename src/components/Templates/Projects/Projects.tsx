import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import ParticlesContainer from "@/components/Other/ParticlesContainer/ParticlesContainer";
import ProjectCard from "@/components/Other/ProjectCard/ProjectCard";

import { projectData } from "@/data/project";

const Projects = () => {
  return (
    <div className="h-full w-full flex items-start justify-center relative overflow-hidden">
      <div className="container mx-auto relative z-10 w-full h-full flex flex-col pt-8 xl:pt-16 px-4 xl:px-0">
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full h-full flex flex-col"
        >
          <motion.h2 
            className="h2 text-center mb-6 xl:mb-8 relative flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <span className="relative z-10">
              Projects <span className="text-accent animate-pulse">.</span>
            </span>
            <motion.div 
              className="absolute -inset-2 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-lg opacity-0 blur-xl"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.h2>
          
          <motion.div 
            className="text-lg flex-1 overflow-y-auto scrollbar-none projects-scroll-container"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-8">
              {projectData.map((project, index) => {
                return (
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
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-[100vw] h-full absolute right-0 bottom-0">
        <div className="xl:opacity-100 opacity-30 bg-paints bg-cover bg-center bg-no-repeat hue-rotate-[-20deg] w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Projects;
