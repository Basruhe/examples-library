const patients = require("./patients");
//Retrieve a list of phone numbers from a patient file.

const phoneNumbers = patients.map(function (patient) {
  // console.log("whats the data?", patient);
  const { phoneNumber, firstName } = patient;
  const member = { firstname: firstName, phonenumber: phoneNumber };
  return member;
  // console.log(phoneNumber);
});

console.log(phoneNumbers);
// phoneNumbers();
