import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  RiGithubFill,
  RiExternalLinkFill
} from "react-icons/ri";

import { Card, CardHeader } from "@/components/Other/UI/card";
import { Badge } from "@/components/Other/UI/badge";

import { ProjectCardInterface } from "@/interfaces/ProjectInterface";

const ProjectCard = ({ project, specialStyle, id }: ProjectCardInterface) => {
  const cardClass = specialStyle ? "min-description-height" : "";
  const router = useRouter();

  const handleCardClick = () => {
    // Navigate to project detail page
    router.push(`/projects/${project.id}`);
  };

  return (
    <Card 
      id={id} 
      className="group overflow-hidden relative cursor-pointer hover:shadow-2xl transition-all duration-300"
      onClick={handleCardClick}
    >
      <CardHeader className="p-0">
        <div
          className="relative w-full h-72 flex items-center justify-center bg-gradient-to-br from-secondary/20 to-secondary/40 overflow-hidden"
        >
          <Image
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={project.image}
            width={1024}
            height={1056}
            alt="Project Image"
          />
        </div>
      </CardHeader>
      <div className="h-64 px-8 py-6 bg-black text-white">
        <p className="h4 mb-1 text-white">{project.name}</p>
        <p
          className={`text-gray-300
                text-lg  ${cardClass}`}
        >
          {project.description}
        </p>
        
      </div>
    </Card>
  );
};

export default ProjectCard;
