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
  // input
  let side a = parseFloat(document.getElementById('side-a-triangle').value);
  let side b = parseFloat(document.getElementById('side-b-triangle').value);
  let base = parseFloat(document.getElementById('base-triangle').value);
  let height = parseFloat(document.getElementById('height-triangle').value);

  // process
  let area = base * height / 2;
  let perimeter = (Side a + Side b + base);

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}
