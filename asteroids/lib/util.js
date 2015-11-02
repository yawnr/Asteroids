(function (root) {

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    var Surrogate = function() {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Asteroids.util.randomVec = function (length) {
    var vec = [];
    vec.push(Math.random() * length);
    vec.push(Math.sqrt((length * length) - (vec[0] * vec[0])));
    return vec;
  };


})(this);
