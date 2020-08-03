const patients = require("./patients");

// calculate BMIs according to patient data

console.log(patients);

function calculateBMI(height, weight) {
  return Math.round(weight / (height * height));
}

const bmis = patients.map(function (patient) {
  // console.log("Whats the data?", patient);
  const { firstName, lastName, height, weight } = patient;

  let BMI = Math.round(weight / (height * height));
  // console.log(BMI);
  let subject = firstName + "" + lastName;

  return { subject: subject, BMI: BMI };
});
console.log(bmis);

// // OR:

// const patients = require("./patients");

// // console.log(patients);

// function calculateBMI(height, weight) {
//   return Math.round(weight / (height * height));
// }

// const bmis = patients.map(function (patient) {
//   // console.log("WHAT IS PATIENT?", patient);

//   const BMI = calculateBMI(patient.height, patient.weight); // calculate BMI for a patient here

//   return BMI; // return BMI for a patient here
// });

// console.log(bmis);
