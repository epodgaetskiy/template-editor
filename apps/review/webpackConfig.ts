module.exports = (config) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        config.module.rules[0],
        {
          test: /\.html$/i,
          use: 'raw-loader',
        },
        {
          test: /\.css$/i,
          use: 'raw-loader',
        },
      ],
    },
  };
};
