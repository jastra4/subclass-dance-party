var Weirdo = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="purple delete"><img id="lady" src="http://i0.kym-cdn.com/photos/images/original/000/993/253/a0d.gif"></span>');
  MakeDancer.prototype.setPosition.call(this, top, left);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

Weirdo.prototype = Object.create(MakeDancer.prototype);
Weirdo.prototype.constructor = Weirdo;

Weirdo.prototype.step = function() {
  console.log('clicked');  
  // call the old version of step at the beginning of any call to this new version of step
  //console.log('test');
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};