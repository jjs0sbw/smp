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
 

 var GSO_OP = {
 	author: "Joseph James Simpson",
 	notice: "General Sequential Ordering Operations Type."
 };
 
GSO_OP.WebOps = function() {};

GSO_OP.WebOps.new_one = function(gridText, gridColor, gridNames) {
  var Wo = new GSO_OP.WebOps();
  return Wo.setGrids(gridText, gridColor, gridNames);
};

var $Wo = GSO_OP.WebOps.new_one;
 
GSO_OP.WebOps.initZero = function() {
  var gridText = GSO.MatrixBin.O(19);
  var gridColor = GSO.MatrixBin.O(19);
  var gridNames = GSO.VecBin.new_one([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
  
  return {text:gridText,
  	      color:gridColor,
  	      names:gridNames} ;
};

//################################################################################################
 //################################################################################################
 //#####
 //#####        Functions to initialize the 19 by 19 grid
 //#####
 //################################################################################################
 //################################################################################################

GSO_OP.WebOps.drawYellowCell = function(x, y, canvas, context, cellSize) {
		var x1 = x;
		var y1 = y;
        context.fillStyle = "yellow";
        context.fillRect(x1 * cellSize , y1 * cellSize , cellSize - 1, cellSize - 1);
};
    

GSO_OP.WebOps.drawXGridCell = function(x, canvas_1, context_1, cellSize, vNames) {
    	var text;
        context_1.fillStyle = "wheat";
        context_1.fillRect((x-1) * cellSize, 0, cellSize - 1, cellSize - 1);
        context_1.fillStyle = "black";
        context_1.font = "1em tahoma";
        text = vNames.e(x);
        if(x < 10){
        	context_1.fillText(text, (x * cellSize)-20, 15);
        };
        if(x >=10) {
        	context_1.fillText(text, (x * cellSize)-20, 15);
        };
};

GSO_OP.WebOps.enterYellowColor = function(x,y) {
    	gridColor.setE(x+1,y+1,1);
};

GSO_OP.WebOps.drawYGridCell =  function(y, canvas_2, context_2, cellSize,vNames) {
        var text;
        context_2.fillStyle = "wheat";
        context_2.fillRect(0, (y-1) * cellSize, cellSize - 1, cellSize - 1);
        context_2.fillStyle = "black";
        context_2.font = "1em tahoma";
        text = vNames.e(y);
        context_2.fillText(text, 0, (y * cellSize) - 5);
};
 
GSO_OP.WebOps.drawRedCell =  function(x, y, canvas, context, cellSize) {
        context.fillStyle = "red";
        context.fillRect(x * cellSize , y * cellSize , cellSize - 1, cellSize - 1);
};

GSO_OP.WebOps.enterRedColor = function(x,y) {
    	gridColor.setE(x+1,y+1,2);
};

GSO_OP.WebOps.drawGreenCell = function(x, y, canvas, context, cellSize) {
        context.fillStyle = "green";
        context.fillRect(x * cellSize , y * cellSize , cellSize - 1, cellSize - 1);
};
 
GSO_OP.WebOps.enterGreenColor = function(x,y) {
    	gridColor.setE(x+1,y+1,3);
};
  
GSO_OP.WebOps.drawLightBlueCell = function(x, y, canvas, context, cellSize) {
        context.fillStyle = "lightblue";
        context.fillRect(x * cellSize , y * cellSize , cellSize - 1, cellSize - 1);
};   

GSO_OP.WebOps.enterLightBlueColor = function(x,y) {
    	gridColor.setE(x+1,y+1,4);
};
    
GSO_OP.WebOps.drawText = function(x, y, canvas, context, cellSize, gridText){
	  var text;	
   	  context.fillStyle = "black";
   	  context.font = "1em tahoma";
   	  context.textAlign = "center";
   	  text = gridText.e(x+1, y+1);
   	  context.fillText(text, (((x + 1) * cellSize) - (cellSize / 2)), (((y + 1) * cellSize) - (cellSize / 4)));
};

GSO_OP.WebOps.drawText_1 = function(x, y, canvas, context, cellSize){ // code not used
   	  context.fillStyle = "black";
   	  context.font = "1em tahoma";
   	  context.textAlign = "center";
   	  context.fillText("1", (((x + 1) * cellSize) - (cellSize / 2)), (((y + 1) * cellSize) - (cellSize / 4)));
};
 
GSO_OP.WebOps.drawText_0 = function(x, y, canvas, context, cellSize){ // code not used
   	  context.fillStyle = "black";
   	  context.font = "1em tahoma";
   	  context.textAlign = "center";
   	  context.fillText("0", (((x + 1) * cellSize) - (cellSize / 2)), (((y + 1) * cellSize) - (cellSize / 4)));
	
}; 
 
GSO_OP.WebOps.initGrid = function(canvas, context, canvas_1, context_1, canvas_2, context_2, gridText, vNames) {
  var x;
  var y;  
  var cellSize = 20; // should be in global function
  context.fillStyle = "black";
  context.fillRect(0,0, canvas.width, canvas.height)
  context_1.fillStyle = "black";
  context_1.fillRect(0,0, canvas_1.width, canvas_1.height)
  context_2.fillStyle = "black";
  context_2.fillRect(0,0, canvas_2.width, canvas_2.height)
        
  for (x = 0; x < 19 ; x++) { 
        GSO_OP.WebOps.drawXGridCell(x+1, canvas_1, context_1, cellSize, vNames);
    
        for (y = 0; y < 19; y++) { 
            if(x != y){
                GSO_OP.WebOps.drawYellowCell(x, y, canvas, context, cellSize);
                GSO_OP.WebOps.enterYellowColor(x, y);
                GSO_OP.WebOps.drawYGridCell(y+1, canvas_2, context_2, cellSize, vNames); 
            };
              
            if(x == y){
            
              	GSO_OP.WebOps.drawRedCell(x, y, canvas, context, cellSize);
              	GSO_OP.WebOps.enterRedColor(x, y);
            };
           
            GSO_OP.WebOps.drawText(x, y, canvas, context, cellSize, gridText);          
         };
  };
};
 
GSO_OP.WebOps.writeToDocOne = function(message) {
    		document.getElementById("test_out").innerHTML = message;
};

//################################################################################################
//################################################################################################
//#####
//#####        Functions to enter data into the grid. Enter Data Button
//#####
//################################################################################################
//################################################################################################

GSO_OP.WebOps.enterData =  function() {
 	var rcOne = document.getElementById("one").value;
 	var rcTwo = document.getElementById("two").value;
 	var canvas = document.getElementById("SSO_1"); 	
	var context = canvas.getContext("2d");
	var cellSize = 20;
	var color = 0;
	var rcOneIndex;
	var rcTwoIndex;
	var ei;
	var ex;
	var ey;
	
	// get index numbers for the entered values
	rcOneIndex = vNames.indexOf(rcOne);
	rcTwoIndex = vNames.indexOf(rcTwo);
 	
 	if (!((rcOneIndex >= 1) && (rcOneIndex <= 19) && (rcTwoIndex >= 1) && (rcTwoIndex <= 19))) {
 		alert ("Please enter a value from 1 to 19 in each box");
 	} else if (rcOneIndex === rcTwoIndex){ 
 		alert ("Please enter two different values.. values can not be the same.");
 	} else {
 		// need to select the correct index of the input values
 		gridText.setE(rcOneIndex, rcTwoIndex, 1); 
 		gridText.setE(rcTwoIndex, rcOneIndex, 0); 
 		GSO_OP.WebOps.enterRedColor(rcTwoIndex-1, rcOneIndex-1); 
 		GSO_OP.WebOps.enterGreenColor(rcOneIndex-1, rcTwoIndex-1); 
 		
 		// need to redraw the main canvas using text values
 		// use the gridColor matrix
 		for (ex = 0; ex < 19 ; ex++) { // reduce to 0 and <
            for (ey = 0; ey < 19; ey++) { // reduce to 0 and <
            	color = gridColor.e(ex+1,ey+1); // take out the + 1
            	switch(color)
            	{
            		case 1:
            			GSO_OP.WebOps.drawYellowCell(ex, ey, canvas, context, cellSize);
            			break;
            		case 2:
            			GSO_OP.WebOps.drawRedCell(ex, ey, canvas, context, cellSize);
            			break;
            		case 3:
            			GSO_OP.WebOps.drawGreenCell(ex, ey, canvas, context, cellSize);
            			break;
            		case 5:
            			drawLightBlueCell(ex, ey, canvas, context, cellSize); // code not used
            			break;	
            	}
            	
            	GSO_OP.WebOps.drawText(ex, ey, canvas, context, cellSize, gridText);       
        	}; 
 		};
 		document.getElementById("northTrue").style.display="inline";
 		document.getElementById("northFalse").style.display="inline";
 		document.getElementById("entryButton").style.display="none";
        document.getElementById("processButton").style.display="none";
        document.getElementById("inferenceButton").style.display="none";
 		
 		
 	};
 	GSO_OP.WebOps.writeToDocOne("Just hit the enter data button");	
 	
 };	
     
 //#######################################################################################
 //#######################################################################################
 //#####
 //#####   Function to handle the case when "Green In Lower Section" 
 //#####   Assigned to the "Green In Lower Section" Button.
 //#####
 //#######################################################################################
 //#######################################################################################
 
 GSO_OP.WebOps.noSwapRC = function(){
 	document.getElementById("one").value = "N";
 	document.getElementById("two").value = "N";
 	document.getElementById("northTrue").style.display="none";
    document.getElementById("northFalse").style.display="none";
    document.getElementById("entryButton").style.display="inline";
    document.getElementById("processButton").style.display="inline";
    document.getElementById("inferenceButton").style.display="inline";

 };
 
 //#######################################################################################
 //#######################################################################################
 //#####
 //#####   Function to handle the case when a green cell is in the upper  
 //#####   area after a swap.  Displays the Move text input fields and
 //#####   "Move City Data" button.
 //#####
 //#######################################################################################
 //#######################################################################################

 GSO_OP.WebOps.processData = function() {
 	document.getElementById("moveData").style.display="inline";
 
 };
  	
//#######################################################################################
 //#######################################################################################
 //
 //   Now build a function to infer new information
 //   from the existing properly formed matrix (all green points in the lower triangular.)
 //   Associated with the Infer Information Button
 //
 //#######################################################################################
 //#######################################################################################
 
 GSO_OP.WebOps.inferenceProcess = function() {
 	var cellSize = 20; // should be in global function variable
 	var canvas = document.getElementById("SSO_1"); 	
	var context = canvas.getContext("2d");
	var canvas_1 = document.getElementById("SSO_2");
	var context_1 = canvas_1.getContext("2d");
	var canvas_2 = document.getElementById("SSO_3");
	var context_2 = canvas_2.getContext("2d");
	
	var tempGridColor;
	var tempGridText;
	var tempId;
	var rMatrix;
	var rmOne;
	var rmTwo;
	var rmOut_1;
	var rmOut_2;
	var rmDiff_1;
	var rmDiff_2;
	var colorInferred;
	var textInferred;
	var ii;
	var ix;
	var iy;
	
	tempGridColor = gridColor.dup();
	tempGridText = gridText.dup();
	tempId = GSO.MatrixBin.Id(19);
	rMatrix = tempGridText.add(tempId);
	
	GSO_OP.WebOps.reachabilityMatrix(rMatrix);
	
	//############## draw code here ########
    // need to redraw the main canvas using text values
 	for (ix = 0; ix < 19 ; ix++) { 
 		GSO_OP.WebOps.drawXGridCell(ix+1, canvas_1, context_1, cellSize, vNames); //added +1
        for (iy = 0; iy < 19; iy++) { 
                var color;
        		GSO_OP.WebOps.drawYGridCell(iy+1, canvas_2, context_2, cellSize, vNames); //added +1
            	color = gridColor.e(ix+1,iy+1);
            	switch(color)
            	{
            		case 1:
            			GSO_OP.WebOps.drawYellowCell(ix, iy, canvas, context, cellSize); 
            			break;
            		case 2:
            			GSO_OP.WebOps.drawRedCell(ix, iy, canvas, context, cellSize);
            			break;
            		case 3:
            			GSO_OP.WebOps.drawGreenCell(ix, iy, canvas, context, cellSize);
            			break;
            		case 5:
            			GSO_OP.WebOps.drawLightBlueCell(ix, iy, canvas, context, cellSize);
            			break;	
            	};
            	
            	GSO_OP.WebOps.drawText(ix, iy, canvas, context, cellSize, gridText);   		
        };	
 	};

	//############# draw code end ###########
	
 };
 	
 //#######################################################################################
 //#######################################################################################
 //#####
 //#####   Function create a reachability matrix
 //#####   Needs a input matrix
 //#####
 //#######################################################################################
 //#######################################################################################
 
 GSO_OP.WebOps.reachabilityMatrix = function(matrixIn) {
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
		};
	
		loopFlag = loopFlag - 1;
	};

	rmDiff_2 = rmOut_2.subtract(rmOne);
	
	colorInferred = rmDiff_2.map(function(rx){if(rx >= 1){return 4;}else{return 0;}});
    textInferred = rmDiff_2.map(function(rx){if(rx >= 1){return 1;}else{return 0;}});
    
    tempGridColor = tempGridColor.add(colorInferred);
    tempGridText =tempGridText.add(textInferred);
    
    gridColor = tempGridColor;
	gridText = tempGridText;
    // end utility function here....
 };
 
  //#######################################################################################
 //#######################################################################################
 //
 //   Now build a function to swap the selected row and column pairs
 //   That are existing data in the grid (move city data )
 //
 //#######################################################################################
 //#######################################################################################
 
 GSO_OP.WebOps.moveRC = function() {
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
            	};
            	
            	GSO_OP.WebOps.drawText(mx, my, canvas, context, cellSize, gridText);   		
        };	
 	};
        
	//############# draw code end ###########
	
 	document.getElementById("moveData").style.display="none";
 };
 
 //################################################################################################
 //################################################################################################
 //
 //   Now build a function to swap the selected row and column pairs
 //   That are entered for the first time in the grid.
 //
 //################################################################################################
 //################################################################################################
 GSO_OP.WebOps.swapRC = function() {
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
            			
            	};
            	
            	GSO_OP.WebOps.drawText(sx, sy, canvas, context, cellSize, gridText);  	
        };	
 	};
        
	
	
	//############# draw code end ###########
	
	document.getElementById("one").value = "N";
 	document.getElementById("two").value = "N";
 	document.getElementById("northTrue").style.display="none";
    document.getElementById("northFalse").style.display="none";
    document.getElementById("entryButton").style.display="inline";
    document.getElementById("processButton").style.display="inline";
    document.getElementById("inferenceButton").style.display="inline";
 };   
