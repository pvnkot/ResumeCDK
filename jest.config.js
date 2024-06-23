const { pathsToModuleNameMapper } = require("ts-jest");

module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  pathsToModuleNameMapper: {
    "#src/*": "lib/*"
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
