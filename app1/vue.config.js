const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
	transpileDependencies: true,
	// https://stackoverflow.com/questions/71486686/cannot-read-properties-of-undefined-reading-meta-in-vue-3-single-spa-app
	configureWebpack: {
		output: {
			libraryTarget: 'system',
		},
	},
});
