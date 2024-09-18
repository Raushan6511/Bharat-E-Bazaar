module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@common': './src/common',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
