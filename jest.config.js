module.exports = {
    roots: [
        '<rootDir>'
    ],
    transform: {
        "\\.ts$": "ts-jest"
    },
    testMatch: ['<rootDir>/tests/**/!(_).ts'],
    moduleFileExtensions: ['ts', 'js'],
    modulePaths: [
        '<rootDir>/src/js/'
    ],
    moduleNameMapper: {
        "@src(.*)": '<rootDir>/src/js/$1'
    },
    preset: 'ts-jest',
    setupFiles: ['<rootDir>/tests/_setup.ts'],
    setupFilesAfterEnv: ['<rootDir>/tests/_setup-test.ts']
};