"use strict";

(function(){

  var Asteroids = window.Asteroids = window.Asteroids || {};

  var COLOR = "black";
  var RADIUS = 40;

  Asteroids.Asteroid = function (obj) {
  // MovingObject(this);

  this.pos = obj["pos"];
  this.color = COLOR;
  this.radius = RADIUS;
  this.vel = Asteroids.Util.randomVec(.1);
};

// Asteroids.Asteroid.inherits(Asteroids.MovingObject);

Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

})();
