import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import ParticlesContainer from "@/components/Other/ParticlesContainer/ParticlesContainer";
import ProjectsBtn from "@/components/Other/ProjectsBtn/ProjectsBtn";
import ResumeBtn from "@/components/Other/ResumeBtn/ResumeBtn";
import Avatar from "@/components/Other/Avatar/Avatar";

const Home = () => {

  return (
    <div className="bg-gradient bg-contain bg-repeat bg-bottom max-h-dvh">
      <div className="w-full bg-cube h-screen  from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-start xl:pt-[6%] pt-16 mb-14 xl:mb-0 xl:mt-0 xl:text-left h-full container mx-auto relative z-10">
          <h1
            className="h1 xl:mt-8 mt-0 mx-auto xl:mx-0 mb-8 w-fit">
            Hello, My name is <br /> 
            <span className="text-accent">Kushal</span>
          </h1>
          <p
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-8">
            I'm a 3rd-year AI & Data Science student at KL University with a strong passion for building solutions that bridge data, code, and the cloud. 
          </p>
          
          {/* Buttons container */}
          <div className="flex flex-col xl:flex-row gap-4 xl:gap-6 items-center xl:items-start">
            {/* Mobile - Projects button */}
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            
            {/* Desktop - Both buttons side by side */}
            <div className="hidden xl:flex gap-6 items-center">
              <motion.div
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <ProjectsBtn />
              </motion.div>
              
              <motion.div
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <ResumeBtn />
              </motion.div>
            </div>
            
            {/* Mobile - Resume button */}
            <div className="flex justify-center xl:hidden">
              <motion.div
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <ResumeBtn />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100vw] h-full absolute right-0 bottom-0">
        <div className="xl:opacity-100 opacity-30 bg-paints bg-cover bg-center bg-no-repeat hue-rotate-[-20deg] w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full xl:h-full max-w-[320px] xl:max-w-[460px] xl:max-h-[678px] absolute -bottom-0 xl:-bottom-20 xl:right-[180px] ">
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
