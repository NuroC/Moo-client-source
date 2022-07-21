const prod = process.env.NODE_ENV === 'production';
const path = require('path');
const { DefinePlugin } = require('webpack');


module.exports = {
	entry: './app.js',
	mode: "production",
	output: {
		path: path.resolve('./output'),
		filename: 'bundle.js',
	},
	plugins: [
		new DefinePlugin({
			VERSION: JSON.stringify(require("./package.json").version + (prod ? '' : '-dev'))
		})
	]
};
module.exports.module = {
	rules: [{
		test: /\.js$/,
		exclude: /(node_modules|bower_components)/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env']
			}
		}
	}]
}