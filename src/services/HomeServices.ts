import { Home } from '../types/ServicesProps';
import axios from 'axios';
import { configApi } from '../utils/config';

export async function getAll(): Promise<Home> {
  try {
    const response = await axios.get(`http://${configApi.urlApi}:${configApi.hostApi}/home`);
    return response.data.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}
