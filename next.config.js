const images = require("remark-images");
const emoji = require("remark-emoji");

const withMDX = require("@zeit/next-mdx")({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [images, emoji]
	}
});
module.exports = withMDX({
	pageExtensions: ["js", "jsx", "mdx"],
	exportPathMap(defaultExportMap) {
		return {
			...defaultExportMap
		};
	}
});
