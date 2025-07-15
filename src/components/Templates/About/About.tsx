import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import ParticlesContainer from "@/components/Other/ParticlesContainer/ParticlesContainer";
import Avatar from "@/components/Other/Avatar/Avatar";
import Icon from "@/components/Other/Icon/Icon";

import { aboutData } from "@/data/about";
import { AboutData, AboutInfo } from "@/interfaces/AboutInterface";


const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIndex(1);
    } else {
      setIndex(0);
    }
  }, []);

  return (
    <div className="min-h-screen xl:py-32 pt-20 xl:mb-0 xl:my-0 text-center xl:text-left">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-[100px] -left-[210px] z-[0] max-w-[460px] "
      >
        <Avatar opacity={true} />
      </motion.div>
      <div className="container mx-auto flex flex-col items-center xl:flex-row gap-x-6 gap-y-8">
        <div className="flex-1 flex flex-col justify-center">
          <h2
            className="h2 z-10">
            My <span className="text-accent">Journey</span> in Development
          </h2>
          <div className="hidden xl:flex flex-col max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 z-10 space-y-4">
            <p>
              I'm Kushal, a final-year B.Tech student specializing in Artificial Intelligence & Data Science with a focus on Cloud and Edge Computing at KL University. Passionate about building innovative, real-world AI solutions, I have hands-on experience in Python, Django, RESTful APIs, and integrating large language models (LLMs) into production systems.
            </p>
            <p>
              In my free time, I love listening to music and playing basketball, which help me stay creative, energized, and balanced.
            </p>
            <p>
              Looking ahead, I'm excited to pursue roles in software engineering, DevOps, cloud engineering, data science, and AI/ML development, where I can apply my skills to build innovative, scalable, and intelligent solutions.
            </p>
          </div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%]">
          <div className="overflow-x-auto scrollbar-none mb-4">
            <div className="flex gap-4 xl:gap-x-8 mx-auto xl:mx-0 min-w-max px-2 xl:px-0">
              {aboutData.map((item: AboutData, itemIndex: number) => {
                const isActive = index === itemIndex;
                const isFirstTab = itemIndex === 0;
                
                return (
                  <div
                    key={`about-${itemIndex}`}
                    className={`
                      ${isActive ? "text-accent after:w-[100%] after:bg-accent" : "text-white/60 after:w-8 after:bg-white"}
                      ${isFirstTab ? "xl:hidden" : ""}
                      cursor-pointer capitalize xl:text-lg relative 
                      after:h-[2px] after:absolute after:-bottom-1 after:left-0 
                      after:transition-all after:duration-300
                      text-[15px] hover:text-accent transition-all duration-300
                      whitespace-nowrap flex-shrink-0
                    `}
                    onClick={() => {
                      setIndex(itemIndex);
                    }}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full">
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData.map((tabItem: AboutData, tabIndex: number) => (
                <div key={`tab-${tabIndex}`} className={`w-full ${index === tabIndex ? 'block' : 'hidden'}`}>
                  {tabItem.info.map((item: AboutInfo, itemIndex: number) => (
                    <div key={`info-${tabIndex}-${itemIndex}`} className="flex-1 flex flex-col max-w-max gap-2 items-center text-white/60 xl:items-start mb-6">
                      <div key={`title-stage-${tabIndex}-${itemIndex}`} className={`font-light mb-2 md:mb-0 whitespace-nowrap flex items-center gap-3 ${item.title ? "" : "hidden"}`}>
                        <span className="text-white">{item.title}</span>
                        {item.stage && <span className="text-accent">- {item.stage}</span>}
                      </div>
                      {item.course && (
                        <div key={`course-${tabIndex}-${itemIndex}`} className="text-sm text-white/80 font-medium">
                          {item.course}
                        </div>
                      )}
                      {item.grade && (
                        <div key={`grade-${tabIndex}-${itemIndex}`} className="text-sm text-accent">
                          {item.grade}
                        </div>
                      )}
                      {!item.course && !item.grade && item.stage && (
                        <div key={`stage-${tabIndex}-${itemIndex}`}>{item.stage}</div>
                      )}
                      <div key={`hidden-${tabIndex}-${itemIndex}`} className="hidden md:flex"></div>
                      <div key={`icons-${tabIndex}-${itemIndex}`} className="flex gap-4 flex-wrap xl:justify-start justify-center xl xl:px-0 px-5 xl:max-w-[500px]">
                        {item.icons?.map((icon, iconIndex) => (
                          <div key={`icon-${tabIndex}-${itemIndex}-${iconIndex}`} className="text-2xl text-white/90">
                            <Icon className="" width={24} height={24} id={icon} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-[100vw] h-full absolute right-0 bottom-0 -z-10">
        <div className="xl:opacity-100 opacity-30 bg-paints bg-cover bg-center bg-no-repeat hue-rotate-[-20deg] w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default About;