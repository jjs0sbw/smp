// First standard test
test("First test", function() {
	ok( 1 == "1", "Passed!");
});

test("SSO_binary_math.available", function() {
	ok( SSO.notice == "Special binary matrix and vector type.", "SSO notice is not here");	
});

test("SSO_binary_math.author", function() {
	ok( SSO.author == "Joseph James Simpson");	
});

test("SSO_binary_math.limit", function() {
	ok( SSO.limit == 1e-5);	
});

test("SSO_binary_math.VecBin.new_one_0", function() {
	var elements = [1,2,3,4,5];
	var output = SSO.VecBin.new_one(elements);
	var input = SSO.VecBin.new_one(elements);
	deepEqual( output, input, "New vector is invalid");	
});

test("SSO_binary_math.VecBin.new_one_1", function() {
	var elements = [1,2,3,4,5];
	var output = [1,2,3,4,5];
	var input = SSO.VecBin.new_one(elements).elements;
	deepEqual(input, output, "New vector is invalid");	
});

test("SSO_binary_math.VecBin.O", function() {
	var n = 5;
	var output = [0,0,0,0,0];
	var input = SSO.VecBin.O(n).elements;
	deepEqual(input, output, "New zeros vector is invalid");	
});

test("SSO_binary_math.VecBin.l", function() {
	var n = 5;
	var output = [1,1,1,1,1];
	var input = SSO.VecBin.l(n).elements;
	deepEqual(input, output, "New ones vector is invalid");	
});