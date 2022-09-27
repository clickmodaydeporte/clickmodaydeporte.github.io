import configJson from "./env.json";

interface EnvConfig {
  dashboardId: string;
  googleApiKey: string;
}

export const config = configJson as EnvConfig;
