import * as path from "node:path";
import dotenv from "dotenv";

const environment = process.env.TEST_ENV ?? "qa";
const envFile = path.resolve(process.cwd(), `.env.${environment}`);
const result = dotenv.config({ path: envFile });

function requiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}. ` +
        `Add it to ${envFile} or configure it in the process environment.`,
    );
  }

  return value;
}

export const env = {
  baseURL: process.env.BASE_URL ?? "https://kislist.com",
  kissMarcinW: process.env.kissMarcinW ?? "",
  kissPiotr: process.env.kissPiotr ?? "",
  kissAnna: process.env.kissAnna ?? "",
  kissMichalina: process.env.kissMichalina ?? "",
  kissMarcin: process.env.kissMarcin ?? "",
  kissPassword: requiredEnv("kissPassword"),
};

