module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> (<%= pkg.homepage %>) */\n'
			},
			ngCustomerVoice: {
				files: {
					'./js/ngCustomerVoice.min.js': ['./js/ngCustomerVoice.js']
				}
			}
		},
		jshint: {
			options: {
				ignores: ['./js/ngCustomerVoice.min.js']
			},
			files: ['*.js']
		},
		cssmin: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> (<%= pkg.homepage %>) */\n'
			},
			minify:{
				files: {
					'css/ngCustomerVoice.min.css': ['css/ngCustomerVoice.css']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('build', ['uglify', 'cssmin']);
};
