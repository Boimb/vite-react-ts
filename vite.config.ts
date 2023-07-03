/// <reference types="vitest" />

import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./testSetup.ts",
    coverage: {
      provider: "istanbul",
      exclude: [...configDefaults.exclude, "__mocks__/*"],
    },
  },
});
