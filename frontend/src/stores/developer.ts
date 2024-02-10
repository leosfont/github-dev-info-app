import { defineStore } from 'pinia';
import { GitHubDeveloper } from '../interfaces/GitHubDeveloper';
import { DeveloperProfile } from '../interfaces/DeveloperProfile';
import { GitHubRepository } from '../interfaces/GitHubRepository';
import GitHubService from '../services/GithubService';

const githubService = new GitHubService();

export const useDeveloperStore = defineStore('developer', {
  state: () => ({
    developers: [] as GitHubDeveloper[],
    originalList: [] as GitHubDeveloper[],
    developerProfile: {} as DeveloperProfile,
    developerRepositories: [] as GitHubRepository[],
    searchQuery: 'user:wallysonn+user:diego3g+user:filipedeschamps+user:rmanguinho',
  }),
  actions: {
    async fetchDevelopers() {
      const response = await githubService.getSearchUsers(this.searchQuery);
      const developers = response.data.items as GitHubDeveloper[];

      const responses = await Promise.all(
        developers.map(async (developer: GitHubDeveloper) => {
          const response = await githubService.getUser(developer.login);
          const { public_repos, created_at } = response.data;
          return { ...developer, public_repos, created_at };
        })
      );
  
      this.developers = responses;
    },

    filterDevelopers(query: string) {
      if (this.originalList.length === 0) {
        this.originalList = this.developers.slice();
      }

      this.developers = this.originalList.filter((developer) =>
        developer.login.toLowerCase().includes(query.toLowerCase())
      );
    },

    async fetchDeveloper(username: string) {
        const response = await githubService.getUser(username);
        this.developerProfile = response.data;
    },

    async fetchRepositories(username: string) {
        const response = await githubService.getRepositories(username);
        this.developerRepositories = response.data;
    }
  },
});