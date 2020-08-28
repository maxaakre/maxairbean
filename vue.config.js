const path = require("path");
module.exports = {
  outputDir: path.resolve(path.join(__dirname, "/api/public")),
  devServer: {
    proxy: {
      "^/api": {
        target: "//localhost:5000",
      },
    },
  },
};
