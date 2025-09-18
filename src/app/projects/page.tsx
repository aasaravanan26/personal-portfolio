"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import TypingText from "@/components/TypingText";

const projects = [
  {
    title: "Mini Parallel Query Engine",
    description:
      "A lightweight, local parallel query engine that parses SQL, validates semantics, and executes queries on parquet datasets.",
    techStack: ["Python", "Redis", "Parallel Programming"],
    githubUrl: "https://github.com/aasaravanan26/parallel-query-executor/",
    status: "In progress"
  },
  {
    title: "MapReduce",
    description:
      "A model that processes large datasets in parallel using map and reduce operations across multiple machines.",
    techStack: ["C", "MPI", "Open MP", "Parallel Programming"],
    githubUrl: "https://github.com/BullPointe/MapReduce",
    status: "Completed"
  },
  {
    title: "Personal Portfolio",
    description: "A personal website to showcase my projects, blog posts, and professional profile.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/aasaravanan26/personal-portfolio",
    status: "In progress / Published"
  },
  {
    title: "Video Watching Behavior vs Student Performance",
    description: "Studied how student video engagement affects quiz scores using clustering, regression models, and neural networks.",
    techStack: ["Python", "scikit-learn", "Pandas", "Seaborn"],
    liveDemoUrl: "/student_performance_ML.pdf",
    status: "Completed"
  }
];

const uniqueTags = [
    "All",
    ...new Set(projects.flatMap((project) => project.techStack)),
  ];

  
export default function ProjectsPage() {
    const [selectedTag, setSelectedTag] = useState("All");

    const filteredProjects =
      selectedTag === "All"
        ? projects
        : projects.filter((project) =>
            project.techStack.includes(selectedTag)
          );
  
    return (
      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
        <TypingText text="A few things I've built recently!" speed={90} />
        <div className="mb-8 flex flex-wrap gap-3">
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 text-sm rounded-full border ${
                selectedTag === tag
                  ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                  : "text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
              } transition`}
            >
              {tag}
            </button>
          ))}
        </div>
  
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
    );
}
