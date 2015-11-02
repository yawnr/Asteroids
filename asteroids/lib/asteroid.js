"use strict";
(function(){
COLOR = "grey"
RADIUS = 50;

var Asteroid = function (obj) {
  // MovingObject(this);
  this.pos = obj[pos];
  this.color = COLOR;
  this.radius = RADIUS;
  this.vel = Asteroids.util.randomVec(5);
};

Asteroids.inherits(MovingObject);
})();
