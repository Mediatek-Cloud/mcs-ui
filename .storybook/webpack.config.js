/**
 * Add Storysource Addon
 * ref: https://github.com/storybooks/storybook/blob/master/addons/storysource/README.md
 */
module.exports = {
  module: {
    rules: [
      {
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
      },
    ],
  },
};
