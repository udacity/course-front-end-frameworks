var jack = {};

_.extend(jack, Backbone.Events);

jack.on('birthday', function(presents) {
    console.log('Buy a ' + presents);
});

jack.trigger('birthday', 'bicycle', 'sword', 'clarinet');
