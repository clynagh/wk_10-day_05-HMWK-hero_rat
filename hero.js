Hero = function(name, favouriteFood){
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
  this.xp = 0;

}

Hero.prototype.sayOwnName = function(){
  var talk = "";
  talk += this.name + " is on the case!";
  return talk;
}

Hero.prototype.addNewTask = function(task){
  this.tasks.push(task);
}

Hero.prototype.eatFood = function(food) {
  var health = 100;
  if ( food.name === this.favouriteFood ) {
    health = this.health + (food.replenishment * 1.5);
  } else {
    health += food.replenishment
  }
  this.health = health;
}


module.exports = Hero;



