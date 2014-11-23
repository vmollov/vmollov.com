module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-ngmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.initConfig({
		uglify:{
			my_target:{
				files:{
					//'app/script.js':['app/_/js/*.js', 'app/_/js/*/*.js']
					'app/script.js':'app/script.js'
				}
			},
			options:{
				report: 'min',
	            mangle: true
			}
		},
		
		ngmin:{
			all: {
				src:['app/_/js/*.js', 'app/_/js/*/*.js'],
				dest:'app/script.js'

			}
		},
		
		concat: {
			options: {
		    	separator: '/* ------------========----------- */ ',
		    },
		    dist: {
		    	src: ['app/_/lib/*.js', 'app/_/lib/*/*.js'],
				dest: 'app/lib.js',
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
			scripts:{
				files: ['app/_/js/*.js', 'app/_/js/*/*.js', 'app/_/lib/*.js', 'app/_/lib/*/*.js'],
				tasks: [/* 'uglify' */]
			},
			sass:{
				files:['app/_/scss/*.scss'],
				tasks:['compass:dev']
			},
			
			html:{
				files:['app/*.html', 'app/templates/*.html', 'app/templates/*/*.html', 'app/data/*.json', 'app/data/*/*.json']
			}
		}
	});
	
	grunt.registerTask('default', 'watch');
};