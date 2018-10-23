/**
 * Add Storysource Addon
 * ref: https://github.com/storybooks/storybook/blob/master/addons/storysource/README.md
 * https://storybook.js.org/configurations/custom-webpack-config/#full-control-mode--default
 */

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.example\.jsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          prettierConfig: {
            singleQuote: true,
            trailingComma: 'all',
          },
        },
      },
    ],
    enforce: 'pre',
  });

  return defaultConfig;
};
