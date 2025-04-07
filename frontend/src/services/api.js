import axios from 'axios';

const BASE_API_URL = process.env.API_URL || 'https://localhost:3001'

const api = axios.create({
    baseURL:BASE_API_URL,
    headers:{
        'Content-Type':'application/json()',
    },
});

export const getAllItems = async () => {
    const response = api.get("");
    return response.data;
}

export const getSingleItem = async (id) => {
    const response = api.get("");
    return response.data;
}

export const createItem = async (itemData) => {
    const response = api.post("");
    return response.data;
}

export const updateItem = async (id,itemData) => {
    const response = api.patch("");
    return response.data;
}

export const deleteItem = async (id) => {
    const response = api.delete("");
}




