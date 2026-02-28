import type { GitHubRepo } from "../types/project";

interface Props {
  project: GitHubRepo;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="bg-[#505721] p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-[#a3a380] flex flex-col h-full">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 capitalize">
          {project.name.replace(/-/g, ' ')}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description || "No description provided for this project."}
        </p>
      </div>

      <div className="mt-4">
        {project.language && (
          <span className="text-xs font-medium bg-[#a3a380] text-white px-2 py-1 rounded-full">
            {project.language}
          </span>
        )}
        
        <div className="flex gap-4 mt-6">
          <a 
            href={project.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white hover:text-[#a3a380] transition-colors"
          >
            GitHub 
          </a>
          {project.homepage && (
            <a 
              href={project.homepage} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#a3a380] hover:text-white transition-colors"
            >
              Live Demo 
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;