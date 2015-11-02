(function () {

  var Asteroids = window.Asteroids = window.Asteroids || {};

  var DIM_X = 1200;
  var DIM_Y = 800;
  var NUM_ASTEROIDS = 10;

  Asteroids.Game = function(){
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.asteroids = [];
    this.addAsteroids();
  };

  Asteroids.Game.prototype.addAsteroids = function(){
    for (var i = 0; i < NUM_ASTEROIDS; i++){
      // var asteroid = Asteroids.Asteroid()
      this.asteroids.push(
        new Asteroids.Asteroid({ pos: [(DIM_X * Math.random()),
                                      (DIM_Y * Math.random())]
                                      }));
                                    };
  };

  Asteroids.Game.prototype.draw = function (ctx) {
    ctx.clearRect(0,0,DIM_X, DIM_Y);

    this.asteroids.forEach(function(asteroid){
      asteroid.draw(ctx);
    });
  };

  Asteroids.Game.prototype.moveObjects = function(){

    this.asteroids.forEach(function(asteroid){
      asteroid.move();
    });

  };

  Asteroids.Game.prototype.wrap = function(pos){
    // if (pos[0] > 1200){
    //   pos[0] = 0;
    // }
    // else if (pos[0] < 0){
    //   pos[0] = 1200;
    // }
    // else if (pos[1])


  }

})();
