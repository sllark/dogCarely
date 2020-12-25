module.exports = function (grunt) {
    grunt.initConfig({

        // define source files and their destinations
        uglify: {
            files: {
                src: 'js/*.js',  // source files mask
                dest: 'jsm/',    // destination folder
                expand: true,    // allow dynamic building
                flatten: true,   // remove all unnecessary nesting
                ext: '.min.js'   // replace .js to .min.js
            }
        },
        watch: {
            html:  { files: 'js/*.js', tasks: [ 'uglify' ] },
            js:  { files: ['*.html','post/*.html'], tasks: [ 'htmlmin' ] },
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyCSS:true,
                    minifyJS:true
                },
                files: [{
                    expand: true,     // Enable dynamic expansion.
                    src: ['*.html','post/*.html'],
                }]
            },
        }
    });

// load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

// register at least this one task
    grunt.registerTask('default', [ 'htmlmin' ]);
    grunt.registerTask('minifyJS',[ 'uglify' ]);
    // grunt.registerTask('default', []);



};