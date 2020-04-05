/* eslint-disable */
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withOptimizedImages = require("next-optimized-images");
const path = require("path");

const isProd = process.env.NODE_ENV === "production";

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

module.exports = withLess(
  withSass(
    withOptimizedImages({
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
      webpack(config) {
        config.resolve.alias.images = path.join(__dirname, "images");
        config.resolve.modules.push(path.resolve("./"));
        return config;
      },
    })
  )
);
