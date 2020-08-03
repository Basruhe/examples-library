const patients = require("./patients");

// Note: these are two different approaches. In the first approach, you write a function which you then pass as a callback. In the second example you pass an anonymous function.Which approach is best? guess this depends on the purpose?
//
// declare function
function displayFullName(patient) {
  // HERE IS HOW TO CHECK YOURSELF
  // console.log('CHECK TO SEE WHAT IS PATIENT:', patient)
  const { firstName, lastName } = patient;

  const fullName = `${firstName} ${lastName}`;

  console.log(fullName);
}

// pass as callback
patients.forEach(displayFullName);

// Different approach
// pass anonymous function directly
patients.forEach(function (patient) {
  // HERE IS HOW TO CHECK YOURSELF
  // console.log("CHECK TO SEE WHAT IS PATIENT:", patient);
  const { firstName, age } = patient;

  console.log(`${firstName} - age: ${age}`);
});

// DIY's

//// - for each patient log their weight

// // Note: first I made a separate function + callback, then I combined them.
// function printWeights(patient) {
//   const { weight } = patient;
//   console.log(weight);
// }
// patients.forEach(printWeights);
// // combined version:
// patients.forEach(function (patient) {
//   const { weight } = patient;
//   console.log(weight);
// });

// // - for each patient, log their last name and gender
// patients.forEach(function (patient) {
//   const { lastName, gender } = patient;

//   console.log(`Last Name: ${lastName}, Gender: ${gender}`);
// });

//// - for each patient, formal greeting:
////      - if they are of gender 'm' console.log Mr. and their lastName
////      - if they are of gender 'f' console.log Mrs. and their lastName

// function conditionalPrint(patients) {
//   const { lastName, firstName, gender } = patients;
//   if (gender === "f") {
//     console.log("Mrs.", lastName);
//   } else if (gender === "m") {
//     console.log("Mr", lastName);
//   } else {
//     console.log("error");
//   }
// }
// patients.forEach(conditionalPrint);

patients.forEach(function (patient) {
  const { lastName, gender } = patient;
  const prefix = gender === "m" ? "Mr" : "Mrs";
  console.log(`${prefix} ${lastName}`);
});
