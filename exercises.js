var sum = function () {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
};

Function.prototype.myBind = function (context) {
  var fn = this;
  args = Array.prototype.slice.call(arguments, 1);
  return function () {
    fn.apply(context, args);
  };
};

// function Cat(name) {
//   this.name = name;
// };
//
// Cat.prototype.says = function (sound) {
//   console.log(this.name + " says " + sound + "!");
// }
//
// markov = new Cat("Markov");
// breakfast = new Cat("Breakfast");
//
// markov.says("meow");
// // Markov says meow!
//
// markov.says.myBind(breakfast, "WOOF")();
// // Breakfast says meow!
