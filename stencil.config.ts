import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
const esModules = ['haunted', 'lit-html', 'lib', '@saasquatch'].join('|');

export const config: Config = {
  namespace: 'test',
  globalStyle: 'src/global/global.css',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    transform: {
      '^.+\\.(ts|tsx|js|jsx|css)$': '<rootDir>/node_modules/@stencil/core/testing/jest-preprocessor.js',
    },
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  },
};
