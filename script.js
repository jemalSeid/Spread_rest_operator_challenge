//Question #1

// Define an object with properties name, age, and email
const person = {
  name: "Jemal Seid",
  age: 39,
  email: "jemaseidadnew@example.com"
};

// Use destructuring to assign each property to a variable with a different name
const { name: personName, age: personAge, email: personEmail } = person;

// Output the variables to the console
console.log(personName); //Jemal Seid
console.log(personAge); //39
console.log(personEmail); //jemaseidadnew@example.com


//Question #2
function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
  }
  const student = { firstName: 'Jemal', lastName: 'Adnew' };
  const fullName = getFullName(student);
  console.log(fullName); 

  //Question #3

  const array1 = [7, 8, 9];
  const array2 = [10, 11, 12];

  const array3 = [...array1, ...array2];

  console.log(array3);
  //Question #4
 function getLargest(numbers) {
    return Math.max(...numbers);
  }
  const numbers = [8, 9, 2, 5, 0,33,100];
  const result = getLargest(numbers);
  console.log(result); //output: 100

  //Question #5

function sum(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}
const firstResult= sum(1, 2, 3,4,5);
console.log(firstResult); //output: 15

const resultTwo = sum(6, 7, 8,9,0);
console.log(resultTwo); //output: 30

const resultThree = sum(10, 20, 30, 40,50);
console.log(resultThree); //output: 150

//Question #6 

function calculateAverage(...numbers) {
    const sum = numbers.reduce((total, current) => total + current, 0);
    return sum / numbers.length;
  }
  const input = prompt("Enter an array of numbers:");
  const numbersArray = input.split(",").map(Number);
  const average = calculateAverage(...numbersArray);
  
  console.log("The average is " + average);

  