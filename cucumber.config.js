module.exports = {
  default: {
    requireModule: ['@babel/register'],
    require: ['src/tests/keywords/**/*.js', 'src/tests/feature/**/*.feature'],
    format: ['progress-bar', 'cucumber-pretty'],
    publishQuiet: true
  }
};
