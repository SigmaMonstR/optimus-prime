// external js: isotope.pkgd.js

var feature = 'industry'
document.getElementById("industry").style.background='#6EA7F5'

function choose(choice){
    feature = choice; //console.log(feature);
    if (feature == 'industry') {
      document.getElementById("industry").style.background='#6EA7F5'
      document.getElementById("geography").style.background='#FFFFFF'
    }
    else {
      document.getElementById("geography").style.background='#6EA7F5'
      document.getElementById("industry").style.background='#FFFFFF'
    }
    document.getElementById("search").value = "";
    document.getElementById("search").focus();
}

var qsRegex;

var $grid = $('.grid').isotope({
  itemSelector: '.tile-item',
  masonry: {columnWidth: 80},

  filter: function() {
    if (feature == 'industry') {
      return qsRegex ? $(this).find('.industry').text().match( qsRegex ) : true;
    }
    else if (feature == 'geography') {
      return qsRegex ? $(this).find('.geography').text().match( qsRegex ) : true;
    }
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
          var $items = $( "<div class= 'tile-item'>" +
                            "<h4 class= geography> " + bea[i].geography + " </h4>" +
                            "<h2 class= industry> " + bea[i].industry + " </h2>" +
                            "<p>GDP Growth: " + bea[i].gdp_growth + "</p>" +
                          "</div>");

          // append elements to container
          $grid.append( $items )

          // add and lay out newly appended elements
          .isotope( 'appended', $items);
    }

    document.getElementById("search").focus();

});
