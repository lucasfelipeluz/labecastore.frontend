import { ResponseServices, SobreMim } from '../types/ServicesProps';
import axios from 'axios';
import { configApi } from '../utils/config';

export async function getAll(): Promise<SobreMim> {
  try {
    const response = await axios.get(`http://${configApi.urlApi}:${configApi.hostApi}/sobremim`);
    return response.data.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}

export async function post(data: SobreMim): Promise<ResponseServices<SobreMim>> {
  try {
    const response = await axios.post(
      `http://${configApi.urlApi}:${configApi.hostApi}/sobremim`,
      data,
    );
    return response.data;
  } catch (error) {
    throw new Error('Error ao efetuar a requisição');
  }
}
