var sso = window.SSO;
var assert = buster.assert;

buster.testCase("Binary math addition test", {
     "test binary math": function () {
            assert.equals( 1 + 1, 2);
        },
        "sso notice test": function () {
        	assert.equals( sso.notice, "Special binary matrix and vector type.");
        },
        "sso author test": function () {
        	assert.equals(sso.author, "Joseph James Simpson");
        },
        "sso limit test": function () {
        	assert.equals(sso.limit, 1e-5);
        },
        "sso VecBin.new_one test-v1": function () {
        	var elements = [1,2,3,4,5];
        	var output = sso.VecBin.new_one(elements);
        	var input = sso.VecBin.new_one(elements);
        	assert.equals(output, input);
        },
         "sso VecBin.new_one test-v2": function () {
        	var elements = [1,2,3,4,5];
        	var output = [1,2,3,4,5];
        	var input = sso.VecBin.new_one(elements).elements;
        	assert.equals(output, input);
        },
        "sso VecBin.O test": function () {
        	var n = 5;
        	var output = [0,0,0,0,0];
        	var input = sso.VecBin.O(n).elements;
        	assert.equals(output, input);
        },
         "sso VecBin.l test": function () {
        	var n = 5;
        	var output = [1,1,1,1,1];
        	var input = sso.VecBin.l(n).elements;
        	assert.equals(output, input);
        }
        
        
});
