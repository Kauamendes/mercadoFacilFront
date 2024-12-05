import axios from 'axios';
import { LoginData } from '../Interfaces/LoginData';
import { Usuario } from '../Interfaces/Usuario';

const apiClient = axios.create({
    baseURL: 'https://tcwhl22p-5165.brs.devtunnels.ms',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const LoginAPI = (loginData: LoginData) => {
    return apiClient.post('/api/Login/login', loginData)
}

export const CriarUsuario = (dadosUsuario: Usuario) => {
    return apiClient.post('/User', dadosUsuario)
}

export const AtualizarUsuario = async (dadosUsuario: Usuario) => {
    try {
        const response = await apiClient.put("/User",
            dadosUsuario,
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar usuário: ', error);
        throw error;
    }
}

export const DeletarUsuario = (id: string) => {
    return apiClient.delete(`/UserController/DeleteUser/${id}`)
}

export const ListarUsuarios = async () => {
    try {
        const response = await apiClient.get("/User",
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao obter acao: ', error);
        throw error;
    }
}

export const getAcaoPorCodigo = async (symbol: string) => {
    try {
        const response = await apiClient.get(`/Share/${symbol}`,
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao obter acao: ', error);
        throw error;
    }
}

export const buscarAcoes = async (page: number, resultsByPage: number) => {
    try {
        const response = await apiClient.get(`/Share/${page}, ${resultsByPage}`,
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao retornar lista de ações paginada: ', error);
        throw error;
    }
}

export const buscarAcoesFavoritas = async (page: number, resultsByPage: number) => {
    try {
        const response = await apiClient.get(`/Share/${page}, ${resultsByPage}`,
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao retornar lista de ações paginada: ', error);
        throw error;
    }
}