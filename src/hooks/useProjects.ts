import { useState, useEffect } from "react";
import { fetchGithubRepos } from "../api/github";
import type { GitHubRepo } from "../types/project";

export const useProjects = () => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const repos = await fetchGithubRepos();
        const filtered = repos.filter((repo: GitHubRepo) => !repo.fork);
        setProjects(filtered.slice(0, 6));
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return { projects, loading, error };
};
