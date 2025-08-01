import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  RiGithubFill, 
  RiExternalLinkFill, 
  RiArrowLeftLine,
  RiCodeSSlashLine,
  RiLightbulbLine,
  RiStackLine
} from 'react-icons/ri';

import Seo from '@/components/Other/Seo';
import { fadeIn } from '@/components/Animations/FadeIn';
import { Badge } from '@/components/Other/UI/badge';
import { Card, CardHeader, CardContent } from '@/components/Other/UI/card';
import ParticlesContainer from '@/components/Other/ParticlesContainer/ParticlesContainer';

import { projectData } from '@/data/project';

interface ProjectDetailProps {
  project: {
    id: string;
    slug: string;
    image: string;
    category: string;
    name: string;
    description: string;
    longDescription: string;
    technologies: string[];
    features: string[];
    challenges: string;
    learnings: string;
    link: string;
    github: string;
  };
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const router = useRouter();

  const handleBackToProjects = () => {
    // Navigate to about page with projects hash
    router.push('/about#projects');
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Seo
        title={`${project.name} • Kushal Mandala • Portfolio`}
        description={project.description}
      />
      
      <div className="xl:h-[inherit] h-auto xl:pt-[3%] xl:py-24 pt-12 pb-14 xl:pb-0 xl:mt-0 flex items-start max-h-dvh relative overflow-hidden">
        <ParticlesContainer />
        
        <div className="container mx-auto relative z-10 w-full max-h-[90vh] overflow-y-auto scrollbar-custom pt-16 xl:pt-8">
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full"
          >
            {/* Back Button */}
            <motion.div
              variants={fadeIn("up", 0.1)}
              className="mb-8 mt-4"
            >
              <button
                onClick={handleBackToProjects}
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300 cursor-pointer"
                type="button"
              >
                <RiArrowLeftLine className="text-xl" />
                <span>Back to Projects</span>
              </button>
            </motion.div>

            {/* Project Header */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              className="text-center xl:text-left mb-12"
            >
              <motion.h1 
                className="h2 mb-4 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <span className="relative z-10">
                  {project.name} <span className="text-accent animate-pulse">.</span>
                </span>
                <motion.div 
                  className="absolute -inset-2 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-lg opacity-0 blur-xl"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.h1>
              <p className="text-lg text-white/90 max-w-3xl mx-auto xl:mx-0">
                {project.description}
              </p>
            </motion.div>

            {/* Project Image and Links */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="mb-12"
            >
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={project.image}
                    width={600}
                    height={400}
                    alt={project.name}
                    className="w-full h-96 object-cover"
                  />
                </CardHeader>
              </Card>
            </motion.div>

            {/* Project Details Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* About Section */}
              <motion.div variants={fadeIn("right", 0.6)}>
                <Card className="h-full bg-black border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <RiCodeSSlashLine className="text-2xl text-accent" />
                      <h3 className="text-xl font-semibold text-white">Description</h3>
                    </div>
                    <p className="text-white leading-relaxed">
                      {project.longDescription}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Technologies */}
              <motion.div variants={fadeIn("left", 0.6)}>
                <Card className="h-full bg-black border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <RiStackLine className="text-2xl text-accent" />
                      <h3 className="text-xl font-semibold text-white">Technology stack</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary"
                          className="text-sm py-1 px-3 bg-white text-black border border-gray-300 hover:bg-gray-100"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Features and Challenges */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Features */}
              <motion.div variants={fadeIn("up", 0.8)}>
                <Card className="h-full bg-black border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <RiLightbulbLine className="text-2xl text-accent" />
                      <h3 className="text-xl font-semibold text-white">Features</h3>
                    </div>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-white">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Challenges */}
              <motion.div variants={fadeIn("up", 1.0)}>
                <Card className="h-full bg-black border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">Challenges</h3>
                    <p className="text-white leading-relaxed">
                      {project.challenges}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Learnings */}
              <motion.div variants={fadeIn("up", 1.2)}>
                <Card className="h-full bg-black border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">Learnings</h3>
                    <p className="text-white leading-relaxed">
                      {project.learnings}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div 
              variants={fadeIn("up", 1.4)}
              className="flex justify-center gap-6 mt-12 pb-8"
            >
              <Link
                target="_blank"
                href={project.github}
                className="flex items-center gap-3 bg-secondary hover:bg-secondary/80 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <RiGithubFill className="text-xl" />
                View Git Repo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectData.map((project) => ({
    params: { id: project.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Find project by slug
  const project = projectData.find((project) => project.slug === params?.id);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default ProjectDetail;
