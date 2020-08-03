const patients = require("./patients");
const weight = parseInt(process.argv[2]);

const patientsWeighingLessThan = patients.filter(function (patient) {
  if (patient.weight < weight) {
    return true;
  }
});

//// or, refactored:
// const patientsWeighingLessThan = patients.filter(function (patient) {
//   return patient.weight < weight;
// });

console.log("OUTPUT:", patientsWeighingLessThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(
  `NUMBER OF PATIENTS WEIGHING LESS THAN ${weight}:`,
  patientsWeighingLessThan.length
);
