export const fetchGithubRepos = async () => {
  try {
    const userName = "Omar-Alissa";
    const response = await fetch(`https://api.github.com/users/${userName}/repos?sort=updated`);

    if(!response.ok) {
      throw new Error(`GitHub API Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Critical API Failure:", error);
    
    throw error;
  }
}