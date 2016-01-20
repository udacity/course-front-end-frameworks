var templateInfo = _.template($('#beach-supplies').html(), {variable: 'supplies'});

jQuery('#beach-info').html(
    templateInfo({
        empty: false,
        sunscreen: true,
        towel: 'red'
        // , shades: true
    })
);
