const isModern = process.env.BROWSERS_ENV === 'modern';

module.exports = {
  presets: [
    ['@babel/preset-env', {
      corejs: '2',
      useBuiltIns: 'usage',
      targets: isModern ? { esmodules: true } : undefined,
    }]
  ]
};
