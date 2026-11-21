function normalizePathPrefix(raw) {
  if (!raw || raw === "/") return "/";
  let prefix = raw.trim();
  if (!prefix.startsWith("/")) prefix = "/" + prefix;
  if (!prefix.endsWith("/")) prefix += "/";
  return prefix;
}

export default function (eleventyConfig) {
  const pathPrefix = normalizePathPrefix(process.env.PATH_PREFIX ?? "/Ker-IT.Website/");
  const siteUrl = (process.env.SITE_URL || "https://ker-it.github.io").replace(/\/+$/, "");

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/js/");

  eleventyConfig.addFilter("absUrl", function (relativePath) {
    const urlFilter = eleventyConfig.getFilter("url");
    const prefixed = urlFilter(relativePath || "/");
    return `${siteUrl}${prefixed}`;
  });

  eleventyConfig.addFilter("visibleFamilies", function (families) {
    if (!Array.isArray(families)) return [];
    return families
      .filter((family) => family.publicVisible !== false)
      .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  });

  eleventyConfig.addFilter("visibleProducts", function (products, familyId) {
    if (!Array.isArray(products)) return [];
    return products
      .filter((product) => product.publicVisible !== false && (!familyId || product.family === familyId))
      .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  });

  const outputDir = process.env.ELEVENTY_OUTPUT || "_site";

  return {
    pathPrefix,
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: outputDir,
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
