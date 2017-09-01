var assert = require("assert")
var Food = require("../food.js")

describe("Task", function(){

  var cheese;

  beforeEach( function(){
    cheese = new Food("Cheese", 20);
  })

  it("does food have a name", function(){
    assert.strictEqual(cheese.name, "Cheese")
  })

  it("does food have a replenishment value", function(){
    assert.strictEqual(cheese.replenishment, 20)
  })

})