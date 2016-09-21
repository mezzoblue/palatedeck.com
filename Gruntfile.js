module.exports = function(grunt) {

  grunt.initConfig({
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      single_file: {
        src: '_site/css/main.css'
      }
    },
    cssmin: {
      target: {
        files: {
          '_site/css/main.css': '_site/css/main.css'
        }
      }
    },
    smarttext: {
      options: {
        // the defaults are great
      },
      target : {
        files: [{
          'expand': true,
          'src': ['_site/**/*.html'],
          'dest': '.'
        }],
      },
    },    
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-smarttext');

  grunt.registerTask('default', ['autoprefixer', 'cssmin', 'smarttext']);
};
