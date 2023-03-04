import { ResponseServices, Habilidades } from '../types/ServicesProps';
import axios from 'axios';
import { configApi } from '../utils/config';

export async function getAll(): Promise<Habilidades[]> {
  try {
    const response = await axios.get(`http://${configApi.urlApi}:${configApi.hostApi}/habilidades`);
    return response.data.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function getById(id: string | number): Promise<Habilidades[]> {
  try {
    const response = await axios.get(
      `http://${configApi.urlApi}:${configApi.hostApi}/habilidades?id=${id}`,
    );
    return response.data.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function post(data: Habilidades): Promise<ResponseServices<Habilidades>> {
  try {
    const response = await axios.post(
      `http://${configApi.urlApi}:${configApi.hostApi}/habilidades`,
      data,
    );
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function put(
  id: string | number,
  data: Habilidades,
): Promise<ResponseServices<Habilidades>> {
  try {
    const response = await axios.put(
      `http://${configApi.urlApi}:${configApi.hostApi}/habilidades/${id}`,
      data,
    );
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function deleteMutation(id: string | number): Promise<ResponseServices<Habilidades>> {
  try {
    const response = await axios.delete(
      `http://${configApi.urlApi}:${configApi.hostApi}/habilidades/${id}`,
    );
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}
