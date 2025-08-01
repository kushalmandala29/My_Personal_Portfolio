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
    // Navigate to project detail page using the slug
    router.push(`/projects/${project.slug}`);
  };

  return (
    <Card 
      id={id} 
      className="group overflow-hidden relative cursor-pointer hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
      onClick={handleCardClick}
    >
      <CardHeader className="p-0">
        <div
          className="relative w-full h-48 flex items-center justify-center bg-gradient-to-br from-secondary/20 to-secondary/40 overflow-hidden"
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
      <div className="flex-1 px-6 py-4 bg-black text-white flex flex-col justify-start min-h-[220px]">
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4 text-white leading-snug min-h-[3.5rem] flex items-start">{project.name}</h3>
          <p className="text-gray-300 text-base leading-relaxed line-clamp-4">
            {project.description}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
