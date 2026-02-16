import { SOCIAL } from "@/lib/constants";

export interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    topics: string[];
    updated_at: string;
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
    try {
        const res = await fetch(
            `https://api.github.com/users/${SOCIAL.githubUsername}/repos?sort=updated&per_page=10&type=all`,
            { next: { revalidate: 3600 } } // ISR: revalidate every hour
        );

        if (!res.ok) return [];

        const data: GitHubRepo[] = await res.json();
        return data
            .filter(
                (repo) =>
                    !repo.name.includes("fork") &&
                    repo.description &&
                    repo.name.toLowerCase() !== "architecx" &&
                    !repo.name.toLowerCase().includes("portfolio")
            )
            .sort(
                (a, b) =>
                    b.stargazers_count - a.stargazers_count ||
                    new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
            )
            .slice(0, 3);
    } catch {
        return [];
    }
}
