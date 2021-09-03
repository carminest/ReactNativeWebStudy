module.exports = {
  root: true,
  extends: ['@react-native-community', 'eslint:recommended'],
  rules: {
    'no-unused-vars': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
