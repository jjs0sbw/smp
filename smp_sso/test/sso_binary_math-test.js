"use strict"
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
        }
        
        

             
        
});
