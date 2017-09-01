var assert = require("assert")
var Hero = require("../hero.js")
var Task = require("../task.js")
var Food = require("../food.js")

describe("Hero", function(){

var chase;
var rescue;
var cheese;

beforeEach( function(){
chase = new Hero("Chase", "Cheese");
rescue = new Task("Rescue", "High", "Urgent", 15);
cheese = new Food("Cheese", 20);
chocolate = new Food("Chocolate", 15)

})

it("Does hero have name", function(){
  assert.strictEqual(chase.name, "Chase")
})

it("Does hero have a favourite food", function(){
  assert.strictEqual(chase.favouriteFood, "Cheese")
})

it("Does hero have full health on create", function(){
  assert.strictEqual(chase.health, 100)
})

it("Does hero have an emplty array of tasks on create", function(){
  assert.strictEqual(chase.tasks.length, 0)
})

it("hero can say own name", function(){
  assert.strictEqual(chase.sayOwnName(), "Chase is on the case!")
})

it("hero can add a task to his tasks array", function(){
  chase.addNewTask(rescue);
  assert.strictEqual(chase.tasks.length, 1);
})

it("hero can eat food and increase health levels by replenishment levels", function(){
  chase.eatFood(cheese);
  assert.strictEqual(chase.health, 130)
  chase.eatFood(chocolate);
  assert.strictEqual(chase.health, 115)


})



})

















