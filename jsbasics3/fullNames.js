const patients = require("./patients");
// Retrieve a list of patients from the patient file

// map executes the callback function for each element
const fullNames = patients.map(function (patient) {
  console.log("WHAT IS PATIENT", patient);

  // desctructure the firstName and the lastName from the patient object
  const { firstName, lastName } = patient;

  // return a string combining the firstName and the lastName
  return `${firstName} ${lastName}`;
});

console.log(fullNames);
