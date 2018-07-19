// external js: isotope.pkgd.js
var qsRegex;

var $grid = $('.grid').isotope({
  itemSelector: '.tile-item',
  masonry: {columnWidth: 80},

  filter: function() {
    return qsRegex ? $(this).find('.industry').text().match( qsRegex ) : true;
  }

});

// use value of search field to filter
var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  //window.alert('val: ' + $quicksearch.val());
  $grid.isotope();
}, 200 ) );

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}

$(window).load( function(){

    // window.alert('window loaded')

    // Loop through and create new items
    for(i = 0; i < bea.length; i++){

          //
          var $items = $("<div class= 'tile-item'> <h3 class= industry> " + bea[i].industry
           + " </h3>" + "<p>GDP Growth:</p>" + "<p>" + bea[i].gdp_growth + "</p></div>");

          // append elements to container
          $grid.append( $items )

          // add and lay out newly appended elements
          .isotope( 'appended', $items);
    }

  //  .isotope( 'reLayout', callback )

});
