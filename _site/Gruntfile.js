module.exports = function(grunt) {

  grunt.initConfig({
    cssmin: {
      target: {
        files: {
          '_site/css/main.css': '_site/css/main.css'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      single_file: {
        src: '_site/css/main.css'
      }

    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['cssmin', 'autoprefixer']);
};
