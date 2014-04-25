"use strict"
var sso = window.SSO;
var ssologic = window.SSOLogic;
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
        },
        "sso VecBin.setE test": function () {
        	var elements = [1,2,3,2,1];
        	var changed_elements = [8,2,3,2,1];
        	var new_vb = sso.VecBin.new_one(elements);
        	new_vb.setE(1,8);
        	assert.equals(new_vb.elements, changed_elements);
        },
        "sso VecBin.view test": function () {
        	var elements = [1,2,99,2,1];
        	var new_vb = sso.VecBin.new_one(elements);
        	var result = new_vb.view();
        	assert.equals(result, '[1, 2, 99, 2, 1]');
        },
         "sso VecBin.indexOf test": function () {
        	var elements = [1,2,99,2,1];
        	var new_vb = sso.VecBin.new_one(elements);
        	var result = new_vb.indexOf(99);
        	assert.equals(result, 3);
        },
        "sso VecBin.setElements test": function () {
        	var elements = [100,99,98,97,96];
        	var new_vb = sso.VecBin.new_one(elements);
        	var result = new_vb.setElements(elements);
        	assert.equals(result.elements, new_vb.elements);
        	var new_elements = [20,21,22,23,24];
        	var new_result = new_vb.setElements(new_elements);
        	assert.equals(new_result.elements, new_elements);
        },
        // MatrixBin code
        "sso MatrixBin.e test": function () {
        	var elements = [[1,2,3],
        					[4,5,6],
        					[7,8,9]];
        	var output = sso.MatrixBin.new_one(elements);
        	var ele = output.e(1,3);
        	assert.equals(ele, 3);
        },
        "sso MatrixBin.new_one test": function () {
        	var elements = [[1,2,3],
        					[4,5,6],
        					[7,8,9]];
        	var output = sso.MatrixBin.new_one(elements);
        	assert.equals(output.elements, elements);
        },
        "sso MatrixBin.Id test": function () {
        	var elements = [[1,0,0],
        					[0,1,0],
        					[0,0,1]];
        	var output = sso.MatrixBin.Id(3);
        	assert.equals(output.elements, elements);
        },
        "sso MatrixBin.O test": function () {
        	var elements = [[0,0,0],
        					[0,0,0],
        					[0,0,0]];
        	var output = sso.MatrixBin.O(3);
        	assert.equals(output.elements, elements);
        },
         "sso MatrixBin.setE test": function () {
        	var elements = [[1,2,3],
        					[4,5,6],
        					[7,8,9]];
        	var output = sso.MatrixBin.new_one(elements);
        	assert.equals(output.elements, elements);
        	output.setE(1,3, 99);
        	var new_elements = [[1,2,99],
					     		[4,5,6],
					    		[7,8,9]];
			var new_output = output.elements;
			assert.equals(new_elements, new_output);
        },
        "sso MatrixBin.row test": function () {
        	var elements = [[1,2,3],
        					[4,5,6],
        					[7,8,9]];
        	var output = sso.MatrixBin.new_one(elements);
        	assert.equals(output.elements, elements);
        	var new_row = output.row(1).elements;
			var returned_row = [1,2,3];
			assert.equals(new_row, returned_row);
        },
        
        "sso MatrixBin.setRow test": function () {
        	var elements = [[1,2,3],
        					[4,5,6],
        					[7,8,9]];
        	var output = sso.MatrixBin.new_one(elements);
        	assert.equals(output.elements, elements);
        	var new_row = sso.VecBin.new_one([77, 44, 22]);
        	output.setRow(1, new_row)
			var new_elements = [[77,44,22],
								[4,5,6],
								[7,8,9]];
		    var new_output = output.elements;
			assert.equals(new_elements, new_output);
        },
        "sso MatrixBin.col test": function () {
        	var elements = [[1,2,3],
        					[4,5,6],
        					[7,8,9]];
        	var output = sso.MatrixBin.new_one(elements);
        	assert.equals(output.elements, elements);
        	var new_col = output.col(1).elements;
			var returned_col = [1,4,7];
			assert.equals(new_col, returned_col);
        },
        "sso MatrixBin.setCol test": function () {
        	var elements = [[1,2,3],
        					[4,5,6],
        					[7,8,9]];
        	var output = sso.MatrixBin.new_one(elements);
        	assert.equals(output.elements, elements);
        	var new_col = sso.VecBin.new_one([77, 44, 22]);
        	output.setCol(1, new_col)
			var new_elements = [[77,2,3],
								[44,5,6],
								[22,8,9]];
		    var new_output = output.elements;
			assert.equals(new_elements, new_output);
        },
        "sso MatrixBin.rows test": function () {
        	var elements = [[1,2,3],
        					[4,5,6],
        					[7,8,9]];
        	var output = sso.MatrixBin.new_one(elements);
        	var number_of_rows = output.rows();
			var value = 3;
			assert.equals(number_of_rows, value);
        },
         "sso MatrixBin.colus test": function () {
        	var elements = [[1,2,3],
        					[4,5,6],
        					[7,8,9]];
        	var output = sso.MatrixBin.new_one(elements);
        	var number_of_columns = output.colus();
			var value = 3;
			assert.equals(number_of_columns, value);
        },
        "sso MatrixBin.dup test": function () {
        	var elements = [[1,2,3],
        					[4,5,6],
        					[7,8,9]];
        	var output = sso.MatrixBin.new_one(elements);
        	var new_matrix = output.dup().elements;
			assert.equals(new_matrix, elements);
        },
         "sso MatrixBin.map test": function () {
        	var elements = [[1,2,3],
        					[4,5,6],
        					[7,8,9]];
        	var output = sso.MatrixBin.new_one(elements);
        	var new_matrix = output.map(function(x) { return x });
        	assert.equals(new_matrix.elements, elements);
        	var elements_2 = [[2,4,6],
        					  [8,10,12],
        					  [14,16,18]];
            var new_matrix_t2 = output.map(function(x) {return x * 2; });
			assert.equals(new_matrix_t2.elements, elements_2);
        },
        "sso MatrixBin.isSameSizeAs test": function () {
        	var elements = [[1,2,3],
        					[4,5,6],
        					[7,8,9]];
        	var output = sso.MatrixBin.new_one(elements);
        	var new_matrix = output.dup().elements;
			assert.equals(output.isSameSizeAs(new_matrix), true);
        },
        "sso MatrixBin.add test": function () {
        	var elements = [[1,2,3],
        					[4,5,6],
        					[7,8,9]];
        	var output = sso.MatrixBin.new_one(elements);
        	var new_matrix = output.map(function(x) { return x });
        	assert.equals(new_matrix.elements, elements);
        	var elements_2 = [[2,4,6],
        					  [8,10,12],
        					  [14,16,18]];
            var add_m  = sso.MatrixBin.new_one(elements_2);
            var answer = [[3,6,9],
            			  [12,15,18],
            			  [21,24,27]];
            var sum_matrix = output.add(add_m);
			assert.equals(sum_matrix.elements, answer);
        },
        "sso MatrixBin.subtract test": function () {
        	var elements = [[1,2,3],
        					[4,5,6],
        					[7,8,9]];
            var elements_3 = [[3,6,9],
            			      [12,15,18],
            			      [21,24,27]];
        	var output = sso.MatrixBin.new_one(elements_3);
        	var elements_2 = [[2,4,6],
        					  [8,10,12],
        					  [14,16,18]];
            var subtract_m  = sso.MatrixBin.new_one(elements_2);
            var subtract_matrix = output.subtract(subtract_m);
			assert.equals(subtract_matrix.elements, elements);
        },
         "sso MatrixBin.leftMultiply test": function () {
        	var elements = [[1,2,3],
        					[4,5,6],
        					[7,8,9]];
        	var output = sso.MatrixBin.new_one(elements);
			assert.equals(output.leftMultiply(output), true);
        },
          "sso MatrixBin.boolMultiply test": function () {
        	var elements_one = [[0,1,0],
        					    [0,0,1],
        					    [1,0,0]];
        	var elements_two = [[0,0,1],
    			      			[1,0,0],
    			 			    [0,1,0]];
        	var matrix_one = sso.MatrixBin.new_one(elements_one);
        	var matrix_two = sso.MatrixBin.new_one(elements_two);
        	assert.equals(matrix_one.elements, elements_one);
        	assert.equals(matrix_two.elements, elements_two);
        	var answer = [[1,0,0],
				  		  [0,1,0],
				  		  [0,0,1]];
            var bool_multiply_matrix = matrix_one.boolMultiply(matrix_two);
			assert.equals(bool_multiply_matrix.elements, answer);
        },
        "sso MatrixBin.setElements test": function () {
        	var elements_one = [[1,2,3],
        				    	[4,5,6],
        				  	    [7,8,9]];
        	var matrix_one = sso.MatrixBin.new_one(elements_one);
        	var elements_two = [[1,2,3],
				  	            [4,5,6],
				                [7,8,9]];
			matrix_one.setElements(elements_two);
			assert.equals(matrix_one.elements, elements_two);
        },
         "sso_win document.Id.one test": function () {
         	//var element = window.document.getElementById("main_h1");
        	assert.equals(1, 1 );
        } 
        
});

buster.testCase("SSO application logic test", {
	"test application logic": function () {
            assert.equals( 1 + 1, 2);
        },
        "sso_logic notice test": function () {
        	assert.equals( ssologic.notice, "An Abstract Relation Type (ART) implementation.");
        },
        "sso_logic author test": function () {
        	assert.equals(ssologic.author, "Joseph James Simpson");
        },
});




