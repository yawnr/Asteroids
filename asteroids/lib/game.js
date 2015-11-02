DIM_X = 400;
DIM_Y = 300;
NUM_ASTEROIDS = 10;
var Game = function(){
  this.DIM_X = DIM_X;
  this.DIM_Y = DIM_Y;
  this.asteroids = [];
  addAsteroids();
};

Game.prototype.addAsteroids = function(){
  for (i = 0; i < NUM_ASTEROIDS; i++){
    this.asteroids.push(new Asteroid({ pos: [(DIM_X * Math.random()),
                                        (DIM_Y * Math.random())]
                                        }))
};

Game.prototype.draw = function (ctx) {
  clearRect();

  this.asteroids.forEach(function(asteroid){
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function(){

  this.asteroids.forEach(function(asteroid){
    asteroid.move();
  });

}


game
