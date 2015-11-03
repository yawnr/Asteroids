"use strict";

(function(){

  var Asteroids = window.Asteroids = window.Asteroids || {};

  var RADIUS = 10;
  var COLOR = "blue";

Asteroids.Ship = function(pos){
  this.vel = [0,0];
  this.pos = pos;
  this.radius = RADIUS;
  this.color = COLOR;
}


Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

// Asteroids.Ship.prototype.relocate = function () {
//   var pos = [];
//   pos[0] = 1200 * Math.random();
//   pos[1] = 800 * Math.random();
//
//   this.pos = pos;
// }

})();
