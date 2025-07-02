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
    <div className="h-[inherit] xl:py-32 pt-20 xl:mb-0 xl:my-0 text-center xl:text-left max-h-dvh">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-[100px] -left-[210px] z-[0] max-w-[460px] "
      >
        <Avatar opacity={true} />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <h2
            className="h2 z-10">
            My <span className="text-accent">Journey</span> in Development
          </h2>
          <p
            className="hidden xl:flex max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 z-10">
            Ingressei na carreira de TI por interesse em jogos, comecei a modificar códigos para melhorar jogos e, gradualmente, estudei por conta própria. Trabalhei meio período na Fixtoxs como desenvolvedor front-end, evoluindo para full stack. Após um curso em tempo integral, fui monitor na Kenzie Academy e, agora, sou desenvolvedor front-end na Wicomm, além de fazer projetos freelance como full stack.
          </p>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
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
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start scrollbar-none md:max-h-40 max-h-80 xl:overflow-hidden overflow-y-scroll xl:max-h-full">
            {aboutData[index].info.map((item: AboutInfo, itemIndex: number) => (
              <div key={`info-${itemIndex}`} className="flex-1 flex flex-col max-w-max gap-2 items-center text-white/60 xl:items-start">
                <div key={`title-stage-${itemIndex}`} className={`font-light mb-2 md:mb-0 whitespace-nowrap flex items-center gap-3 ${item.title ? "" : "hidden"}`}>
                  <span className="text-white">{item.title}</span>
                  {item.stage && <span className="text-accent">- {item.stage}</span>}
                </div>
                {item.course && (
                  <div key={`course-${itemIndex}`} className="text-sm text-white/80 font-medium">
                    {item.course}
                  </div>
                )}
                {item.grade && (
                  <div key={`grade-${itemIndex}`} className="text-sm text-accent">
                    {item.grade}
                  </div>
                )}
                {!item.course && !item.grade && item.stage && (
                  <div key={`stage-${itemIndex}`}>{item.stage}</div>
                )}
                <div key={`hidden-${itemIndex}`} className="hidden md:flex"></div>
                <div key={`icons-${itemIndex}`} className="flex gap-4 flex-wrap xl:justify-start justify-center xl xl:px-0 px-5 xl:max-w-[500px]">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={`icon-${itemIndex}-${iconIndex}`} className="text-2xl text-white/90">
                      <Icon className="" width={24} height={24} id={icon} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
