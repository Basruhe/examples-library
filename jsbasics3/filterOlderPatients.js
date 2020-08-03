const patients = require("./patients");
// dynamic inputwith process.argv
const age = parseInt(process.argv[2]);

// const patientsOlderThan = patients.filter(function (patient) {
//   console.log("WHAT IS PATIENT?", patient);
//   if (patient.age > age) {
//     return true;
//   } else {
//     return false;
//   }
// });

// Refactor. The return already yields a yes or no
const patientsOlderThan = patients.filter(function (patient) {
  console.log("WHAT IS PATIENT?", patient);
  return patient.age > age;
});

console.log("OUTPUT:", patientsOlderThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS OLDER THAN ${age}:`, patientsOlderThan.length);
