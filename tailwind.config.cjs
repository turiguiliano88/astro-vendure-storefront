const themes = require("./tailwind-themes");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: themes.defaultTheme,
  plugins: [],
};
