function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(String = "*") {
  return function result(value = "special") {
    return `You are ${String}${value}${String}!`;
  }
}
