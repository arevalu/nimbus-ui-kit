const custom = require('../webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.@(mdx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-interactions',
    'storybook-addon-performance/register',
    '@etchteam/storybook-addon-status',
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: { ...config.resolve.alias, ...custom.resolve.alias },
      },
      module: { ...config.module, rules: custom.module.rules },
    };
  },
};
