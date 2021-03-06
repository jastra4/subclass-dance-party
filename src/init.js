$(document).ready(function() {
  window.dancers = [];
  window.postiions = [];
  //window.bob = {};

  $('.clear').on('click', function (event) {
    window.dancers = [];
    console.log('test');
    $('.delete').remove();
  });

  $('body').on('click', '.purple', function() {

    $('body').on('mouseleave', '.purple', function(event) {
      //console.log(event.pageX + ", " + event.pageY);
      //$(this).toggleClass('reaction');
      $(this).remove();
      //var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
      //var dancerMakerFunction = window[dancerMakerFunctionName];    
      //var dancer = new dancerMakerFunction(event.pageX, event.pageY, Math.random() * 1000);
      var dancer = new MakePurpleDancer(event.pageY - 60, event.pageX - 90);
      $('body').append(dancer.$node);
    });

  });  


  $('.lineUp').on('click', function(event) {
    //console.log($('body').width());
    var spread = $(window).width() / (window.dancers.length + 1);
    for (var i = 0, x = spread; i < window.dancers.length; i++, x = x + spread) {
      window.dancers[i].lineUp(x);
      //console.log(x);
    }
  });

  $('.scatter').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var x = $("body").width() * Math.random();
      var y = $("body").height() * Math.random();
      window.dancers[i].scatter(y, x);
      //console.log(x);
    }
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    if (dancerMakerFunction === Bob) {
      window.bob = {top: 700, left: 50};
    }
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    //console.log(dancer);
    $('body').append(dancer.$node);
  });

});

