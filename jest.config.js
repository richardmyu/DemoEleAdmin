module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|hpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializers-vue'],
  testMatch: ['**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__test__/*.(js|jsx|ts|tsx)'],
  collectCoverageFrom: ['src/utils/**/*.{js,vue}', '!src/utils/auth.js', '!src/utils/request.js', 'src/components/**/*.{js,vue}'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  'coverageReporters': [
    'lcov',
    'text-summary'
  ],
  testURL: 'http://localhost/'

}
