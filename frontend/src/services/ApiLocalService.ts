import axios, { AxiosResponse } from 'axios';

export default class ApiLocalService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = 'http://localhost:3000';
    }

    getProfile(username: string): Promise<AxiosResponse<any>  | null> {
        return this.handle(`${this.apiUrl}/buscar-local/${username}`, 'get');
    }

    saveProfile(username: string): Promise<AxiosResponse<any>  | null> {
        return this.handle(`${this.apiUrl}/salvar-local/${username}`, 'post');
    }

    private async handle(url: string, method: string = 'get'): Promise<AxiosResponse<any> | null> {
        try {
            const response = method === 'post' ? await axios.post(url) : await axios.get(url);
            return response;
        } catch (error) {
            console.error('Erro ao se comunicar com a API Local:', error);
            return null;
        }
    }
}
