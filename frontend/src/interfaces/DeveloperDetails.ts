import { GitHubDeveloper } from "./GitHubDeveloper";

export interface DeveloperDetails extends GitHubDeveloper {
    bio: string;
    company: string;
    location: string;
    followers: number;
    following: number;
    created_at: string;
}