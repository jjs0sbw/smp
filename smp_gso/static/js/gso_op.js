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

GSO_OP.WebOps.new_one = function(grid1, grid2, grid3) {
  var Wo = new GSO_OP.WebOps();
  return Wo.setGrids(grid1, grid2, grid3);
};

var $Wo = GSO_OP.WebOps.new_one;
 
GSO.VecBin.init = function() {
  var ele = [];
  for(var i=0; i<n; i++)
  { 
  	 ele.push(0);
  }
  return GSO.VecBin.new_one(ele);
};
 
GSO.VecBin.l = function(n) {
  var ele = [];
  for(var i=0; i<n; i++)
  { 
  	 ele.push(1);
  }
  
  return GSO.VecBin.new_one(ele);
}; 
 	

 	
 
   
