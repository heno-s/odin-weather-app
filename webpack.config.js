const path = require("path");

module.exports = {
    devtool: "inline-source-map",
    entry: "index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
};
