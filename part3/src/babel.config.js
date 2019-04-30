module.exports = {
	"presets":[
		"@babel/preset-env", 
		"@babel/preset-react",
		"@babel/preset-es2015",
		"@babel/preset-stage-0"
	],
	"plugins": [
		"@babel/plugin-transform-runtime",
		"@babel/plugin-proposal-class-properties",
		"@babel/plugin-proposal-object-rest-spread",
	]
}