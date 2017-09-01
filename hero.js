Hero = function(name, food){
  this.name = name;
  this.health = 100;
  this.food = food;
  this.tasks = [];
  this.xp = 0;

}

Hero.prototype.sayOwnName = function(){
  var talk = "";
  talk += this.name + " is on the case!";
  return talk;
}


module.exports = Hero;
