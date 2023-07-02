import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // 테스트 환경에서 next.config.js 및 .env 파일을 로드할 Next.js 앱의 경로를 제공합니다
  dir: "./",
});

// Jest에 전달할 커스텀 설정 추가
/** @type {import('jest').Config} */
const config = {
  // 각 테스트를 실행하기 전에 추가 설정 옵션 추가
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    // tsconfig.js의 paths 매핑
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
