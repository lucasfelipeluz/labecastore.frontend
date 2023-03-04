import { ResponseServices, Projetos } from '../types/ServicesProps';
import axios from 'axios';
import { configApi } from '../utils/config';

export async function getAll(): Promise<Projetos[]> {
  try {
    const response = await axios.get(`http://${configApi.urlApi}:${configApi.hostApi}/projetos`);
    return response.data.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function getById(id: string | number): Promise<Projetos[]> {
  try {
    const response = await axios.get(
      `http://${configApi.urlApi}:${configApi.hostApi}/projetos?id=${id}`,
    );
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function post(data: Projetos): Promise<ResponseServices<Projetos>> {
  try {
    const response = await axios.post(
      `http://${configApi.urlApi}:${configApi.hostApi}/projetos`,
      data,
    );
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function put(
  id: string | number,
  data: Projetos,
): Promise<ResponseServices<Projetos>> {
  try {
    const response = await axios.put(
      `http://${configApi.urlApi}:${configApi.hostApi}/projetos/${id}`,
      data,
    );
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function deleteMutation(id: string | number): Promise<ResponseServices<Projetos>> {
  try {
    const response = await axios.delete(
      `http://${configApi.urlApi}:${configApi.hostApi}/projetos/${id}`,
    );
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}
