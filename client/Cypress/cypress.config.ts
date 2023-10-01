import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportWidth: 1620,
    viewportHeight: 1080,
    watchForFileChanges: false,
    defaultCommandTimeout: 3000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
