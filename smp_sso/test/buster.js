// Javascript Buster.js configuration file
var config = module.exports;

config["SSO browser tests"] = {
	environment: "browser", // or "node"
	rootPath: "../",
	sources: [
		"lib/strftime.js",
		"static/js/sso_binary_math.js",
                "index.html"
	],
	tests: [
		"test/*-test.js"
	]
};
	// Add more configuration groups as needed
	
		
