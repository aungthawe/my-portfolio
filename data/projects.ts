export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  iconName: "FolderGit2" | "Users" | "Bot"; // Maps strictly to Lucide components
}

export const projectsData: ProjectItem[] = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing my skills, projects and experience using Next.js and Tailwind.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/aungthawe/my-portfolio",
    iconName: "FolderGit2",
  },
  {
    title: "Employee Management System",
    description: "CRUD application built with Spring Boot and PostgreSQL.",
    tech: ["Spring Boot", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/employee-system",
    iconName: "Users",
  },
  {
    title: "Room Reservation AI",
    description:
      "Used AI model to auto-handle reservation data and validation.",
    tech: ["Gemini AI", "Firebase"],
    githubUrl: "https://github.com/yourusername/reservation-ai",
    iconName: "Bot",
  },
];
