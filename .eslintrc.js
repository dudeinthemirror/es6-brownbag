module.exports = {
  root: true,
  extends: ['plugin:react-app/recommended'],
  rules: {
    'react-app/jsx-a11y/href-no-hash': 'off',
    'handle-callback-err': 'off',
    'no-shadow': 'off',
    'max-len': ['warn', { code: 120 }],
    'jest/no-disabled-tests': 'off',
    'react-native/no-inline-styles': 'off',
  },
  ignorePatterns: ['**/__mocks__/*.js', 'coverage/**/*.js'],
  globals: {
    __DEV__: false,
  },
};
