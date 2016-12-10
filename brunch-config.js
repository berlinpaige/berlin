module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: {
        'vendor.css': /^bower_components/,
        'app.css': /^app/
      }
    }
  },

  plugins: {
    babel: {presets: ['es2015', 'react']},
    stylus: {
      modules: true
    }
  }
};
