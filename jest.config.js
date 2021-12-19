module.exports = {
  //   testEnvironment: "jest-environment-jsdom-sixteen",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // see: https://github.com/kulshekhar/ts-jest/issues/414#issuecomment-517944368
    // "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@assets$": "<rootDir>/src/assets/index.ts",
  },
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
