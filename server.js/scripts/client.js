const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
let newArray = [];

function employeeDefine(nameIn, percent, comp, bonus) {
  let employeeObj = {
    name: nameIn,
    bonusPercentage: percent,
    totalCompensation: comp,
    totalBonus: bonus
  }
}

// function bonusCalculator(oldArray) {
//   for (employee of oldArray) {
//     newArray.push({name: employee.name,})
//       // bonusPercentage: employee.bonus,
//       // totalCompensation: employee.comp,
//       // totalBonus: employee.bonus

//       if (employee.reviewRating <= 2){
//         bonusPercentage = 0;
//       }
//       else if (employee.reviewRating === 3){
//         bonusPercentage = 0.04;
//       }
//       else if (employee.reviewRating === 4){
//         bonusPercentage = 0.06;
//       }
//       else if (employee.reviewRating === 5){
//         bonusPercentage = .1;
//       }
//     }
//   }




function bonusCalculator(oldArray) {
  for (let i=0; i<oldArray.length; i++) {

      // totalCompensation: employee.comp,
      // totalBonus: employee.bonus

      if (oldArray[i].reviewRating <= 2){
        newArray.push({
          name: oldArray[i].name,
          bonusPercentage: 0});
      }
      else if (oldArray[i].reviewRating === 3){
        newArray.push({
          name: oldArray[i].name,
          bonusPercentage: 0.04});
      }
      else if (oldArray[i].reviewRating === 4){
        newArray.push({
          name: oldArray[i].name,
          bonusPercentage: 0.06});
      }    
      else if (oldArray[i].reviewRating === 5){
        newArray.push({
          name: oldArray[i].name,
          bonusPercentage: 0.1});
    }
    if (oldArray[i].employeeNumber.length === 4){
      newArray[i].bonusPercentage += 0.05;
    }
    if (oldArray[i].annualSalary >= 65000) {
      newArray[i].bonusPercentage -= 0.01;
    }
    if (newArray[i].bonusPercentage >= 0.13){
      newArray[i].bonusPercentage = 0.13;
    }
    if (newArray[i].bonusPercentage < 0){
      newArray[i].bonusPercentage = 0;
    }
    newArray[i].totalBonus = parseInt(oldArray[i].annualSalary * newArray[i].bonusPercentage);
  }
}


bonusCalculator(employees)


// console.log( employees );
console.log( newArray );
