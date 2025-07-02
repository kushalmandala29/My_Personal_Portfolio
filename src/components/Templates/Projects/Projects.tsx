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
    <div className="xl:h-[inherit] h-auto xl:pt-[6%] xl:py-36 pt-16 pb-14 xl:pb-0 xl:mt-0 flex items-center max-h-dvh">
      <div className="container mx-auto relative z-10">
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <h2
            className="h2 xl:mt-12 text-center xl:text-left mb-8"
          >
            Meus Projetos <span className="text-accent">.</span>
          </h2>
          <Tabs defaultValue={category} className="mb-24 xl:mb-48">
            <TabsList
              className="w-full grid h-full md:grid-cols-4
            lg:max-w-[640px] mb-12 mx-auto md:border border-none"
            >
              {categories.map((category: string, index: number) => {
                return (
                  <TabsTrigger
                    onClick={() => setCategory(category)}
                    value={category}
                    key={index}
                    className="capitalize w-[162px]
                md:w-auto"
                  >
                    {category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project, index) => {
                return (
                  <TabsContent value={category} key={index}>
                    <ProjectCard id={index} project={project} specialStyle={true} />
                  </TabsContent>
                );
              })}
            </div>
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
