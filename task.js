Task = function(task, difficulty, urgency, reward, completed){
  this.task = task;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = false;
}

module.exports = Task;

