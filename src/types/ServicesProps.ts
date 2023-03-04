export interface Projetos {
  id: number;
  titulo: string;
  descricao: string;
  prioridade: number;
  url_github: string;
  url_website: string;
  criado_em: string;
  alterado_em: string;
  habilidades?: Habilidades[];
}

export interface Habilidades {
  id: number;
  titulo: string;
  descricao: string;
  experiencia: number;
  prioridade: number;
  cores: string;
  icones: string;
  criado_em: string;
  alterado_em: string;
  projetos?: Projetos[];
}

export interface SobreMim {
  id: number;
  nome: string;
  texto: string;
  titulo_emprego: string;
  link_github: string;
  link_telegram: string;
  link_instagram: string;
  link_linkedin: string;
  disponivel: boolean;
}

export interface Home {
  projetos: Projetos[];
  habilidades: Habilidades[];
  sobreMim: SobreMim;
}

export interface ResponseServices<T> {
  status: boolean;
  data?: T[];
  info?: {
    msgError?: any;
    msg?: string;
  };
}

export interface Services {
  getAll<T>(): Promise<T[]>;
  getById<T>(id: number | string): Promise<T[]>;
  post<T>(data: T): Promise<ResponseServices<T>>;
  put<T>(id: number | string, data: T): Promise<ResponseServices<T>>;
  delete<T>(id: number | string): Promise<ResponseServices<T>>;
}

export interface BaseUrl {
  apiUrl?: string;
  apiHost?: number;
}
