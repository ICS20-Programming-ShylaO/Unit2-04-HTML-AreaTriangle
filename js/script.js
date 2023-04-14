// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of the triangle.
 */
function calculate () {
  // get a, b, base, and height from user
  let a = parseFloat(document.getElementById('side-a-triangle').value);
  let b = parseFloat(document.getElementById('side-b-triangle').value);
  let base = parseFloat(document.getElementById('base-triangle').value);
  let height = parseFloat(document.getElementById('height-triangle').value);

  // calculate perimeter and area
  let area = base * height / 2;
  let perimeter = (a + b + base);

  // display perimeter and area
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}
