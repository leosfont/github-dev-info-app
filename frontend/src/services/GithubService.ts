import axios, { AxiosResponse } from 'axios';

export default class GitHubService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = 'https://api.github.com';
    }

    async getUser(username: string): Promise<AxiosResponse<any> | null> {
        return this.handle(`${this.apiUrl}/users/${username}`);
    }

    async getSearchUsers(searchQuery: string = ''): Promise<AxiosResponse<any> | null> {
        return this.handle(`${this.apiUrl}/search/users?q=${searchQuery}`);
    }

    async getRepositories(username: string): Promise<AxiosResponse<any> | null> {
        return this.handle(`${this.apiUrl}/users/${username}/repos`);
    }

    private async handle(url: string): Promise<AxiosResponse<any> | null> {
        try {
            const response = await axios.get(url);
            return response;
        } catch (error) {
            console.error('Erro ao se comunicar com a API do Github:', error);
            return null;
        }
    }
}
