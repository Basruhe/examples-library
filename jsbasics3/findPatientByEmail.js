const patients = require("./patients");
const email = process.argv[2];

console.log(patients);
console.log("break");
let specificPatient = patients.find(function (patient) {
  return patient.email === email;
});

if (specificPatient !== undefined) {
  console.log("OUTPUT:", specificPatient);
} else {
  console.log(`Patient with email: ${email}, not found`);
}
