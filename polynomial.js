/*global console*/
/*jshint esversion:6*/

// This program will Take the polynomial:
//    x^2 - 4x + 7
// In this situation x will = 3.

(function () {
    'use strict';

    // Welcome the User
    console.log("Welcome to Polynomial");

    let x = 3;

    console.log(`If x = ${x}, the polynomial (x^2 - 4x + 7) will equal: ${Math.pow(x, 2) - 4 * x + 7}`);

    // Thank the User
    console.log("Thank you for using Polynomial");
})();
