var obj1 = {};               // A new object via Object literal
var arr1 = [];               // A new array via Array literal
var func1 = function() {};   // A new function via Function literal


var obj2 = new Object();     // A new object via Object constructor
var arr2 = new Array();      // A new array via Array constructor
var func2 = new Function();  // A new Function via Function Constructor



var adder1 = function(num1, num2) {
    return num1 + num2;
};

var adder2 = new Function("num1", "num2", "return num1 + num2");

adder1(1, 2); // 3
adder2(3, 4); // 7


function makeFun() {
    return new Function('noun', "return noun[0].toUpperCase() + noun.slice(1) + ' is fun!'");
}

var isFun = makeFun();

isFun('biking');      // 'Biking is fun!'
isFun('climbing');    // 'Climbing is fun!'
isFun('broccoli');    // 'Broccoli is fun!'
