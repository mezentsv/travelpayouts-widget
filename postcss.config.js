module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-autoreset')({
      reset: {
        all: 'initial',
        margin: 0,
        padding: 0,
        border: 0,
        boxSizing: 'border-box',
        fontSize: '100%',
        font: 'inherit',
        verticalAlign: 'baseline'
      }
    })
  ]
};
