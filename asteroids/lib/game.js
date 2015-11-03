(function () {

  var Asteroids = window.Asteroids = window.Asteroids || {};

  var DIM_X = 1200;
  var DIM_Y = 800;
  var NUM_ASTEROIDS = 30;

  Asteroids.Game = function(){
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship(this.randomPosition());
    this.allObjs = this.allObjects();
  };

  Asteroids.Game.prototype.addAsteroids = function(){
    for (var i = 0; i < NUM_ASTEROIDS; i++){
      // var asteroid = Asteroids.Asteroid()
      this.asteroids.push(
        new Asteroids.Asteroid({ pos: [(DIM_X * Math.random()),
                                      (DIM_Y * Math.random())],
                                game: this
                                      }));
                                    };
  };

  Asteroids.Game.prototype.draw = function (ctx) {
    ctx.clearRect(0,0,DIM_X, DIM_Y);

    this.allObjs.forEach(function(obj){
      obj.draw(ctx);
    });
  };

  Asteroids.Game.prototype.moveObjects = function(){

    this.asteroids.forEach(function(obj){
      obj.move();
    });

  };

  Asteroids.Game.prototype.wrap = function(pos){
    var new_pos = pos;

    if (pos[0] > 1225) {
      new_pos[0] = -25;
    }
    else if (pos[0] < -25) {
      new_pos[0] = 1225;
    }

    if (pos[1] < -25) {
      new_pos[1] = 825;
    }
    else if (pos[1] > 825) {
      new_pos[1] = -25;
    }

    return new_pos;
  };

  Asteroids.Game.prototype.checkCollisions = function(){
    for(var i = 0; i < this.allObjs.length - 1; i++){
      for (var j = (i + 1); j < this.allObjs.length; j++){
        if (this.allObjs[i].isCollidedWith(this.allObjs[j])) {
          // alert("COLLISION");
          if (this.allObjs[i] instanceof Asteroids.Ship || this.allObjs[j] instanceof Asteroids.Ship) {
            this.ship.pos = this.randomPosition();
          } else {
          // this.remove(i);
          // this.remove(j-1);
          this.allObjs[i].vel = [-this.allObjs[i].vel[0], -this.allObjs[i].vel[1]];
          this.allObjs[j].vel = [-this.allObjs[j].vel[0], -this.allObjs[j].vel[1]];
        }
        }
      }
    }
  };

  Asteroids.Game.prototype.randomPosition = function(){
    var pos = [];
    pos[0] = DIM_X * Math.random();
    pos[1] = DIM_Y * Math.random();

    return pos;
  }

  Asteroids.Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
  };

  Asteroids.Game.prototype.remove = function(idx){
    this.allObjs.splice(idx, 1);
  };

  Asteroids.Game.prototype.allObjects = function(){
    var allObs = this.asteroids.slice();

    allObs.push(this.ship);

    return allObs;

  }
})();
