const patients = require("./patients");

// accesing elements in an array
const firstPatient = patients[0];
console.log(firstPatient);

// which element to access can also be dependent on a variable
const whichElementOfArray = 9;
const tenthPatient = patients[whichElementOfArray];
// const tenthPatient = patients[9];

// destructuring
// const { firstName, lastName, id } = firstPatient;
// console.log(firstName);

// 1. assign the weight, age and height of the firstPatient to variables weight, age and height
const { weight, age, height } = firstPatient;
console.log("first patient's weight, age, height:", weight, age, height);
// 2. declare a variable fullName and assign it to the firstName and lastName of the firstPatient
const { firstName, lastName } = firstPatient;
const fullName = firstName + " " + lastName;
console.log(fullName);
// 3. if the firstPatient does not exercise, console.log: "does not exercise"

function doesExercise() {
  if ((firstPatient.dailyExercise = "no")) {
    console.log("does not exercise");
  }
}
doesExercise();
