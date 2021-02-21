/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

function checkArray () {
  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < group.length; j++){
      if (group[j] === students[i]) {
        return false;
      }
    }
  }
}
var groupIsOnlyStudents = group.every(checkArray); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
