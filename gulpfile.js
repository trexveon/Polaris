const
gulp = require('gulp'),
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps'),
browserSync = require('browser-sync').create(),
watch = require('gulp-watch');


const path = {
    srcPath: 'dev/assets/css/scss/',
    distPath: 'dev/assets/css/',
    // jquery: 'node_modules/jQuery/tmp/jquery.js',
    popper: 'node_modules//popper.js/dist/umd/popper.min.js',
    bootstrapjs: 'node_modules/bootstrap/dist/js/bootstrap.min.js',
    bootstrapcss: 'node_modules/bootstrap//dist/css/bootstrap.min.css',
    js: 'dev/assets/js',
    css: 'dev/assets/css'
  };

gulp.task('js',function(){//enviar arquivos js do npm para a pasta js
  return gulp.src([path.popper,path.bootstrapjs])
  .pipe(gulp.dest(path.js))
  .pipe(browserSync.stream());
});

gulp.task('css',function(){//enviar arquivos css do npm para a pasta css
  return gulp.src([path.bootstrapcss])
  .pipe(gulp.dest(path.css))
  .pipe(browserSync.stream());
});



gulp.task('browserSync', function() {
    browserSync.init({ //inicia o server do browsersync
      server: {
        baseDir: 'dev/', //define o diretório base
      },
      port: 8080, //define a porta, você pode mudar para a que quiser
      startPath: 'index.html', //define qual é o arquivo que abrirá como padrão quando ele iniciar
    })
  });

  gulp.task('sass', function(){
    //a marcação define que iremos pegar todos os arquivos SCSS e Sass da pasta src/sass, inclusive subpastas e seu conteúdo se houverem
    return gulp.src(path.srcPath+'/style.+(scss|sass)') //'**/*.+(scss|sass)')
      .pipe(sourcemaps.init()) //iniciamos o sourcemap para gravar o MAP para debuging
      .pipe(sass({ //iniciamos o modulo do Sass
        outputStyle: 'compressed' //adicionamos a opção para que o produto final seja comprimido/minificado
      }).on('error', sass.logError)) // Se der erro exibirá um log e criará um arquivo para análise
      .pipe(sourcemaps.write('./')) //Escrevera o sourcemap na mesma pasta ou subpasta do CSS gerado
      .pipe(gulp.dest(path.distPath)) //Irá salvar o arquivo na estrutura equivalente dentro da pasta /dist/css
      .pipe(browserSync.reload({ //ativa o reload da pagina quando terminar de fazer o Sync
        stream: true // (se o servidor estiver iniciado ele dá o reload)
      }));
  });


  gulp.task('watch', function () {
    gulp.watch(path.srcPath+'/style.scss', ['sass', 'browserSync']);
    gulp.watch(['dev/**/*.html','dev/assets/js/**/*.js','**/*.php']).on('change', browserSync.reload);
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss'],['sass']);
  });

  gulp.task('default', ['sass', 'js','browserSync', 'watch', 'css']);

