const { src, dest, series, lastRun, watch } = require("gulp");

const sass = require("gulp-sass");
sass.compiler = require("node-sass");

const plugins = require("gulp-load-plugins")();

const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

function css() {
  var plugins = [autoprefixer({ browsers: ["last 1 version"] }), cssnano()];

  return src("style.scss")
    .pipe(plugins.sass())
    .pipe(dest("style.css"))
    .pipe(postcss(plugins))
    .pipe(dest("./dest"));
}

exports.default = css;
