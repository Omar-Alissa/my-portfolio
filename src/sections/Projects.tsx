import { useProjects } from "../hooks/useProjects";
import ProjectCard from "../components/projectCard";

const Projects = () => {
  const { projects, loading, error } = useProjects();

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen bg-[#21363b]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#a3a380]"></div>
    </div>
  );

  if (error) return (
    <div className="text-center mt-20 text-red-500">
      Error: {error}
    </div>
  );

  return (
    <section id="projects" className="min-h-screen bg-[#21363b] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
  
export default Projects;