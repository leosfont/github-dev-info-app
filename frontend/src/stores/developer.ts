import { defineStore } from 'pinia';
import axios from 'axios';

export const useDeveloperStore = defineStore('developer', {
  state: () => ({
    developers: [],
    searchQuery: 'user:wallysonn+user:diego3g+user:filipedeschamps+user:rmanguinho',
  }),

  actions: {
    async fetchDevelopers() {
      try {
        const response = await axios.get(`https://api.github.com/search/users?q=${this.searchQuery}`);

        this.developers = response.data.items;
      } catch (error) {
        console.error('Erro ao buscar desenvolvedores:', error);
      }
    },
  },
});
