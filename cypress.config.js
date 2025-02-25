const { defineConfig } = require("cypress");
const dotenv = require("dotenv");

dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://openlibrary.org", // TODO: Find better solution than this
    defaultCommandTimeout: 10000,
    viewportWidth: 1600,
    viewportHeight: 1200,

    env: {
      base_url: process.env.BASE_URL,
      user_name: process.env.USER_NAME,
      password: process.env.PASSWORD,
    },
  },
});
