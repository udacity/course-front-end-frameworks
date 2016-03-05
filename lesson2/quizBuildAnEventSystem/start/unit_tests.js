function performSubmission() {
    var grader = new Grader();

    grader.addTest(function() {
            return typeof EventTracker === 'function';
        }, {
            wrongMessage: '"EventTracker" should exist and be a function.'
        },
        false
    );

    // test `on` method exists
    grader.addTest(function() {
            var tracker = new EventTracker();
            return typeof tracker.on === 'function';
        }, {
            wrongMessage: 'An `EventTracker` instance should have an `on` method.'
        }
    );

    // test `notify` method exists
    grader.addTest(function() {
            var tracker = new EventTracker();
            return typeof tracker.notify === 'function';
        }, {
            wrongMessage: 'An `EventTracker` instance should have an `notify` method.'
        }
    );

    // not used in quiz
    // grader.addTest(function() {
    //         var tracker = new EventTracker();
    //         return typeof tracker.watch === 'function';
    //     }, {
    //         wrongMessage: 'An `EventTracker` instance should have an `watch` method.'
    //     }
    // );

    // test `trigger` method exists
    grader.addTest(function() {
            var tracker = new EventTracker();
            return typeof tracker.trigger === 'function';
        }, {
            wrongMessage: 'An `EventTracker` instance should have an `trigger` method.'
        }
    );

    // test all method exists
    grader.addTest(function() {
            var tracker = new EventTracker();

            var hasOnMethod = typeof tracker.on === 'function'
            // var hasWatchMethod = typeof tracker.watch === 'function';
            var hasNotifyMethod = typeof tracker.notify === 'function';
            var hasTriggerMethod = typeof tracker.trigger === 'function';

            return hasOnMethod && hasNotifyMethod && hasTriggerMethod;
        }, {
            wrongMessage: 'The `EventTracker` instance does not have all the required methods.'
        },
        false
    );

    // test `trigger` method
    grader.addTest(function() {
            var info = 'ice cream';

            function celebrate( data ) {
                celebrate.callCount++;
                celebrate.message = data;
            }

            celebrate.callCount = 0;
            celebrate.message = '';

            var richardTracker = new EventTracker( 'Richard' );
            richardTracker.on( 'mainEvent', celebrate );
            richardTracker.trigger( 'mainEvent', info );

            return celebrate.callCount === 1 && celebrate.message === info;
        }, {
            wrongMessage: '`trigger`ing an instance did not run the correct code setup by `on`'
        }
    );

    // test `notify` method
    grader.addTest(function() {
            var info = 'ice cream';

            function celebrate( data ) {
                celebrate.callCount++;
                celebrate.message = data;
            }

            celebrate.callCount = 0;
            celebrate.message = '';

            var richardTracker = new EventTracker( 'Richard' );
            var tracker2 = new EventTracker( 'nephewParty' );

            tracker2.notify( richardTracker, 'mainEvent' );
            richardTracker.on( 'mainEvent', celebrate );
            tracker2.trigger( 'mainEvent', info );

            return celebrate.callCount === 1 && celebrate.message === info;
        }, {
            wrongMessage: 'EventTracker instance A did not correctly `notify` EventTracker instance B.'
        }
    );

    // // test `watch` method
    // grader.addTest(function() {
    //         var info = 'ice cream';
    //
    //         function celebrate( data ) {
    //             celebrate.callCount++;
    //             celebrate.message = data;
    //         }
    //
    //         celebrate.callCount = 0;
    //         celebrate.message = '';
    //
    //         var richardTracker = new EventTracker( 'Richard' );
    //         var tracker2 = new EventTracker( 'nephewParty' );
    //
    //         richardTracker.watch( tracker2, 'mainEvent' );
    //         richardTracker.on( 'mainEvent', celebrate );
    //         tracker2.trigger( 'mainEvent', info );
    //
    //         return celebrate.callCount === 1 && celebrate.message === info;
    //     }, {
    //         wrongMessage: 'EventTracker instance A did not correctly `watch` EventTracker instance B.'
    //     }
    // );

    grader.runTests();

    return{
        is_correct: grader.isCorrect,
        test_feedback: grader.getFormattedWrongMessages('\n\n'),
        test_comments: grader.getFormattedComments(),
        congrats: 'Great job!'
    }
}
