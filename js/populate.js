// external js: isotope.pkgd.js

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: 80
  }
});

$(window).load(function(){
    
  // Loop through and create new items
    for(i = 0; i < bea.length; i++){
        
          //
          var $items = "<div class='grid-item grid-item--width3 grid-item--height2'><h3>" + bea[i].industry +"</h3>"+
        "<p>GDP Growth:</p>"+bea[i].gdp_growth+"</div>";
        
          
          // append elements to container
          $grid.append( $items )
            // add and lay out newly appended elements
            .isotope( 'appended', $items );
    }

});