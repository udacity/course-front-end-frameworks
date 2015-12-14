var MountainRouter = Backbone.Router.extend({
    routes: {
        '': 'home',
        'mountain/:id': 'mountain',
        'download/*brochure': 'downloadBrochure'
    },

    home: function(){ ... },
    mountain: function(id) { ... },
    downloadBrochure: function(brochure) { ... }
});
