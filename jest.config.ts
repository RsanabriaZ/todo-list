import type { Config } from '@jest/types';
const config: Config.InitialOptions = {
    preset: 'ts-jest',

    testEnvironment: 'jsdom',
    // ... other options ...
}


export default config;