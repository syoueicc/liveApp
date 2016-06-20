var path = require('path'),
	webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	autoprefixer = require('autoprefixer'),
	precss       = require('precss'),
	node_modules_dir = path.join(__dirname, 'node_modules'),
	deps = [
		'vue/dist/vue.min.js',
		'lodash/lodash.min.js'
	],
	config = {
		entry: {
			app: path.join(__dirname, 'vendor/index'),
			room: path.join(__dirname, 'vendor/room'),
			user: path.join(__dirname, 'vendor/user'),
			less: path.join(__dirname, 'vendor/styles/index.less'),
			// vendor: ['vue', 'lodash']
		},
		output: {
			path: path.join(__dirname, '/public/javascripts'),
			publicPath: '/public',
			filename: '[name].bundle.js'
		},
		plugins: [
			new webpack.optimize.CommonsChunkPlugin('commons.bundle.js'),
			/*new webpack.optimize.UglifyJsPlugin({
	            compress: {
	                warnings: false
	            }
	        }),*/
	        new ExtractTextPlugin('../sheetstyles/styles.css', { allChunks: false})
		],
		resolve:{
			extensions:['','.js','.json', '.vue'],
			alias: {
				moment: "moment"
			}
		},
		externals: {
			"io": 'io',
			"$": '$',
			"jwplayer": "jwplayer"
		},
		module: {
			noParse: [],
			loaders: [
				{
					test: /\.js$/,
					exclude: [node_modules_dir],
					loader: "babel-loader",
					query: {
						presets: ['es2015', 'stage-1'],
						plugins: ['transform-runtime'],
						compact: false
					}
				},
				{
					test: /\.vue$/,
					loader: 'vue'
				},
				{
					test:/\.css/,
					loader: ExtractTextPlugin.extract('css!postcss' )
					//loader: ExtractTextPlugin.extract('style-loader', 'css-loader'/*?' + JSON.stringify({discardComments: {removeAll: true}})*/ + '!postcss-loader' )
				},
				{
					test: /\.less$/,
					//loader: ExtractTextPlugin.extract('style!css!postcss!sass' )
					loader: ExtractTextPlugin.extract('style-loader', 'css-loader'/*?' + JSON.stringify({discardComments: {removeAll: true}})*/ + '!postcss-loader!less-loader' )
					//loader: 'style!css!sass'
				}
			]
		},
		postcss: function () {
	        return [autoprefixer, precss];
	    }
	}

deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports = config;