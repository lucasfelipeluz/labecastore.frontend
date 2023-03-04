// @ts-nocheck
export const configApi = {
  urlApi: import.meta.env.VITE_API_URL || "localhost",
  hostApi: import.meta.env.VITE_API_HOST || "8080",
  serverMode: import.meta.env.VITE_SERVER_MODE || "dev",
  serverOn: import.meta.env.VITE_SERVER_ON || "true",
};
