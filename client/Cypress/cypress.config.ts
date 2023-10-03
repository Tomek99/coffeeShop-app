import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportWidth: 1620,
    viewportHeight: 1080,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalStudio: true,
    defaultCommandTimeout: 4000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
