exports.config = {
  tests: './z_test/*_test.js',
  output: './z_test_output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3000'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'lab-css-recipes-clone'
};