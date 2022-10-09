/*
|--------------------------------------------------------------------------
| Browser-sync config file
|--------------------------------------------------------------------------
|
| For up-to-date information about the options:
|   http://www.browsersync.io/docs/options/
|
| There are more options than you see here, these are just the ones that are
| set internally. See the website for more info.
|
|
 */
module.exports = {
  ui: {
    port: 3001,
  },
  files: [
    "./04/src/html/index.html",
    "./04/src/scss/pages/style.scss':'./04/src/css/style.css'",
  ],
  watchEvents: ["change"],
  watch: false,
  ignore: [],
  single: false,
  watchOptions: {
    ignoreInitial: true,
  },
  server: "04",
  proxy: false,
  port: 3000,
  middleware: false,
  serveStatic: [],
};