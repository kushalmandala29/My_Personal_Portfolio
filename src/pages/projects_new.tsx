import Seo from "@/components/Other/Seo";
import ProjectsPageComponent from "@/components/Templates/ProjectsPage/ProjectsPage";

const ProjectsPage = () => {
  return (
    <>
      <Seo
        title="Projects • Kushal Mandala • Portfolio"
        description="Explore a gallery of inspiring and innovative projects. Each project is a demonstration of my commitment to technical excellence and delivering tailored solutions for clients."
      />
      <ProjectsPageComponent />
    </>
  );
};

export default ProjectsPage;
