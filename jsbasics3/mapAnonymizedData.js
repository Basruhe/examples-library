const patients = require("./patients.js");

// retrieve a list of anonymyzed data data from the patient file.

const anonymizedData = patients.map(function (patient) {
  // console.log("whats the data?", patient);
  const { id, age } = patients;
  return {
    id: patient.id,
    age: patient.age,
  };
});
console.log(anonymizedData);
