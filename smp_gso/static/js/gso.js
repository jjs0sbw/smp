"use strict";
/*
 * Copyright (c) 2013, 2014 Joseph J. Simpson
 * This file is part of the General Subornation (GSO) web application (GSOWA).
 * This file in GSOWA is free software: you can redistribute ist and/or modify
 * it under the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * The GSOWA program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A 
 * PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along with GSOWA.
 * If not, see <http://www.gnu.org/licenses/>
 */
 

var gridText;
var gridColor;
var vNames;


 window.onload = function() {
                    document.getElementById("one").value = "N";
 	                document.getElementById("two").value = "N";
 					document.getElementById("northTrue").style.display="none";
 					document.getElementById("northFalse").style.display="none";
 					document.getElementById("moveData").style.display="none";
 					
					var initButton = document.getElementById("initButton");
					initButton.onclick = initHandler;

 	}; 
 	
 // initialize the window with a blank canvas 
 // and data input area..	
 	
 	function initHandler() {
			var canvas = document.getElementById("SSO_1"); 	
			var context = canvas.getContext("2d");
			var canvas_1 = document.getElementById("SSO_2");
			var context_1 = canvas_1.getContext("2d");
			var canvas_2 = document.getElementById("SSO_3");
			var context_2 = canvas_2.getContext("2d");
			var result = GSO_OP.WebOps.initZero();
			
			gridText = result.text;
			gridColor = result.color;
			vNames = result.names;
				
			GSO_OP.WebOps.initGrid(canvas, context, canvas_1, context_1, canvas_2, context_2, gridText, vNames);
			document.getElementById("one").value = "N";
 	        document.getElementById("two").value = "N";
			document.getElementById("moveData").style.display="none";
			document.getElementById("northTrue").style.display="none";
            document.getElementById("northFalse").style.display="none";
            
            //write out gridText 
            GSO_OP.WebOps.writeToDocOne(gridText.view());	
            //writeToDocOne(scan_upper_for_ones());	

    };
    

 //################################################################################################
 //################################################################################################
 //
 //   A function to detect the presence of a one (1) in the upper triangular area
 //   -- If there are no ones (1) in the upper triangular area, 
 //   -------- then the inference button is displayed for use
 //   -- If there are ones (1) in the upper triangular area ,
 //   -------- then the process button is displayed.
 //
 //   Adds tighter process logic to the GUI interface
 //
 //################################################################################################
 //################################################################################################
 
 // scan_upper_for_ones returns true if a 1 is found, false otherwise
 // all the matrix diagonal entries are zero (0), so the matrix may be correctly 
 // scanned by starting with entry 0,0 and adding all the values in the first row (0).
 // Then proceed with scanning row two (2) at 1,1 and add all elements in column 1 to 19.
 // Then scan row three (3) starting at 2,2 and add all elements in  columns 2 to 19.
 // Next scan row four (4) starting at 3,3 and add all elements in columns 3 to 19.
 // Continue scanning each row and adding the elements in the selected columns.
 // If the sum of the adding operation is greater than zero (0) return false.
 // If the sum of the adding operation is equal to zero (0) return true
 
 function scan_upper_for_ones() {
     var num = 19;
     var sum = 0;
     var value = 0;
     for (var i = 0; i < num; i++) {
     	for(var j = 0; j <= i; j++) {
     		value = gridText.elements[j,i]; // swap i,j
     		sum = parseInt(sum) + parseInt(value);
     	};
      
    };
 
     return sum;
     
     
 };    