// Javascript Buster.js configuration file
var config = module.exports;

config["SSO browser tests"] = {
	environment: "browser", // or "node"
	rootPath: "../",
	sources: [
		"lib/strftime.js",
		//"static/js/sso.js",
		"static/js/sso_binary_math.js",
        "index.html"
	],
	tests: [
		"test/*-test.js"
	],
	resources: [{
		path: "~jjs0sbw/smp_sso/",
		backend: "http://localhost"
	}]
};
	// Add more configuration groups as needed
	
		
