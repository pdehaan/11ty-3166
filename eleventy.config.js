/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias("blog-main", "blog-main.liquid");

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
