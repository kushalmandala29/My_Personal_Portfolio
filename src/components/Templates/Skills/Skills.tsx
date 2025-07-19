import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/components/Animations/FadeIn';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C', badge: 'https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white' },
      { name: 'C++', badge: 'https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white' },
      { name: 'Python', badge: 'https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54' },
      { name: 'R', badge: 'https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white' },
      { name: 'Java', badge: 'https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white' },
      { name: 'PHP', badge: 'https://img.shields.io/badge/PHP-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white' },
      { name: 'JavaScript', badge: 'https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' }
    ]
  },
  {
    category: 'Web & Backend Development',
    skills: [
      { name: 'HTML5', badge: 'https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' },
      { name: 'CSS3', badge: 'https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' },
      { name: 'React', badge: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
      { name: 'Tailwind CSS', badge: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
      { name: 'Flask', badge: 'https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white' },
      { name: 'Spring Boot', badge: 'https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white' },
      { name: 'Streamlit', badge: 'https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white' }
    ]
  },
  {
    category: 'AI, Data Science & ML',
    skills: [
      { name: 'Pandas', badge: 'https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white' },
      { name: 'Numpy', badge: 'https://img.shields.io/badge/Numpy-013243?style=for-the-badge&logo=numpy&logoColor=white' },
      { name: 'Matplotlib', badge: 'https://img.shields.io/badge/Matplotlib-11557c?style=for-the-badge&logo=matplotlib&logoColor=white' },
      { name: 'Scikit-learn', badge: 'https://img.shields.io/badge/scikit--learn-f7931e?style=for-the-badge&logo=scikit-learn&logoColor=white' },
      { name: 'OpenAI', badge: 'https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white' },
      { name: 'Hugging Face', badge: 'https://img.shields.io/badge/Hugging_Face-FFD21F?style=for-the-badge&logo=huggingface&logoColor=black' },
      { name: 'Google Gemini', badge: 'https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white' }
    ]
  },
  {
    category: 'Database Technologies',
    skills: [
      { name: 'MySQL', badge: 'https://img.shields.io/badge/MySQL-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white' },
      { name: 'SQLite', badge: 'https://img.shields.io/badge/SQLite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white' },
      { name: 'Oracle DB', badge: 'https://img.shields.io/badge/Oracle_DB-F80000?style=for-the-badge&logo=oracle&logoColor=white' }
    ]
  },
  {
    category: 'Deployment & DevOps',
    skills: [
      { name: 'Netlify', badge: 'https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white' },
      { name: 'Render', badge: 'https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black' },
      { name: 'Docker', badge: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white' },
      { name: 'GitHub Actions', badge: 'https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white' }
    ]
  },
  {
    category: 'Tools & IDEs',
    skills: [
      { name: 'VS Code', badge: 'https://img.shields.io/badge/VS_Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
      { name: 'PyCharm', badge: 'https://img.shields.io/badge/PyCharm-000000?style=for-the-badge&logo=pycharm&logoColor=white' },
      { name: 'Eclipse', badge: 'https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse-ide&logoColor=white' },
      { name: 'Jupyter', badge: 'https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white' },
      { name: 'Google Colab', badge: 'https://img.shields.io/badge/Google_Colab-F9AB00?style=for-the-badge&logo=google-colab&logoColor=black' }
    ]
  },
  {
    category: 'Collaboration & Version Control',
    skills: [
      { name: 'Git', badge: 'https://img.shields.io/badge/Git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white' },
      { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' }
    ]
  },
  {
    category: 'Office & Management Tools',
    skills: [
      { name: 'Microsoft Word', badge: 'https://img.shields.io/badge/Microsoft_Word-2B579A?style=for-the-badge&logo=microsoft-word&logoColor=white' },
      { name: 'Microsoft PowerPoint', badge: 'https://img.shields.io/badge/Microsoft_PowerPoint-B7472A?style=for-the-badge&logo=microsoft-powerpoint&logoColor=white' },
      { name: 'Microsoft Excel', badge: 'https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white' },
      { name: 'Google Sheets', badge: 'https://img.shields.io/badge/Google_Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white' }
    ]
  }
];

const Skills = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto scrollbar-none">
        {skillsData.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: categoryIndex * 0.1,
              duration: 0.5,
              ease: "easeOut"
            }}
            className="group relative mb-4"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 transition-all duration-300 hover:bg-white/15 hover:border-accent/50">
              <h3 className="text-lg font-semibold text-white mb-3 text-center">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={skill.badge}
                      alt={skill.name}
                      className="transition-all duration-300 hover:brightness-110 h-6"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
