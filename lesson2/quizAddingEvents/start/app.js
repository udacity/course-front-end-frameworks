function purchase( present ) {
    console.log('Buying ' + present);
}

function build( gift ) {
    console.log('building ' + gift);
}

var jack = {};
_.extend(jack, Backbone.Events);

// The following is pseudo-code for what the `jack.events` object should look like:
//
// jack.events = {
//     birthday: [{callback: purchase}],
//     party: [{callback: purchase}],
//     presents [
//         {callback: purchase},
//         {callback: build}
//     ]
// }
