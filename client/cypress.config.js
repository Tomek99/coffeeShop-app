const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 4000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
