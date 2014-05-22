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
    
