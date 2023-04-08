
module.exports = {

	source: ['src/design-tokens/sd-tokens.json'],
	// Same with formats, you can now write them directly to this config
	// object. The name of the format is the key.
	format: {
		stylus: ({dictionary, platform}) => {
			return dictionary.allTokens.map(token => `$sd-${token.type}__${token.name}= ${token.value};`).join('\n');
		}
	},
	platforms: {
		css: {
			transformGroup: 'css',
			buildPath: 'src/styles/',
			files: [
				{
					destination: 'tokens.styl',
					format: 'stylus',
				},
			],
		},
	},
};