// get template from HTML
var brickTemplate = document.querySelector( '#brick-template' );
var brickContainer = document.querySelector( '#brick-container' );

// compile source template into a template function
var template = Handlebars.compile( brickTemplate.innerHTML );

// the app's data
var context = {name: 'Red Brick', description: 'A colored brick that can be used to...'};

// build the HTML template with the supplied data
var html = template(context);

// fill the page with content
brickContainer.innerHTML = html;
