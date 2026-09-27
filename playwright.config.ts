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
      name: "setup-propozycja",
      testMatch: ["tests/setup/setup-propozycja.ts"],
      use: { ...devices["Desktop Chrome"] },
      
    },
    {
      name: "propozycja",
      testMatch: ["tests/test-propozycja.spec.ts"],
      dependencies: ["setup-propozycja"],
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "setup-lista",
      testMatch: ["tests/setup/setup-lista.ts"],
      use: { ...devices["Desktop Chrome"], },
      
    },
    {
      name: "lista",
      testMatch: ["tests/test-lista.spec.ts"],
      dependencies: ["setup-lista"],
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "setup-tag",
      testMatch: ["tests/setup/setup-tags.spec.ts"],
      retries: 3,
      use: { ...devices["Desktop Chrome"], storageState: userSessionPathMarcinW },
      
    },
    {
      name: "tag",
      testMatch: ["tests/test-tag.spec.ts"],
      dependencies: ["setup-tag"],
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
