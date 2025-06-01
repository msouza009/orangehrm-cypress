const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '71ov9i',
  viewportWidth: 1280,
  viewportHeight: 1000,
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    setupNodeEvents(on, config) {
    },
  },
});
