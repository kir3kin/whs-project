const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'
const isServe = process.env.NODE_ENV === 'serve'



const cssLoaders = extra => {
	const loaders = [
		{ 
			loader: !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
		},
		'css-loader'
	]
	if (extra) loaders.push(extra)
	return loaders
}

const imagePath = () => {
	const generator = {
		publicPath: isServe ? '' : isProduction ? '/' : '/dist/',
		filename: 'static/images/[contenthash][ext]'
	}
	return generator
}

const config = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: 'static/js/[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.js', '.json', '.css', '.scss'],
		alias: {
			images: path.resolve(__dirname, 'src/assets/images')
		}
	},
	devtool: isProduction ? false : 'source-map',
	devServer: {
			open: true,
			port: 7373,
			watchContentBase: true,
			hot: true
	},
	plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.html',
			}),
			new MiniCssExtractPlugin({
				filename: 'static/styles/[contenthash].css'
			}),
			new CopyWebpackPlugin({
				patterns: [
					{
						from: path.resolve(__dirname, './src/assets/robots.txt'),
						to: path.resolve(__dirname, 'dist/')
					}
				]
			}),
			new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(js|jsx)$/i,
				exclude: '/node_modules/',
				loader: 'babel-loader'
			},
			{
				test: /\.s[ac]ss$/i,
				use: cssLoaders('sass-loader')
			},
			{
			test: /\.(svg|png|jpg|gif)$/i,
				type: 'asset/resource',
				generator: imagePath(isProduction)
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/i,
				loader: 'file-loader',
				options: {
					name: '[contenthash].[ext]',
					outputPath: 'static/fonts',
					publicPath: '/static/fonts/'
				}
			}
		],
	}
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';
	} else {
		config.mode = 'development';
	}
	return config;
};
