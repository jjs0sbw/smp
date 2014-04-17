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


test("SSO_binary_math.MatrixBin.rows", function() {
	var elements = [[1,2,3],
					[4,5,6],
					[7,8,9]];
	var output = SSO.MatrixBin.new_one(elements);
	var number_of_rows = output.rows();
	var value = 3;
	equal( number_of_rows, 3, "Wrong number of rows");	
});

test("SSO_binary_math.MatrixBin.colus", function() {
	var elements = [[1,2,3],
					[4,5,6],
					[7,8,9]];
	var output = SSO.MatrixBin.new_one(elements);
	var number_of_columns = output.colus();
	var value = 3;
	equal( number_of_columns, 3, "Wrong number of columns");	
});


test("SSO_binary_math.MatrixBin.dup", function() {
	var elements = [[1,2,3],
					[4,5,6],
					[7,8,9]];
	var output = SSO.MatrixBin.new_one(elements);
	var new_matrix = output.dup().elements;
	deepEqual( new_matrix, elements, "Invalid dup function");	
});


test("SSO_binary_math.MatrixBin.map", function() {
	var elements = [[1,2,3],
					[4,5,6],
					[7,8,9]];
	var output = SSO.MatrixBin.new_one(elements);
	var new_matrix = output.map(function(x) { return x; });
	deepEqual( new_matrix.elements, elements, "Invalid map function");	
	var elements_2 = [[2,4,6],
					[8,10,12],
					[14,16,18]];
    var new_matrix_t2 = output.map(function(x) { return x * 2; });
    deepEqual( new_matrix_t2.elements, elements_2, "Invalid map function");
	
});

test("SSO_binary_math.MatrixBin.isSameSizeAs", function() {
	var elements = [[1,2,3],
					[4,5,6],
					[7,8,9]];
	var output = SSO.MatrixBin.new_one(elements);
	var new_matrix = output.map(function(x) { return x * 3; });
    equal( output.isSameSizeAs(new_matrix), true, "Matrices are not the same size");
	
});

test("SSO_binary_math.MatrixBin.add", function() {
	var elements = [[1,2,3],
					[4,5,6],
					[7,8,9]];
	var output = SSO.MatrixBin.new_one(elements);
	var elements_2 = [[2,4,6],
					[8,10,12],
					[14,16,18]];
    var add_m = SSO.MatrixBin.new_one(elements_2);
    var answer = [[3,6,9],
    			  [12,15,18],
    			  [21,24,27]]
    var sum_matrix = output.add(add_m);
    deepEqual(sum_matrix.elements, answer, "Invalid add function");
	
});

test("SSO_binary_math.MatrixBin.subtract", function() {
	var elements = [[1,2,3],
					[4,5,6],
					[7,8,9]];
	var answer = [[3,6,9],
    			  [12,15,18],
    			  [21,24,27]]
	var output = SSO.MatrixBin.new_one(answer);
	var elements_2 = [[2,4,6],
					[8,10,12],
					[14,16,18]];
    var subtract_m = SSO.MatrixBin.new_one(elements_2);
    var subtract_matrix = output.subtract(subtract_m);
    deepEqual( subtract_matrix.elements, elements, "Invalid subtract function");
	
});

test("SSO_binary_math.MatrixBin.leftMultiply", function() {
	var elements = [[1,2,3],
					[4,5,6],
					[7,8,9]];
	var output = SSO.MatrixBin.new_one(elements);
    equal( output.leftMultiply(output), true, "Can not multiply from left");
	
});

test("SSO_binary_math.MatrixBin.boolMultiply", function() {
	var elements_one = [[0,1,0],
					[0,0,1],
					[1,0,0]];
	var elements_two = [[0,0,1],
    			  [1,0,0],
    			  [0,1,0]]
	var matrix_one = SSO.MatrixBin.new_one(elements_one);
	var matrix_two = SSO.MatrixBin.new_one(elements_two);
	var answer = [[1,0,0],
				  [0,1,0],
				  [0,0,1]];
    var bool_multiply_m = matrix_one.boolMultiply(matrix_two);
    deepEqual( bool_multiply_m.elements, answer, "Invalid boolMultiply function");
	
});

test("SSO_binary_math.MatrixBin.setElements", function() {
	var elements_one = [[0,1,0],
					[0,0,1],
					[1,0,0]];
	var matrix_one = SSO.MatrixBin.new_one(elements_one);
	var elements_two = [[1,2,3],
				  	    [4,5,6],
				        [7,8,9]];
    matrix_one.setElements(elements_two);
    deepEqual(matrix_one.elements, elements_two, "Invalid setElements function");
	
});






