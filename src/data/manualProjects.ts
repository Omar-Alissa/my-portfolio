import type { GitHubRepo } from "../types/project";

//collaborative projects
export const manualProjects: GitHubRepo[] = [
  {
    id: 95, 
    name: "Document assistant",
    description: "A web-based document assistant where users can upload text documents, comment on them and ask questions about them via an “AI assistant”",
    html_url: "https://github.com/AdrianCPO/TheCodefather4",
    homepage: "https://the-codefather4.vercel.app/", 
    language: "TypeScript & Next.js",
    fork: false
  },
  {
    id: 96,
    name: "The movie viewers",
    description: "The movie viewers is a full-stack cinema booking application where users can browse movies, view details, and book tickets with seat selection.",
    html_url: "https://github.com/yaheaalani0/Filmvisarna",
    homepage: "",
    language: "React & Node.js",
    fork: false
  }
];
