import { defineStore } from 'pinia';
import axios from 'axios';
import { GitHubDeveloper } from '../interfaces/GitHubDeveloper';

export const useDeveloperStore = defineStore('developer', {
  state: () => ({
    developers: [] as GitHubDeveloper[],
    originalList: [] as GitHubDeveloper[],
    searchQuery: 'user:wallysonn+user:diego3g+user:filipedeschamps+user:rmanguinho',
  }),

  actions: {
    async fetchDevelopers() {
      try {
        const response = await axios.get(`https://api.github.com/search/users?q=${this.searchQuery}`);
        this.developers = response.data.items as GitHubDeveloper[];
      } catch (error) {
        console.error('Erro ao buscar desenvolvedores:', error);
      }
    },

    filterDevelopers(query: string) {
      if (this.originalList.length === 0) {
        this.originalList = this.developers.slice();
      }

      this.developers = this.originalList.filter((developer) =>
        developer.login.toLowerCase().includes(query.toLowerCase())
      );
    },

    restoreOriginalList() {
      this.developers = this.originalList.slice();
    },
  },
});