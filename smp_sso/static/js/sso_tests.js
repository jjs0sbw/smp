// Unit tests for the sso_binary_math.js

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

test("SSO_binary_math.VecBin.l", function() {
	var n = 5;
	var output = [1,1,1,1,1];
	var input = SSO.VecBin.l(n).elements;
	deepEqual(input, output, "New ones vector is invalid");	
});

test("SSO_binary_math.VecBin.setE", function() {
	var elements = [1,2,3,2,1];
	var changed_elements = [8,2,3,2,1];
	var new_vb = SSO.VecBin.new_one(elements);
	new_vb.setE(1, 8);
	deepEqual(new_vb.elements, changed_elements, "Incorrect vector element change");	
});

test("SSO_binary_math.VecBin.indexOf", function() {
	var elements = [1,2,99,2,1];
	var new_vb = SSO.VecBin.new_one(elements);
	var result = new_vb.indexOf(99);
	equal(result, 3, "Incorrect vector element index");	
});

test("SSO_binary_math.VecBin.view", function() {
	var elements = [1,2,99,2,1];
	var new_vb = SSO.VecBin.new_one(elements);
	var result = new_vb.view();
	equal(result, '[1, 2, 99, 2, 1]', "Incorrect vector element view");	
});




















