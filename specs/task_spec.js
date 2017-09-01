var assert = require("assert")
var Task = require("../task.js")

describe("Task", function(){

  var rescue;

  beforeEach( function(){
    rescue = new Task("Rescue", "High", "Urgent", 15);
  })

  it("does task have a name", function(){
    assert.strictEqual(rescue.name, "Rescue")
  })

  it("does task have a difficulty level", function(){
    assert.strictEqual(rescue.difficulty, "High")
  })

  it("does task have an urgency level", function(){
    assert.strictEqual(rescue.urgency, "Urgent")
  })

  it("does task have a reward level", function(){
    assert.strictEqual(rescue.reward, 15)
  })

  it("the task has not been completed", function(){
    assert.strictEqual(rescue.completed, false)
  })
})