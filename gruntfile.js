module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.initConfig({
		uglify:{
			my_target:{
				files:{
					'app/script.js':['app/_/js/*.js', 'app/_/js/*/*.js'],
					'app/lib.js':['app/_/lib/*.js', 'app/_/lib/*/*.js']
				}
			}
		},
		
		compass:{
			dev:{
				options:{
					config: 'config.rb'
				}
			}
		},
		
		cssmin: {
			minify:{
				src: ['app/_/css/*.css', 'app/_/css/*/*.css'],
				dest: 'app/style.css'
			}
		},
		
		watch:{
			options: {
				livereload: true
			},
			/*
				scripts:{
				files: ['working/js/*.js', 'working/lib/*.js'],
				tasks: ['uglify']
			},
			*/
			sass:{
				files:['app/_/scss/*.scss'],
				tasks:['compass:dev']
			},
			/*
				css:{
				files:['working/css/*.css'],
				tasks:['cssmin']
			},
			*/
			html:{
				files:['app/*.html', 'app/templates/*.html']
			}
		}
	});
	
	grunt.registerTask('default', 'watch');
};