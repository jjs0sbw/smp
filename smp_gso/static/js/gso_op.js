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
 
GSO_OP.WebOps.init = function() {
  var gridText = [];
  var gridColor = [];
  var gridNames = [];
  
  
  return {'text':grid_1, 'color':grid_2, 'names':grid_3} ;
};
 
GSO_OP.WebOps.updateGrids = function(gridText, gridColor, gridNames) {
  var ele = [];
  for(var i=0; i<n; i++)
  { 
  	 ele.push(1);
  }
  
  return GSO.VecBin.new_one(ele);
}; 
 	

 	
 
   
