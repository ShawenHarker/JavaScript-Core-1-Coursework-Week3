/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

function checkArray () {
  for (let j = 0; j < students.length; j++) {
    for (let i = 0; i < group.length; i++){
      if (group[i] === students[j]) {
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
