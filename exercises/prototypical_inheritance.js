var Animal = function (color) {
  this.color = color;
  this.mood = "happy";
}

Animal.prototype.makesNoise = function (noise) {
    console.log(noise + "!");
}

var Cat = function (color, name) {
  Animal.call(this, color);

  this.name = name;
}

Function.prototype.inherits = function(obj) {
  var Placeholder = function() {};
  Placeholder.prototype = obj.prototype;
  this.prototype = new Placeholder();
}

Cat.inherits(Animal);

c = new Cat("Black", "Scott");

c.makesNoise("HELLO I AM INHERETING THINGS");
