function calculateBMI(weight, height) {
  console.log("Calculate BMI called", weight, height);
}

function bmiCalculator() {
  const weightInKg = parseInt(process.argv[2]);
  const heightInM = parseFloat(process.argv[3]);
  const age = parseInt(process.argv[4]);
  const dailyExercise = process.argv[5];
  const gender = process.argv[6];

  console.log("WEIGHT: ", weightInKg);
  console.log("HEIGHT: ", heightInM);
  console.log("AGE: ", age);
  console.log("DAILY EXERCISE: ", dailyExercise);
  console.log("GENDER: ", gender);

  calculateBMI(weightInKg, heightInM);
  function calculateBMI() {
    let BMI = weightInKg / (heightInM * heightInM);
    console.log("BMI is", BMI);
  }
}

bmiCalculator();
