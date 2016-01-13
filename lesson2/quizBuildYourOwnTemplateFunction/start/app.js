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

    return new Function( functionArguments.join( ',' ), 'times', templateString );
};

var string = "Hi, my name is Richard. And I *( emotion )* this *( thing )*!";
var logResult = template( string );
logResult( 'love', 'ice cream', 2 );

// custom delimiters

var string = "Hi, my name is Richard. And I <<! emotion !>> this <<! thing !>>!";
var logResult = template( string, {open: '<<!', close: '!>>'} );
logResult( 'love', 'ice cream', 2 );
