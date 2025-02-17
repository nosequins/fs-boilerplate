module.exports = {
	entry: ["./client/components/App.js"],
	output: {
		path: __dirname,
		filename: "./server/public/bundle.js",
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	devtool: "inline-source-map",
	watchOptions: {
		ignored: /node_modules/,
	},
	target:'node',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-react"],
				},
			},
		],
	},
}
