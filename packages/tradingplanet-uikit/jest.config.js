module.exports = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/.storybook/"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.tsx"],
  transform: {
    "\\.(js|jsx)?$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
  },
};
