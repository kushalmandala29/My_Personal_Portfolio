import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

import Certifications from '@/components/Templates/Certifications/Certifications';
import Transition from '@/components/Other/Transition/Transition';

const CertificationsPage = () => {
  return (
    <>
      <Head>
        <title>Certifications | Kushal&apos;s Portfolio</title>
        <meta name="description" content="View my professional certifications and achievements from Oracle, Salesforce, IBM, and other leading technology companies." />
        <meta name="keywords" content="certifications, achievements, Oracle, Salesforce, IBM, cloud, AI, professional development" />
        <meta property="og:title" content="Certifications | Kushal&apos;s Portfolio" />
        <meta property="og:description" content="View my professional certifications and achievements from Oracle, Salesforce, IBM, and other leading technology companies." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourportfolio.com/certifications" />
      </Head>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        <Certifications />
      </motion.div>
    </>
  );
};

export default CertificationsPage;
