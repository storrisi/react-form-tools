var webpack = require('webpack')
var path = require('path')

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: {
		index: path.join(__dirname, 'src', 'index.js')
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js',

		library: 'react-form-renderer',
		libraryTarget: 'umd'
	},
	module: {
		rules: [{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: {
            presets:['es2015','react']
        } }]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		modules: ['node_modules']
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		})
	],
	externals: {
		react: 'react'
	},
	devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : ''
}