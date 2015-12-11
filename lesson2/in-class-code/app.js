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


function make(adjective) {
    return new Function('noun', "return noun[0].toUpperCase() + noun.slice(1) + ' is " + adjective + "!'");
}

var isFun = make('fun');

isFun('biking');      // 'Biking is fun!'
isFun('climbing');    // 'Climbing is fun!'
isFun('broccoli');    // 'Broccoli is fun!'

var numLetters = function(letter) {
    return new Function('times', "if (times < 0) return ''; var result = ''; times = Math.round(times); while(times--) { result += '" + letter + "'; } return result;");
};

var LotsOfAaas = numLetters('a');

LotsOfAaas(4.3); // 'aaaa'


var templateInfo = _.template($('#beach-supplies').html(), {variable: 'supplies'});

jQuery('#beach-info').html(
    templateInfo({
        empty: false,
        sunscreen: true,
        towel: 'red'
        // , shades: true
    })
);


var jack = {};

_.extend(jack, Backbone.Events);

jack.on('birthday party presents', purchase);

jack.on('presents', build);

var owen = {};

_.extend(owen, Backbone.Events);

owen.on('presents', purchase);

owen.on('birthday presents');
