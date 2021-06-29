// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

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
		publicPath: isProduction ? '/' : '/dist/',
		filename: 'static/images/[name][ext]'
	}
	return generator
}

const config = {
	entry: {
		index: './src/index.js'
		// page2: './src/page2.js',
	},
	output: {
		filename: 'static/js/[name].js',
		path: path.resolve(__dirname, 'dist'),
		// publicPath: './'
	},
	resolve: {
		extensions: ['.js', '.json', '.css', '.scss'],
		alias: {
			images: path.resolve(__dirname, 'src/assets/images')
		}
	},
	devtool: 'source-map',
	devServer: {
			open: true,
			port: 7373,
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
			// new CopyWebpackPlugin({
			// 	patterns: [
			// 		{
			// 			from: path.resolve(__dirname, 'src/assets/images/**/*.png'),
			// 			to: path.resolve(__dirname, 'dist/assets/images/')
			// 		}
			// 	]
			// }),
			new MiniCssExtractPlugin({
				filename: 'static/styles/main.css'
			}),
			new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			// {
			// 	test: /\.css$/i,
			// 	use: cssLoaders()
			// },
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
					publicPath: '/dist/static/fonts/'
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
