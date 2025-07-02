import { useState } from "react";
import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import ParticlesContainer from "@/components/Other/ParticlesContainer/ParticlesContainer";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/Other/UI/tabs";
import ProjectCard from "@/components/Other/ProjectCard/ProjectCard";

import { projectData } from "@/data/project";

const uniqueCategories: string[] = [
  "todos os projetos",
  ...Array.from(new Set(projectData.map((item) => item.category)))
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("todos os projetos");

  const filteredProjects = projectData.filter((project) => {
    return category === "todos os projetos"
      ? project
      : project.category === category;
  });

  return (
    <div className="xl:h-[inherit] h-auto xl:pt-[3%] xl:py-24 pt-12 pb-14 xl:pb-0 xl:mt-0 flex items-start max-h-dvh relative overflow-hidden">
      <div className="container mx-auto relative z-10 w-full max-h-[90vh] overflow-y-auto scrollbar-custom">
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full"
        >
          <motion.h2 
            className="h2 text-center mb-6 relative"
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
          
          <Tabs defaultValue={category} className="mb-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-8 mx-auto md:border border-none backdrop-blur-sm bg-white/5 rounded-xl shadow-lg">
                {categories.map((category: string, index: number) => {
                  return (
                    <TabsTrigger
                      onClick={() => setCategory(category)}
                      value={category}
                      key={index}
                      className="capitalize w-[162px] md:w-auto relative group transition-all duration-300 hover:scale-105 hover:bg-accent/20 data-[state=active]:bg-accent/30 data-[state=active]:text-white data-[state=active]:shadow-lg"
                    >
                      <span className="relative z-10">{category}</span>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 rounded opacity-0 group-hover:opacity-100"
                        initial={false}
                        animate={{ x: category === category ? 0 : -100 }}
                        transition={{ duration: 0.3 }}
                      />
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </motion.div>

            <motion.div 
              className="text-lg xl:mt-8 relative"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-8">
                {filteredProjects.map((project, index) => {
                  return (
                    <motion.div
                      key={`${category}-${index}`}
                      initial={{ y: 50, opacity: 0, scale: 0.9 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: -50, opacity: 0, scale: 0.9 }}
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
                      <TabsContent value={category} className="relative overflow-hidden rounded-lg">
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
                      </TabsContent>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </Tabs>
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
