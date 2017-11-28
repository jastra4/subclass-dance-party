var Bob = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span id="bob" class="purple delete"><img id="bobby" src="https://vignette.wikia.nocookie.net/bobsburgerpedia/images/3/3e/Bobbelcher2.png/revision/latest/scale-to-width-down/200?cb=20130114075133"></span>');
  this.top = 700;
  this.left = 0;
  this.turn = 0;
  this._timeBetweenSteps = 30;
  MakeDancer.prototype.setPosition.call(this, this.top, this.left);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

Bob.prototype = Object.create(MakeDancer.prototype);
Bob.prototype.constructor = Bob;

Bob.prototype.step = function() {
  console.log('clicked');  
  // call the old version of step at the beginning of any call to this new version of step
  //console.log('test');
  // if (this.left < 50) {
  //   this.left += 1;
  //   this.turn = 0;
  // }
  // if (this.turn = 1 || this.left > 200) {
  //   this.left -= 1;
  //   this.turn = 1;
  //   MakeDancer.prototype.setPosition.call(this, this.top, this.left);
  //   MakeDancer.prototype.step.call(this);
  // }
  this.left += 1;
  // window.bob.top += 1;
  // window.bob.left += 1;
  MakeDancer.prototype.setPosition.call(this, this.top, this.left);
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};