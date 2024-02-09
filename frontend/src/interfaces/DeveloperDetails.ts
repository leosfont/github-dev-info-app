import { GitHubDeveloper } from "./GitHubDeveloper";

export interface DeveloperDetails extends GitHubDeveloper {
    created_at: string;
}