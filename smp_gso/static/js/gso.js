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
    
 
 function reachabilityMatrix(matrixIn) {
 	var rmOne;
 	var rmTwo;
 	var rmOut_1;
 	var rmOut_2;
 	var rmDiff_1;
 	var rmDiff_2;
 	var colorInferred;
 	var textInferred;
 	var tempGridColor;
 	var tempGridText;
 	var done = new Boolean(0);
 	var loopFlag = 25;
 	var ri;
 	var rx;
 	var matrix_sum;
 
 // start utility function here
	rmOne = matrixIn.dup();
	rmTwo = matrixIn.dup();
	rmOut_1 = rmOne.boolMultiply(rmTwo);
	rmOut_2 = rmOut_1.boolMultiply(rmTwo);
	tempGridColor = gridColor.dup();
	tempGridText = gridText.dup();
	
	// start a loop to calculate the reachability matrix
	while((!done) && (loopFlag > 0)) {
		rmDiff_1 = rmOut_2.subtract(rmOut_1);
		//check to see if sum of rmDiff_1 is equal to zero
		// if not boolMultiply rmOut_2 by rmTwo
		// continue the boolMultiply until sum of rmDiff_1 is zero
		matrix_sum = rmOut_2.subtract(rmOut_1);
		if(matrix_sum === 0) {
			done = new Boolean(1);
			loopFlag = 0;
		}else {
			rmOut_1 = rmOut_2;
			rmOut_2 = rmOut_2.boolMultiply(rmTwo);
		}
	
		loopFlag = loopFlag - 1;
	}

	rmDiff_2 = rmOut_2.subtract(rmOne);
	
	colorInferred = rmDiff_2.map(function(rx){if(rx >= 1){return 4;}else{return 0;}});
    textInferred = rmDiff_2.map(function(rx){if(rx >= 1){return 1;}else{return 0;}});
    
    tempGridColor = tempGridColor.add(colorInferred);
    tempGridText =tempGridText.add(textInferred);
    
    gridColor = tempGridColor;
	gridText = tempGridText;
    // end utility function here....
 }
 
 //#######################################################################################
 //#######################################################################################
 //
 //   Now build a function to swap the selected row and column pairs
 //   That are existing data in the grid (move city data )
 //
 //#######################################################################################
 //#######################################################################################
 
 function moveRC() {
 	var cellSize = 20; 
 	var moveOne = document.getElementById("moveOne").value;
 	var moveTwo = document.getElementById("moveTwo").value;
 	var canvas = document.getElementById("SSO_1"); 	
	var context = canvas.getContext("2d");
	var canvas_1 = document.getElementById("SSO_2");
	var context_1 = canvas_1.getContext("2d");
	var canvas_2 = document.getElementById("SSO_3");
	var context_2 = canvas_2.getContext("2d");
	
	var tempRowOneColor;
	var tempRowTwoColor;
	var tempRowOneText;
	var tempRowTwoText;
	
	var tempColOneColor;
	var tempColTwoColor;
	var tempColOneText;
	var tempColTwoText;
	
	var tempGridColor;
	var tempGridText;
	var mx;
	var my;
	var mi;
	var moveOneIndex;
	var moveTwoIndex;
	
	
	tempGridColor = gridColor.dup(); 
	tempGridText = gridText.dup(); 
	
	
	moveOneIndex = vNames.indexOf(moveOne);
	moveTwoIndex = vNames.indexOf(moveTwo);
	
	vNames.setE(moveTwoIndex, moveOne); 
	vNames.setE(moveOneIndex, moveTwo); 

	tempRowOneColor = gridColor.row(moveOneIndex);
	tempRowTwoColor = gridColor.row(moveTwoIndex);
	tempRowOneText = gridText.row(moveOneIndex);
	tempRowTwoText = gridText.row(moveTwoIndex);
	
	tempGridColor.setRow(moveTwoIndex, tempRowOneColor);
	tempGridColor.setRow(moveOneIndex, tempRowTwoColor);
	tempGridText.setRow(moveTwoIndex, tempRowOneText);
	tempGridText.setRow(moveOneIndex, tempRowTwoText);
	
	tempColOneColor = tempGridColor.col(moveOneIndex);
	tempColTwoColor = tempGridColor.col(moveTwoIndex);
	tempColOneText  = tempGridText.col(moveOneIndex);
	tempColTwoText  = tempGridText.col(moveTwoIndex);
	
	tempGridColor.setCol(moveTwoIndex, tempColOneColor);
	tempGridColor.setCol(moveOneIndex, tempColTwoColor);
	tempGridText.setCol(moveTwoIndex, tempColOneText);
	tempGridText.setCol(moveOneIndex, tempColTwoText);
	
	gridColor = tempGridColor;
	gridText = tempGridText;
	
	//############## draw code here ########
    // need to redraw the main canvas using text values
 	// use the gridColor matrix
 	for (mx = 0; mx < 19 ; mx++) { 
 	    var color;
 		GSO_OP.WebOps.drawXGridCell(mx+1, canvas_1, context_1, cellSize, vNames); //added +1
        for (my = 0; my < 19; my++) { 
        		GSO_OP.WebOps.drawYGridCell(my+1, canvas_2, context_2, cellSize, vNames); //added +1
            	color = gridColor.e(mx+1,my+1);
            	switch(color)
            	{
            		case 1:
            			GSO_OP.WebOps.drawYellowCell(mx, my, canvas, context, cellSize); 
            			break;
            		case 2:
            			GSO_OP.WebOps.drawRedCell(mx, my, canvas, context, cellSize);
            			//alert ("Drawing red cell in the box swap function");
            			break;
            		case 3:
            			GSO_OP.WebOps.drawGreenCell(mx, my, canvas, context, cellSize);
            			break;
            		case 5:
            			drawLightBlueCell(mx, my, canvas, context, cellSize); // code not used
            			break;		
            	}
            	
            	GSO_OP.WebOps.drawText(mx, my, canvas, context, cellSize, gridText);   		
        }	
 	}
        
	//############# draw code end ###########
	
 	document.getElementById("moveData").style.display="none";
 }
 
 
 //################################################################################################
 //################################################################################################
 //
 //   Now build a function to swap the selected row and column pairs
 //   That are entered for the first time in the grid.. (modify swapRC()
 //   based on the approach in moveRC()
 //
 //################################################################################################
 //################################################################################################
 function swapRC() {
 	var cellSize = 20; // should be in global function variable
 	var rcOne = document.getElementById("one").value;
 	var rcTwo = document.getElementById("two").value;
 	var canvas = document.getElementById("SSO_1"); 	
	var context = canvas.getContext("2d");
	var canvas_1 = document.getElementById("SSO_2");
	var context_1 = canvas_1.getContext("2d");
	var canvas_2 = document.getElementById("SSO_3");
	var context_2 = canvas_2.getContext("2d");
	
	
	var tempRCOneIndex;
	var tempRCTwoIndex;
	var tempGridColorSwap; 
	var tempGridTextSwap; 
	var tempRowOneColorSwap; 
	var tempRowTwoColorSwap; 
	var tempRowOneTextSwap; 
	var tempRowTwoTextSwap; 
	var tempColOneColorSwap; 
	var tempColTwoColorSwap; 
	var tempColOneTextSwap; 
	var tempColTwoTextSwap; 
	var si; 
	var sx; 
	var sy; 
	
	tempRCOneIndex = vNames.indexOf(rcOne); 
	tempRCTwoIndex = vNames.indexOf(rcTwo); 
	
	tempGridColorSwap = gridColor.dup(); 
	tempGridTextSwap = gridText.dup();  
	
	vNames.setE(tempRCTwoIndex, rcOne); 
	vNames.setE(tempRCOneIndex, rcTwo); 
	
	tempRowOneColorSwap = gridColor.row(tempRCOneIndex);
	tempRowTwoColorSwap = gridColor.row(tempRCTwoIndex);
	tempRowOneTextSwap = gridText.row(tempRCOneIndex);
	tempRowTwoTextSwap = gridText.row(tempRCTwoIndex);
	
	tempGridColorSwap.setRow(tempRCTwoIndex, tempRowOneColorSwap);
	tempGridColorSwap.setRow(tempRCOneIndex, tempRowTwoColorSwap);
	tempGridTextSwap.setRow(tempRCTwoIndex, tempRowOneTextSwap);
	tempGridTextSwap.setRow(tempRCOneIndex, tempRowTwoTextSwap);
	
	tempColOneColorSwap = tempGridColorSwap.col(tempRCOneIndex);
	tempColTwoColorSwap = tempGridColorSwap.col(tempRCTwoIndex);
	tempColOneTextSwap  = tempGridTextSwap.col(tempRCOneIndex);
	tempColTwoTextSwap  = tempGridTextSwap.col(tempRCTwoIndex);
	
	tempGridColorSwap.setCol(tempRCTwoIndex, tempColOneColorSwap);
	tempGridColorSwap.setCol(tempRCOneIndex, tempColTwoColorSwap);
	tempGridTextSwap.setCol(tempRCTwoIndex, tempColOneTextSwap);
	tempGridTextSwap.setCol(tempRCOneIndex, tempColTwoTextSwap);
	
	gridColor = tempGridColorSwap;
	gridText = tempGridTextSwap;
	
	//############## draw code here ########
    // need to redraw the main canvas using text values
 	for (sx = 0; sx < 19 ; sx++) { 
 	    var color;
 		GSO_OP.WebOps.drawXGridCell(sx+1, canvas_1, context_1, cellSize, vNames); // added +1
        for (sy = 0; sy < 19; sy++) { 
        		GSO_OP.WebOps.drawYGridCell(sy+1, canvas_2, context_2, cellSize, vNames); // added +1
            	color = gridColor.e(sx+1,sy+1);
            	switch(color)
            	{
            		case 1:
            			GSO_OP.WebOps.drawYellowCell(sx, sy, canvas, context, cellSize); 
            			break;
            		case 2:
            			GSO_OP.WebOps.drawRedCell(sx, sy, canvas, context, cellSize);
            			//alert ("Drawing red cell in the box swap function");
            			break;
            		case 3:
            			GSO_OP.WebOps.drawGreenCell(sx, sy, canvas, context, cellSize);
            			break;
            		case 5:
            			drawLightBlueCell(sx, sy, canvas, context, cellSize); // code not used
            			break;	
            			
            	}
            	
            	GSO_OP.WebOps.drawText(sx, sy, canvas, context, cellSize, gridText);  	
        }	
 	}
        
	
	
	//############# draw code end ###########
	
	document.getElementById("one").value = "N";
 	document.getElementById("two").value = "N";
 	document.getElementById("northTrue").style.display="none";
    document.getElementById("northFalse").style.display="none";
    document.getElementById("entryButton").style.display="inline";
    document.getElementById("processButton").style.display="inline";
    document.getElementById("inferenceButton").style.display="inline";
 }
 
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
     	}
      
    }
 
     return sum;
     
     
 }    