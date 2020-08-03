// index.js

// How to use this BMR calculator:
// node index.js 75 1.85 33 "yes"

// Validation for incorrect argument length
if (process.argv.length !== 7) {
  console.log(`
    You gave ${process.argv.length - 2} arguments(s) to the program

    Please provide 5 arguments for
    
    weight (kg), 
    height (m), 
    age, 
    wether you exercise daily (yes or no)
    and your gender (m or f)
    
    Example:

    $ node index.js 82 1.79 32 yes m
  `);

  process.exit();
}

console.log("What does process.argv contain?", process.argv);

var weightInKg = parseInt(process.argv[2]);
var heightInM = parseFloat(process.argv[3]);
var age = parseInt(process.argv[4]);
var dailyExercise = process.argv[5];
var gender = process.argv[6];

// Validation for incorrect input formatting
if (isNaN(weightInKg) || isNaN(heightInM) || isNaN(age)) {
  console.log(`
    Please make sure weight, height and age are numbers:

    weight (kg) example: 82 | your input: ${process.argv[2]}
    height (m) example 1.79 | your input: ${process.argv[3]}
    age (years) example 32  | your input: ${process.argv[4]} 

    $ node index.js 82 1.79 32 yes m
  `);

  process.exit();
}

// Validation for ages too low
if (age < 20) {
  console.log(`
    This BMI calculator is designed for people over 20 years old.  Your input: ${process.argv[4]}
    Please run the program again for a different age if you wish to proceed.

  `);

  process.exit();
}

// Validation for weights too low or high
if (weightInKg < 30 || weightInKg > 300) {
  console.log(`
    Please enter a weight in kgs
    
    Your weight of ${weightInKg} kgs does not fall in the range between 30 kg and 300 kg

    If you weight is below 30 kg or over 300 kg seek professional medical help
  `);

  process.exit();
}

// validation for incorrect exercise input
if (dailyExercise !== "yes" && dailyExercise !== "no") {
  console.log(`
    Please specify wether you exercise daily with yes or no

    You entered: ${dailyExercise}

    (Don't worry, we won't judge you if you enter no)
  `);

  process.exit();
}

// The formula for BMI is: weight (kg) / (height (m) x height (m))
var BMI = weightInKg / (heightInM * heightInM);

// Assumption: ideal BMI is 22.5
// The formula for idealWeight is 22.5 x height (m) x height (m)
var idealWeightKg = 22.5 * heightInM * heightInM;

// The formula for Basal Metabolic Rate (BMR) is: 10 x weight (kg) + 6.25 x height (cm) - 5 x age
var heightInCm = heightInM * 100;
// var BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * age;

// Assumption: when the gender is 'm', add 50 calories to the BMR. When the gender is 'f', subtract 150

if (gender === "m") {
  BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 50;
} else if (gender === "f") {
  BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * age - 150;
} else {
  BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * age;
}

// Assumption: calories for a normal lifestyle is BMR * 1.4
let dailyCalories;

// if (dailyExercise === "yes") {
//   dailyCalories = BMR * 1.6;
// } else {
//   dailyCalories = BMR * 1.4;
// }

dailyCalories = dailyExercise === "yes" ? BMR * 1.6 : BMR * 1.4;

console.log(dailyCalories);

// Assumption: This app is built for people who weigh too much, or wish to increase weigth
var weightDifference = weightInKg - idealWeightKg;

// Assumption: we can lose 0.5 kg a week
// Assumption: we can gain 0.5 kg a week

dietWeeks = Math.abs(weightDifference / 0.5);

// Assumption: to lose 0.5 kg a week we need to cut calorie intake by 500 calories
// Assumption: to gain 0.5kg a week we need to increase calorie intake by 500 calories

var dietCalories;
if (weightDifference > 0) {
  var dietCalories = dailyCalories - 500;
} else {
  var dietCalories = dailyCalories + 500;
}

console.log(`
**************
BMI CALCULATOR
**************

age: ${age} years
height: ${heightInM} m
weight: ${weightInKg} kg
exercise: ${dailyExercise} 
gender: ${gender}

****************
FACING THE FACTS
****************

Your BMI is ${Math.round(BMI)}

A BMI under 18.5 is considered underweight
A BMI above 25 is considered overweight

Your ideal weight is ${Math.round(idealWeightKg)} kg
Your weigth difference is ${weightDifference} kg
With a normal lifestyle you burn ${Math.round(dailyCalories)} calories a day

**********
DIET PLAN
**********

If you want to reach your ideal weight of ${Math.round(idealWeightKg)} kg:

Eat ${Math.round(dietCalories)} calories a day
For ${Math.round(dietWeeks)} weeks
`);
