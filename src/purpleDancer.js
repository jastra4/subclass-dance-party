var MakePurpleDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="purple"></span>');
  //this.blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);
  // this.oldStep = this.blinkyDancer.step;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

MakePurpleDancer.prototype = Object.create(MakeDancer.prototype);
MakePurpleDancer.prototype.constructor = MakePurpleDancer;

MakePurpleDancer.prototype.step = function() {
  console.log('clicked');
  
  // call the old version of step at the beginning of any call to this new version of step
  //console.log('test');
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};


