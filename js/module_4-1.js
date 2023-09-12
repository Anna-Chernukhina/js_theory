//! Заняття 4-1. 11.09.2023 ---------Колбек-функції, стрілочні функції, метод forEach

//* Функція зворотного виклику (callback, колбек) - це функція, яка передається іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.

//* Функція вищого порядку (higher order function) - функція, яка приймає у якості параметрів інші функції або повертає функцію у якості результату.

//* -------------------#1-------------------
// function a(onSuccess, onUnsuccess) { //onSuccess і onUnsuccess  це колбеки
//   console.log(onSuccess)
//   console.log(onUnsuccess)
//   const mark = Number(prompt('What is your mark?'))
//   if (mark >= 10) {
//    onSuccess()
//   } else {
//    onUnsuccess()
//   }
// }

// function b() {
//   alert('It is great!')
// }

// function c() {
//   alert('It is excellent mark!')
// }

// function d() {
//   alert('It is bad mark!')
// }

// a(b, d)

// a(c, d)

//* forEach базовий функціональний метод масиву для перебирання, в якості
//*параметру приймає колбек-функцію. Нічого не повертає

//! массив.forEach(function callback(element, index, array) {
//!   // Тіло колбек-функції
//! });

//* Аргументи колбек-функції - це значення поточного елемента element, його індекс index
//* і власне вихідний масив array (это ссылка на входной массив, не копия!). Порядок строго важливий!
//! Можна оголошувати тільки необхідні параметри, найчастіше - це елемент, головне не забувати про їх порядок.
//* Поелементо перебирає масив.
//* Викликає колбек-функцію для кожного елемента масиву.
//* Нічого не повертає.


//* Єдиним випадком, коли варто використовувати цикли for або for...of для перебирання масиву, -
//* це задачі з перериванням виконання циклу.Перервати виконання методу forEach не можна,
//! він завжди перебирає масив до кінця.

//* -------------------#2-------------------
// const users = [
//     {
//       id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       id: "249b6175-5c30-44c6-b154-f120923736f5",
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       id: "e1bf46ab-7168-491e-925e-f01e21394812",
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ];

//*   задача создать новый массив объектов, где для каждого объекта убираются свойства name и age
//   const newUsers = []
  
//   users.forEach(function(user, index) {
//   console.log('N:', index + 1); //выводим номер итерации
//   console.log(user);
      
//     //! делаем деструктуризацию объекта
//     const {name, age, ...restProps} = user;
//     console.log(`${index + 1} - ${name} - ${age}`)
//     console.log(restProps)
//     newUsers.push(restProps)
//   })
  
//   console.log(newUsers)
  
//* -------------------#3-------------------
//   const classicAdd = function (a, b, c) {
//     console.log(arguments)
//     return a + b + c;
//   };

// classicAdd(1, 2, 3)
// console.log(classicAdd(1, 2, 3))
  
// //! у стрелочных функций нет доступа к псевдомассиву arguments
//   const arrowAdd1 = (a, b, c) => {
//     // console.log(args)
//     return a + b + c;
//   };

//   arrowAdd1(1, 2, 3)
  
//* та же функция, но без тела и с неявным возвратом
//  const arrowAdd2 = (a, b, c) => a + b + c;
//  console.log(arrowAdd2(1, 2, 3))

//* -------------------#4-------------------
const mathOperations = (num1, num2, callback1, callback2) => {
    if (num1 > num2) {
      const result = callback1(num1, num2);
      return result;
    } else if (num2 > num1) {
      return callback2(num1, num2);
    } else {
      return "Enter another numbers";
    }
  };
  
  const add = (num1, num2) => num1 + num2;
  const substract = (num1, num2) => num2 - num1;
  
  const multiply = (num1, num2) => num1 * num2;
  const divide = (num1, num2) => num2 / num1;
  
//   console.log(mathOperations(10, 20, add, substract)); // 10
//   console.log(mathOperations(100, 20, add, substract)); // 120
//   console.log(mathOperations(200, 200, add, substract)); // 'Enter another numbers'

//   console.log(mathOperations(10, 20, multiply, divide)); //2
//   console.log(mathOperations(100, 20, multiply, divide)); //2000
  
//   console.log(mathOperations(10, 20, (num1, num2) => num1 + num2, (num1, num2) => num2 - num1)); // 10
  
//* -------------------#5-------------------
//   const newUsers = []
  
//   users.forEach((user, index) => {
//     const {name, age, ...restProps} = user
//     console.log(`${index + 1} - ${name} - ${age}`)
//     newUsers.push(restProps)
//   })

  
//   users.forEach(({name, age, ...restProps}, index) => {
//     console.log(`${index + 1} - ${name} - ${age}`)
//     newUsers.push(restProps)
//   })
  
  // console.log(newUsers)



//   users.forEach( ({name, age}) => {
//     console.log(`${name} - ${age}`)
//   })