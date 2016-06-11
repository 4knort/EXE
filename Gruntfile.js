module.exports = function(grunt){
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    less: {
      style: {
        files: {
          "build/css/style.css": "source/less/style.less"
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: "last 2 versions"})
        ]
      },
      style: {
        src: "build/css/*.css"
      }
    },

    watch: {
      style: {
        files: ["source/less/**/*.less", "source/js/*.js"],
        tasks: ["includereplace", "less", "postcss", "cssmin", "concat", "uglify"],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

    cmq: {
      style: {
        files: {
          "build/css/style.css": ["build/css/style.css"]
        }
      }
    },

    cssmin: {
      style: {
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    csscomb: {
      style: {
        expand: true,
        src: ["source/less/**/*.less"]
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png, jpg, gif, svg}"]
        }]
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
            "img/**",
            // "index.html"
          ],
          dest: "build"
        }]
      }
    },

    clean: {
      build: ["build"]
    },

    concat: {
      dist: {
        src: ["source/js/script.js", "source/js/slick.js", "source/js/slider-upd.js"],
        dest: "build/js/script.js"
      }
    },

    uglify: {
      my_target: {
        files: {
          "build/js/script.min.js": ["build/js/script.js"]
        }
      }
    }, 

    includereplace: {
    my_target: {
      src: '*.html',
      dest: 'build/',
      expand: true,
      cwd: 'source/'
    },
  },
});
grunt.registerTask("build", [
    "clean",
    "copy",
    "includereplace",
    "csscomb",
    "less",
    "cmq",
    "postcss",
    "cssmin",
    "imagemin",
    "concat",
    "uglify"
  ]);
};