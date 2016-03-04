var grader = new Grader('sync');

grader.addTest(function() {
        return typeof template === 'function';
    }, {
        wrongMessage: '`template` should exist and be a function.'
    },
    false
);

grader.addTest(function() {
        return template.length === 2;
    }, {
        wrongMessage: '`template` should have two arguments: \n\n1) the string to convert \n\n2) the options object.'
    },
    false
);

grader.addTest(function() {
        var result = template('substitution *(string)*');
        return typeof result === 'function';
    }, {
        wrongMessage: '`template` should return a function.'
    },
    false
);

grader.addTest(function() {
        var consoleCount = 0;
        var messageContent = '';
        (function() {
            console.log = function(message) {
                consoleCount++;
                messageContent = message;
            };

            var fillTemplate = template('My favorite candy is *(thing)*');
            fillTemplate('Skittles', 1);

            delete console.log;
        })();
        return messageContent === 'My favorite candy is Skittles';
    }, {
        wrongMessage: '`template` should handle substitution using default delimiters.'
    },
    false
);

grader.addTest(function() {
        var consoleCount = 0;
        var messageContent = '';
        var timesToConsoleLog = 2;

        (function() {
            console.log = function(message) {
                consoleCount++;
                messageContent = message;
            };

            var fillTemplate = template('My favorite candy is *(thing)*');
            fillTemplate('Skittles', timesToConsoleLog);

            delete console.log;
        })();

        return consoleCount === timesToConsoleLog;
    }, {
        wrongMessage: '`template` should log message correct number of times.'
    },
    false
);

grader.addTest(function() {
        var consoleCount = 0;
        var messageContent = '';
        (function() {
            console.log = function(message) {
                consoleCount++;
                messageContent = message;
            };

            var fillTemplate = template('My favorite candy is *(thing)*');
            fillTemplate('Skittles', 1);

            delete console.log;
        })();
        return messageContent === 'My favorite candy is Skittles';
    }, {
        wrongMessage: '`template` should handle substitution using default delimiters.'
    },
    false
);

grader.addTest(function() {
        var result = template('My favorite candy is <<thing>>', {open: '<<', close: '>>'});
        return typeof result === 'function';
    }, {
        wrongMessage: '`template` should return a function when using custom delimiters.'
    },
    false
);

grader.addTest(function() {
        var consoleCount = 0;
        var messageContent = '';
        (function() {
            console.log = function(message) {
                consoleCount++;
                messageContent = message;
            };

            var fillTemplate = template('My favorite candy is <<thing>>', {open: '<<', close: '>>'});
            fillTemplate('Skittles', 1);

            delete console.log;
        })();
        return messageContent === 'My favorite candy is Skittles';
    }, {
        wrongMessage: '`template` should handle substitution using _custom_ delimiters.'
    },
    false
);

grader.runTests();

var result = JSON.stringify({
    is_correct: grader.isCorrect,
    test_feedback: grader.getFormattedWrongMessages(),
    test_comments: grader.getFormattedComments(),
    congrats: "Great job!"
});

console.info("UDACITY_RESULT:" + result.toString());
