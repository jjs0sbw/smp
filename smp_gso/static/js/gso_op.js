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
 
 
 

 	

 	
 
   
