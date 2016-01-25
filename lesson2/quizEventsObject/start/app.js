function purchase( present ) { console.log('Buying ' + present); }
function build( gift ) { console.log('Building ' + gift); }

var jack = {};
_.extend(jack, Backbone.Events);


// what code results in the following?
jack._events = {
    birthday: [{callback: purchase}],
    party: [{callback: purchase}],
    presents: [
        {callback: purchase},
        {callback: build}
    ]
}


// solution
jack.on('birthday party presents', purchase);
jack.on('presents', build);
