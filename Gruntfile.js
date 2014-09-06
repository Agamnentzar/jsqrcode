module.exports = function (grunt) {
	var banner = '/*\n'
	+ '  Copyright 2011 Lazar Laszlo (lazarsoft@gmail.com, www.lazarsoft.info)\n'
	+ '  Copyright 2007 ZXing authors\n'
	+ '  \n'
	+ '  Licensed under the Apache License, Version 2.0 (the "License");\n'
	+ '  you may not use this file except in compliance with the License.\n'
	+ '  You may obtain a copy of the License at\n'
	+ '  \n'
	+ '    http://www.apache.org/licenses/LICENSE-2.0\n'
	+ '  \n'
	+ '  Unless required by applicable law or agreed to in writing, software\n'
	+ '  distributed under the License is distributed on an "AS IS" BASIS,\n'
	+ '  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n'
	+ '  See the License for the specific language governing permissions and\n'
	+ '  limitations under the License.\n'
	+ '*/\n';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				stripBanners: true,
				banner: banner + '\nwindow.qrcode = (function(){\n',
				footer: '\nreturn qrcode;\n})();'
			},
			js: {
				src: [
					"src/grid.js",
					"src/version.js",
					"src/detector.js",
					"src/formatinf.js",
					"src/errorlevel.js",
					"src/bitmat.js",
					"src/datablock.js",
					"src/bmparser.js",
					"src/datamask.js",
					"src/rsdecoder.js",
					"src/gf256poly.js",
					"src/gf256.js",
					"src/decoder.js",
					"src/qrcode.js",
					"src/findpat.js",
					"src/alignpat.js",
					"src/databr.js"
				],
				dest: 'build/qrcode.js'
			}
		},
		uglify: {
			js: {
				options: {
					banner: banner,
				},
				files: {
					'build/qrcode.min.js': ['build/qrcode.js']
				}
			}
		},
		watch: {
			js: {
				files: ['src/*.js'],
				tasks: ['concat:js', 'uglify:js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat:js', 'uglify:js']);
	grunt.registerTask('dev', ['concat:js', 'uglify:js', 'watch:js']);
};