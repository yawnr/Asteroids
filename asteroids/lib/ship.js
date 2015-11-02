"use strict";

(function(){

  var Asteroids = window.Asteroids = window.Asteroids || {};
  var RADIUS = 8;
  var COLOR = "black";
Asteroids.Ship = function(pos){
  this.vel = [0,0];
  this.pos = pos;
  this.radius = RADIUS;
  this.color = COLOR;
}

Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

})();
