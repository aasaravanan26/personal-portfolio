type ProjectCardProps = {
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
  };
  
  export default function ProjectCard({
    title,
    description,
    techStack,
    githubUrl,
  }: ProjectCardProps) {
    return (
      <div className="group border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-800">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-sm font-medium text-gray-600 dark:text-gray-400"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    );
  }
  