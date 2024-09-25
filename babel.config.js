module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@common': './src/common',
          '@theme': './src/theme',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
