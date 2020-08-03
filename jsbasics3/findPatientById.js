const patients = require("./patients");
// hardcoding id 4212 for now, we can make this dynamic later

const id = parseInt(process.argv[2]);

const specificPatient = patients.find(function (patient) {
  console.log("WHAT IS PATIENT?", patient);
  if (id === patient.id) {
    return true;
  } else {
    return false;
  }
});

console.log("OUTPUT:", specificPatient);

// // alternative way of writing this

// const patients = require("./patients");
// const id = parseInt(process.argv[2]);

// // id === patient.id will already resolve to true or false
// // so we don't need to use an if statement

// const specificPatient = patients.find(function(patient) {
//   return id === patient.id;
// });

// console.log("OUTPUT:", specificPatient);

if (specificPatient !== undefined) {
  console.log("OUTPUT:", specificPatient);
} else {
  console.log(`Patient with id: ${id}, not found`);
}
