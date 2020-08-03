const patients = require("./patients.js");

// calculate BMRs according to patient data

function calculateBMR(weight, height, ageOfUser, genderOfUser) {
  const heightInCm = height * 100;

  let BMR;

  if (genderOfUser === "m") {
    BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser + 50;
  } else {
    BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser - 150;
  }

  return BMR;
}

const BMRs = patients.map(function (patient) {
  // // Note: no destructuring needed!
  // const { weight, height, ageOfUser, genderOfUser } = patient;
  const BMR = calculateBMR(
    patient.weight,
    patient.height,
    patient.age,
    patient.gender
  );
  return BMR;
});
console.log(BMRs);
