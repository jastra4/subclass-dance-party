// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer delete"></span>');
  this.setPosition(top, left);
  this._timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.step();
  this.checkDistance();
  window.dancers.push(this);
};

MakeDancer.prototype.checkDistance = function () {
  var there = this;
  if (window.bob) {
    console.log(there);
    console.log(window.bob);
    console.log(window.bob.top, window.bob.left, this.top, this.left);
    var distance = Math.sqrt((Math.pow(window.bob.top - this.top), 2) + (Math.pow(window.bob.left - this.left), 2));
    //console.log(this.top, this.left);
    
    console.log('the dist is: ', distance);
    //console.log(window.bob.top);
    // pythagoreans theorem
    //this.setPosition();
  }
  
  setTimeout(function () { there.checkDistance(); }, 1000);
};

MakeDancer.prototype.lineUp = function(left) {
  this.setPosition($(window).height() / 2, left);
};

MakeDancer.prototype.scatter = function (top, left) {
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  var that = this;
  setTimeout(function () { that.step(); }, this._timeBetweenSteps);
};
  

MakeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

MakeDancer.prototype.constructor = MakeDancer;