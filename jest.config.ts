import { createDefaultPreset, JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  verbose: true,
  rootDir: "src",
  resolver: "ts-jest-resolver",
  ...createDefaultPreset(),
};

export default jestConfig;
