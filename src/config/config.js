const env = process.env.NODE_ENV || "local";
const config = require("./config.json");
const envConfig = config[env.trim()];
//This looks in every custom key in json config and sets value to env variable for later use in app
Object.keys(envConfig).forEach(key => {
  process.env[key] = envConfig[key];
});
