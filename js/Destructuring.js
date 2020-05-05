// Problem 1
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [randomCar] = cars
// const [, otherRandomCar] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)
//1st console log = first index: [0] = Tesla, 
// 2nd console log = 2nd index: [1] = Mercedes

// Problem 2
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// // console.log(name);
// console.log(otherName);
// first console gets overwritten because name becomes otherName which is Elon

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);
// prints 12345, 2nd Console Log will be undefined because const password is outside the object and there is no 'person' in const password

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);

// first console log compares first, 2, to second, 5. which will be false.
// 2nd console log compares 2 with 2, which is same, prints true

// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output
// console.log(key);
// console.log(secondKey);
// console.log(secondKey[0]);
// console.log(willThisWork);

// prints 'value'
// prints [ 1, 5, 1, 8, 3, 3 ]
// prints 1
// prints 5