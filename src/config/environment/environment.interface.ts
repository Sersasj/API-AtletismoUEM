export interface IEnvironmentVariables {
  getNodeEnv(): string;
  getPort(): string;
  getJwtSecret(): string;
  getDatabaseUrl(): string;
}
