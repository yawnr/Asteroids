function(root){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var root.Asteroids.MovingObject = function(obj){
    this.pos = obj[pos];
    this.vel = obj[vel];
    this.radius = obj[radius];
    this.color = obj[color];
  };

  root.Asteroids.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
  };

  root.Asteroids.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  };

  

}(this);
