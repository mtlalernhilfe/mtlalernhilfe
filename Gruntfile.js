module.exports = function (grunt) {
    'use strict'
    require('load-grunt-tasks')(grunt)
    grunt.initConfig({
        clean: {
            build: ["build"]
        },

        /**************************************************************************************************
         * concat
         * Lädt alle Javscript Files aus frontend/src und js.
         * Erstellt daraus eine .js File je Projekt
         **************************************************************************************************/

        concat: {
            options: {
                separator: '\r\n \n'
            },
            frontend: {
                src: [
                    'frontend/src/js/**/*.js'
                ],
                dest: 'public/frontend.js'
            }
        },

        /**************************************************************************************************
         * copy
         * Kopiert alle für das Deployment nötigen Daten in das 'public' Verzeichnis
         **************************************************************************************************/

        copy: {
            frontend_images: {
                cwd: 'images/',
                src: '**/*',
                dest: 'public/images',
                expand: true
            },
            libs: {
                cwd: 'libs/',
                src: '**',
                dest: 'public/libs/',
                expand: true
            },
            css: {
                cwd: 'css/',
                src: '**/*',
                dest: 'public/css',
                expand: true
            },
            html: {
                cwd: 'html/',
                src: '**/*',
                dest: 'public/html',
                expand: true
            }
        },
        watch: {
            frontjs: {
                files: ['frontend/src/js/**/*.js'],
                tasks: ['concat:frontend', 'notify:watch']
            },
            hypertxt: {
                files: ['frontend/src/js/**/*.js', 'html/*.html', 'css/*.css'],
            }
        },
        notify: {
            watch: {
                options: {
                    title: 'Task Complete',
                    message: 'Sources compiled'
                }
            }
        }
    });
    grunt.registerTask('build', [
        'clean',
        'concat:frontend',
        'copy'
    ]);

    grunt.registerTask('dev', ['build', 'watch']);
    grunt.registerTask('default', ['build']);
};