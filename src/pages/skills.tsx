import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

import Skills from '@/components/Templates/Skills/Skills';
import Transition from '@/components/Other/Transition/Transition';

const SkillsPage = () => {
  return (
    <>
      <Head>
        <title>Skills | Kushal&apos;s Portfolio</title>
        <meta name="description" content="Explore my technical skills including programming languages, web development, AI & ML, databases, and more." />
        <meta name="keywords" content="skills, programming, web development, AI, machine learning, databases, devops" />
        <meta property="og:title" content="Skills | Kushal&apos;s Portfolio" />
        <meta property="og:description" content="Explore my technical skills including programming languages, web development, AI & ML, databases, and more." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourportfolio.com/skills" />
      </Head>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        <Skills />
      </motion.div>
    </>
  );
};

export default SkillsPage;
