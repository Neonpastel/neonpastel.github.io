const eleventySass = require("eleventy-sass");
const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    eleventyConfig.addPassthroughCopy("src/_assets");

   eleventyConfig.addPlugin(eleventySass, {
    sass: {
        loadPaths: ["node_modules"]
    }
   });
    
    return {
        dir: { 
            input: "src",
            output: "dist",
        }
    }
}