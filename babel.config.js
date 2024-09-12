module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@constants': './src/constants',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@interfaces': './src/interfaces',
          '@hooks': './src/hooks',
        },
      },
    ],
    ['module:react-native-dotenv'],
  ],
};
