import axios, { AxiosResponse } from 'axios';

export default class GitHubService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = 'https://api.github.com';
    }

    getUser(username: string): Promise<AxiosResponse<any>> {
        return this.handle(`${this.apiUrl}/users/${username}`);
    }

    getSearchUsers(searchQuery: string = ''): Promise<AxiosResponse<any>> {
        return this.handle(`${this.apiUrl}/search/users?q=${searchQuery}`);
    }

    getRepositories(username: string): Promise<AxiosResponse<any>> {
        return this.handle(`${this.apiUrl}/users/${username}/repos`);
    }

    handle(url: string): Promise<AxiosResponse<any>> {
        return new Promise<AxiosResponse<any>>(async (resolve, reject) => {
            try {
                const response = await axios.get(url);
                resolve(response);
            } catch (error) {
                console.error('Erro ao buscar detalhes do desenvolvedor:', error);
                reject(error);
            }
        });
    }
}
