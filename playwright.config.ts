import { defineConfig, devices } from "@playwright/test";
import * as path from "node:path";
import { env } from "./env";

export const userSessionPathMarcinW = path.join(__dirname, 'tmp/userSessionMarcinW.json');
export const userSessionPathPiotr = path.join(__dirname, 'tmp/userSessionPiotr.json');
export const userSessionPathAnna = path.join(__dirname, 'tmp/userSessionAnna.json');
export const userSessionPathMichalina = path.join(__dirname, 'tmp/userSessionMichalina.json');
export const userSessionPathMarcin = path.join(__dirname, 'tmp/userSessionMarcin.json');

export default defineConfig({
  testDir: "./tests",
  timeout: 60 * 1000,
  fullyParallel: true,
  reporter: [["html", { open: "never" }]],
  use: {
    baseURL: env.baseURL,
    trace: "on",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    
  ],
});
