import { defineConfig, devices } from "@playwright/test";
import * as path from "node:path";
export const userSessionPath = path.join(__dirname, 'tmp/userSession.json');

export default defineConfig({
  testDir: "./tests",
  timeout: 60 * 1000,
  fullyParallel: true,
  reporter: [["html", { open: "never" }]],
  use: {
    baseURL: "",
    trace: "on",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    
  ],
});
