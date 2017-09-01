var assert = require("assert")
var Hero = require("../hero.js")

describe("Hero", function(){

var chase;

beforeEach( function(){
chase = new Hero("Chase", "Cheese");

})

it("Does hero have name", function(){
  assert.strictEqual(chase.name, "Chase")
})

it("Does hero have a favourite food", function(){
  assert.strictEqual(chase.food, "Cheese")
})

it("Does hero have full health on create", function(){
  assert.strictEqual(chase.health, 100)
})

it("Does hero have an emplty array of tasks on create", function(){
  assert.strictEqual(chase.tasks.length, 0)
})



})
















