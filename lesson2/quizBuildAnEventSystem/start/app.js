var EventTracker = function(name) {
    this.name = name;
    this._events = {};
    this._notify = {};
};

EventTracker.prototype.on = function(event, callback) {
    if (this._events[event] === undefined) {
        this._events[event] = [];
    }
    this._events[event].push( callback );
};

EventTracker.prototype.trigger = function(event, data) {
    var listOfCallbacks = this._events[event] || 0;
    var objectsToNotify = this._notify[event] || 0;
    var i;

    for (i = 0; i < listOfCallbacks.length; i++) {
        listOfCallbacks[i].call( this, data );
    }

    for (i = 0; i < objectsToNotify.length; i++) {
        objectsToNotify[i].trigger( event, data );
    }
};

EventTracker.prototype.notify = function(otherObject, event) {
    if (this._notify[event] === undefined) {
        this._notify[event] = [];
    }
    this._notify[event].push( otherObject );
};

// not used in quiz
EventTracker.prototype.watch = function(otherObject, event, callback) {
    otherObject.notify( this, event );
};

function purchase(item) {
  console.log( 'purchasing ' + item);
}

function celebrate() {
    console.log( this.name + ' says birthday parties are awesome!' );
}

var nephewParties = new EventTracker( 'nephewParty' );
var richard = new EventTracker( 'Richard' );

// set up events
nephewParties.on( 'owensBirthday', purchase );
nephewParties.on( 'mainEvent', purchase );
richard.on( 'mainEvent', celebrate );
richard.on( 'timeToCelebrate', function() {
    console.log( '*' + this.name + ' throws confetti*' )
});

// set up notifiers
nephewParties.notify( richard, 'mainEvent' );
richard.watch( nephewParties, 'timeToCelebrate' );

// trigger events
nephewParties.trigger( 'owensBirthday', 'bike' );
nephewParties.trigger( 'mainEvent', 'ice cream' );
nephewParties.trigger( 'timeToCelebrate', 'woohoo!' );
