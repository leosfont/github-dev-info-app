import { GitHubDeveloper } from "./GitHubDeveloper";

export interface DeveloperProfile extends GitHubDeveloper {
    bio: string;
    company: string;
    location: string;
    followers: number;
    following: number;
    public_repos: number;
    created_at: string;
}