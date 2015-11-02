(function (root) {

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    var Placeholder = function() {};
    Placeholder.prototype = ParentClass.prototype;
    ChildClass.prototype = new Placeholder();
  };

})(this);
