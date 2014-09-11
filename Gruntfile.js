module.exports = function (grunt) {
 
  grunt.initConfig({
 
    //package.jsonを取得
    pkg: grunt.file.readJSON('package.json'),
 
    //タスクの設定（grunt-contrib-sass）
    sass: {
      dist: {
        expand: true,
        //SCSSファイルを指定
        cwd: 'css/_scss/',
        src: ['*.scss'],
        dest: './css/',
        ext: '.css'
      }
    },
    patternprimer: {
      options: {
        wwwroot: './',
        src: './patterns',
        dest: './doc',
        css: ['css/pattern-heading.css','css/pattern-base.css'],
        //index: 'patternprimer/patterns_index/source.html'
      },
      live: {
        ports: [7020]
      },
     snapshot: {
      snapshot: true
     }
    },
     
    //タスクの設定（grunt-contrib-watch）
    watch: {
      sass: {
        //変更を監視するファイルを指定
        files: ['css/_scss/*.scss'],
        //変更されたらどのタスクを実行するか指定
        tasks: [ 'sass' ]
      }
    }
  });
 
  // プラグインの読み込み
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-patternprimer');
  grunt.registerTask('default', [ 'watch' ]);
  //grunt.registerTask('patternprimer:snapshot', [ 'copy' ]);
 
};