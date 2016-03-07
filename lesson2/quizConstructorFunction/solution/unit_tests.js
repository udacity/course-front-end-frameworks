var grader = new Grader();

grader.addTest(function() {
        return typeof numLetters === 'function';
    }, {
        wrongMessage: '"numLetters" should exist and be a function.'
    },
    false
);

grader.addTest(function() {
        var result = numLetters('a');
        return typeof result === 'function';
    }, {
        wrongMessage: '"numLetters" should return a function.'
    },
    false
);

grader.addTest(function() {
        var lotsOfBbbbs = numLetters('b');
        var result = lotsOfBbbbs(9);

        return typeof result === 'string';
    }, {
        wrongMessage: 'The function returned by "numLetters" should return a string when called.'
    },
    false
);

grader.addTest(function() {
        var lotsOfCcccs = numLetters('c');
        var result1 = lotsOfCcccs(9);

        return (result1.length === 9);
    }, {
        wrongMessage: 'Running `numLetters("c")(9)` should return the string `ccccccccc`.'
    },
    false
);

grader.addTest(function() {
        var lotsOfCcccs = numLetters('c');
        var result3 = lotsOfCcccs(3);

        return result3 === 'ccc';
    }, {
        wrongMessage: 'Running `numLetters("c")(3)` should return the string `ccc`.'
    },
    false
);

grader.addTest(function() {
        var lotsOfDddds = numLetters('d');
        var value = lotsOfDddds(9.7);

        return value.length === 10
    }, {
        wrongMessage: 'Calling the function returned by "numLetters" with 9.7 should return a string that\'s 10 characters long.'
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
