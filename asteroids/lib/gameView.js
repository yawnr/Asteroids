var GameView = function(canvasEl, game){
  this.game = game;
  this.ctx = canvasEl.getContext("2d");
}

GameView.prototype.start = function(){
  window.setInterval((function (){
    Game.moveObjects();
    Game.draw();
  }),  20)

}
