// Unit tests for the sso_binary_math.js

// SSO code

test("SSO_binary_math.available", function() {
	ok( SSO.notice == "Special binary matrix and vector type.", "SSO notice is not here");	
});

test("SSO_binary_math.author", function() {
	ok( SSO.author == "Joseph James Simpson");	
});

test("SSO_binary_math.limit", function() {
	ok( SSO.limit == 1e-5);	
});

// VecBin code

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

test("SSO_binary_math.VecBin.setElements", function() {
	var elements = [100,99,98,97,96];
	var new_vb = SSO.VecBin.new_one(elements);
	var result = new_vb.setElements(elements);
	equal(result.elements, new_vb.elements, "Incorrect element vector");	
	var new_elements = [20,21,22, 23,24];
	var new_result = new_vb.setElements(new_elements);
	deepEqual(new_result.elements, new_elements, "Incorrect new elements vector");
});

// MatrixBin code

test("SSO_binary_math.MatrixBin.e", function() {
	var elements = [[1,2,3],
					[4,5,6],
					[7,8,9]];
	var output = SSO.MatrixBin.new_one(elements);
	var ele = output.e(1,3);
	equal( 3, ele, "New matrix element is invalid");	
});

test("SSO_binary_math.MatrixBin.new_one", function() {
	var elements = [[1,2,3],
					[4,5,6],
					[7,8,9]];
	var output = SSO.MatrixBin.new_one(elements);
	deepEqual( output.elements, elements, "New matrix elements are invalid");	
});

test("SSO_binary_math.MatrixBin.Id", function() {
	var elements = [[1,0,0],
					[0,1,0],
					[0,0,1]]; 
	var output = SSO.MatrixBin.Id(3);
	deepEqual( output.elements, elements, "New id matrix elements are invalid");	
});

test("SSO_binary_math.MatrixBin.O", function() {
	var elements = [[0,0,0],
					[0,0,0],
					[0,0,0]] ;
	var output = SSO.MatrixBin.O(3);
	deepEqual( output.elements, elements, "New zero matrix elements are invalid");	
});

test("SSO_binary_math.MatrixBin.setE", function() {
	var elements = [[1,2,3],
					[4,5,6],
					[7,8,9]];
	var output = SSO.MatrixBin.new_one(elements);
	output.setE(1,3, 99);
	var new_elements = [[1,2,99],
					    [4,5,6],
					    [7,8,9]];
	var new_output = output.elements;
	deepEqual( new_elements, new_output, "New matrix elements are invalid");	
});

test("SSO_binary_math.MatrixBin.row", function() {
	var elements = [[1,2,3],
					[4,5,6],
					[7,8,9]];
	var output = SSO.MatrixBin.new_one(elements);
	var new_row = output.row(1).elements;
	var returned_row = [1,2,3];
	deepEqual( new_row, returned_row, "New row elements are invalid");	
});

test("SSO_binary_math.MatrixBin.setRow", function() {
	var elements = [[1,2,3],
					[4,5,6],
					[7,8,9]];
	var output = SSO.MatrixBin.new_one(elements);
	var new_row = SSO.VecBin.new_one([77, 44, 22]);
	output.setRow(1, new_row);
	var new_elements = [[77,44,22],
					    [4,5,6],
					    [7,8,9]];
	var new_output = output.elements;
	deepEqual( new_elements, new_output, "New row elements are invalid");	
});

test("SSO_binary_math.MatrixBin.col", function() {
	var elements = [[1,2,3],
					[4,5,6],
					[7,8,9]];
	var output = SSO.MatrixBin.new_one(elements);
	var new_col = output.col(1).elements;
	var returned_col = [1,4,7];
	deepEqual( new_col, returned_col, "New column elements are invalid");	
});

test("SSO_binary_math.MatrixBin.setCol", function() {
	var elements = [[1,2,3],
					[4,5,6],
					[7,8,9]];
	var output = SSO.MatrixBin.new_one(elements);
	var new_col = SSO.VecBin.new_one([77, 44, 22]);
	output.setCol(1, new_col);
	var new_elements = [[77,2,3],
					    [44,5,6],
					    [22,8,9]];
	var new_output = output.elements;
	deepEqual( new_elements, new_output, "New col elements are invalid");	
});




















