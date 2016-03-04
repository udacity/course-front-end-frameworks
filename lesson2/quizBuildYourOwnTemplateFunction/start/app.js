// Create the your own `template` function:
//
// • the `template` function should accept
//    1. a string of the template to parse
//    2. an `options` object for custom delimiters
//        - an `open` property for the open delimiter
//        - a `close` property for the close delimiter
// • the default delimiters the `template` function should use are:
//    1. `*(` for the opening delimiter
//    2. `)*` for the closing delimiter
// • the `template` function should return a function
// • the returned function should accept:
//    1. one argument for each placeholder in the original string
//    2. a number - this is how many times the string should be logged to the console
//
// EXAMPLE:
// in the example below `*(` is my default opening delimiter and `)*` is the default closing delimiter
// var string = "Hi, my name is Richard. And I *( emotion )* this *( thing )*!";
// var logResult = template( string );
// logResult( 'love', 'ice cream', 2 ); // logs the message "Hi, my name is Richard. And I love this ice cream!", twice
//
//
// var string = "Is <<! thing !>> healthy to <<! action !>>?";
// var logResult = template( string, {open: '<<!', close: '!>>'} );
// logResult( 'ice cream', 'consume', 7 ); // logs the message "Is ice cream healthy to consume?", seven times
//

var template = function(text, options) {
    var delimiter = {
        open: '*(',
        close: ')*'
    };
    var templateString = [];
    var i = 1;
    var closingDelimiterLoc = 0;
    var functionArguments = [];
    var theVariable, remaining;

    var wrapInQuotes = function( text ) {
        return "'" + text + "'";
    };

    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            if (options[key] !== undefined) {
                delimiter[key] = options[key];
            }
        }
    }

    var segments = text.split( delimiter.open );
    var numOfSegments = segments.length;

    templateString.push( wrapInQuotes(segments[0]) );

    while (i < numOfSegments) {
        closingDelimiterLoc = segments[i].indexOf( delimiter.close );

        theVariable = segments[i].slice( 0, closingDelimiterLoc );
        functionArguments.push( theVariable );
        templateString.push( theVariable );

        remaining = segments[i].slice( closingDelimiterLoc + delimiter.close.length );
        templateString.push( wrapInQuotes(remaining) );

        i++;
    }

    templateString = 'while(times--) { console.log(' + templateString.join( '+' ) + ')}';

    var functionArgs = functionArguments.length > 1 ? functionArguments.join( ',' ) : functionArguments;

    if (functionArgs.length === 0) {  return; }

    return new Function( functionArgs, 'times', templateString );
};

var string = "Hi, my name is Richard. And I *( emotion )* this *( thing )*!";
var logResult = template( string );
logResult( 'love', 'ice cream', 2 );

// custom delimiters

var string = "Hi, my name is Richard. And I <<! emotion !>> this <<! thing !>>!";
var logResult = template( string, {open: '<<!', close: '!>>'} );
logResult( 'love', 'ice cream', 2 );
