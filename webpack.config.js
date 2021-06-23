// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


const isProduction = process.env.NODE_ENV == 'production';


const cssLoaders = (extra) => {
	const loaders = [
		{ 
			loader: MiniCssExtractPlugin.loader
		},
		'css-loader',
	]

	if (extra) loaders.push(extra)
	return loaders
}


const config = {
	entry: {
		index: './src/index.js'
		// page2: './src/page2.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	resolve: {
		extensions: ['.js', '.json', '.scss']
	},
	devServer: {
			open: true,
			host: 'localhost',
			watchContentBase: true,
			hot: true
	},
	plugins: [
			new HtmlWebpackPlugin({
				// chunks: ['index'],
				template: './src/index.html',
				// filename: 'index.html'
			}),
			// new HtmlWebpackPlugin({
			// 	chunks: ['index', 'page2'],
			// 	template: './src/page2.html',
			// 	filename: 'page2.html'
			// }),
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: '[name].css'
			})
			// Add your plugins here
			// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: cssLoaders()
			},
			{
				test: /\.(js|jsx)$/i,
				loader: 'babel-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: cssLoaders('sass-loader')
			},
			{
				test: /\.(eot|svg|png|jpg|gif)$/i,
				type: 'asset',
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/i,
				use: ['file-loader']
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';
	} else {
		config.mode = 'development';
	}
	return config;
};
