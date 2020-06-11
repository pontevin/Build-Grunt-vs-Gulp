module.exports = function (grunt) {

    const sass = require('node-sass');
    const mozjpeg = require('imagemin-mozjpeg');

    require('time-grunt')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass
            },
            dist: {
                files: {
                    'dist-grunt/css/style.css': 'assets/scss/style.scss'
                }
            }
        },
        concat: {
            css: {
                files: {
                    'dist-grunt/css/styles.css': [
                        'dist-grunt/css/style.css',
                        'assets/css/test.css'
                    ],
                },
            },
            js: {
                files: {
                    'dist-grunt/js/scripts.js': [
                        'assets/js/test1.js',
                        'assets/js/test2.js'
                    ],
                },
            },
        },
        cssmin: {
            dist: {
                files: {
                    'dist-grunt/css/styles.min.css': ['dist-grunt/css/styles.css']
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist-grunt/js/scripts.min.js': ['dist-grunt/js/scripts.js']
                }
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 5,
                    use: [mozjpeg()]
                },
                files: [{
                    expand: true,
                    cwd: 'assets/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist-grunt/img'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['sass', 'concat', 'cssmin', 'uglify', 'imagemin']);

};