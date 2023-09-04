// ❗️❗️❗️ Оголошення змінних

// const a = "variable"; // ініціалізуємо завжди зі значенням
// a = "new variable"; // отримаємо в консолі TypeError, адже переприсвоювати значення змінним, оголошеним через const, не можна. Важливо: якщо цей рядок не закоментувати, скрипт запнеться на помилці і далі не виконуватиметься.
// let b; // можемо ініціалізувати без присвоєння значення;
// console.log(b)
// b = "one more variable"; // значення може бути присвоєно пізніше, після ініціалізації;
// console.log(b)

// ❗️❗️❗️ Примітивний типи

// number
// string
// boolean
// null
// undefined
// bigint
// symbol

// ❗️❗️❗️ Взаємодія з користувачем

// // - виведення даних:

// console.log("Hello!");
// alert("Hello!");

// // - отримання даних:

// const answer = confirm("Is your name Ivan?"); // користувач може відповісти так або відхилити питання
// console.log(answer)
// prompt("What is your name?"); // користувач  може ввести якісь дані або відхилити питання
// const age = prompt("How old are you?");
// console.log(age)
// console.log(typeof age)


// ❗️❗️❗️ Додавання із заміною (також є для всіх інших операторів)

// let value = 5;
// value = value + 10;
// console.log(value) // 15
// value = value + 10;
// console.log(value) // 25

// value += 10;
// console.log(value); // 15
// value += 10;
// console.log(value); // 25

// let value1 = 10;
// value1 = value1 - 2;
// // console.log(value1) // 8
// // value1 = value1 -2 ;
// // console.log(value1) // 6

// value1 -= 2;
// console.log(value1); // 8
// value1 -= 2;
// console.log(value1); // 6

// // Оператори порівняння (<, >, <=, >=, ==, ===, !=, !==)

// ❗️❗️❗️ Загальні правила порівняння

// Результатом порівняння буде бульове значення.

// При порівнянні різних типів операнди приводяться до числа (крім операторів === та !==)
// null не дорівнює нічому крім себе та undefined.
// undefined не дорівнює нічому крім себе та null.
// NaN не дорівнює нічому, навіть самому собі
// Рядки між собою порівнюються за unicode (посимвольно).

// ❗️❗️❗️ Правила приведення різних типів до числа:

// // true --> 1
// // false --> 0
// // '', а також рядок з пробілами --> 0
// // null --> 0
// // undefined --> NaN
// // не порожній рядок --> якщо рядок складається лише з цифр, відбувається приведення до числа. В іншому випадку - NaN.

// console.log(null == 0); // false
// console.log(undefined == 0); // false
// console.log(undefined == null); // true
// console.log("123" == 123); // true
// console.log(true == "1"); // true
// console.log(4 == 5); // false
// console.log("123" === 123); // false
// console.log(null === null); // true
// console.log(2 + 2 === 4); // true
// console.log(NaN === NaN); // false
// console.log(undefined === null); // false
// console.log("4" != 4); // false
// console.log("4" !== 4); // true
// console.log(null > 0) // false
// console.log(null >= 0) // true

// ❗️❗️❗️ Number.isNaN

// const a = 123;
// const b = "qwerty";

// console.log(Number.isNaN(a)); // false
// console.log(Number.isNaN(b)); // false

// const toNumber = Number(b);
// console.log(toNumber); // NaN
// console.log(Number.isNaN(toNumber)); // true
// console.log(toNumber == NaN) //

// const data = prompt("Enter a number, please");
// // console.log(data);

// const dataToNumber = Number.parseInt(data);
// console.log(dataToNumber);

// const isNaN = Number.isNaN(dataToNumber);
// console.log(isNaN);


// const num1 = 0.3;
// const num2 = 0.6;
// const sum1 = num1 + num2;
// console.log(sum1)
// // console.log((num1*100 + num2*100) / 100 )
// // console.log(sum1.toFixed(1));
// const fixedSum1 = Number(sum1.toFixed(3));
// console.log(fixedSum1);

// ❗️❗️❗️ Приведення до рядка
// const num = 123;
// console.log(num)
// const str1 = String(num)
// console.log(str1)
// const str2 = num + ''
// console.log(str2)
// const str3 = num.toString()
// console.log(str3)

// ❗️❗️❗️ Шаблонні рядки
// const userName = prompt('What is your name');
// const age = prompt('How old are your');

// const message = `My name is ${userName}. I am ${age} years old.`
// alert(message)

// const word1 = "     ";
// console.log(word1.length);

// ❗️❗️❗️ Операції з приведенням типів

// console.log(2 + 5 + "" + 1 + 0 - 10); // 700
// console.log('710bjk' - 10); // NaN
// console.log("" + 1 - 0); // 1
// console.log(true + false); // 1
// console.log(true + ""); // 'true'
// console.log(true + "false"); // 'truefalse'
// console.log(true - "false"); // NaN
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // '9px'
// console.log("$" + 4 + 5); // '$45'
// console.log("4" - 2); // 2
// console.log("4" + 2); // '42'
// console.log("4" / 2); // 2
// console.log("4px" - 2); // NaN
// console.log(7 / 0); // Infinity
// console.log("  -9  " + 5); // ' -9 5'

// ❗️❗️❗️ Методи рядків

// const word2 = "hTMl";
// console.log(word2.toLowerCase()) // html
// console.log(word2.toUpperCase()) // HTML

// const word3 = "superjavascript";
// const substring1 = "java";
// const substring2 = "css";

// console.log(word3.indexOf(substring1)); // 5
// console.log(word3.indexOf(substring2)); // -1

// const word4 = "banana";
// console.log(word4.indexOf("a")); // 1
// console.log(word4.lastIndexOf("a")); // 5
// console.log(word4.indexOf("n")); // 2
// console.log(word4.lastIndexOf("n")); // 4

// const sentense = "two tasty bananas";
// console.log(sentense.indexOf(" ")); // 3
// console.log(sentense.indexOf("tasty bananas")); // 4

// console.log(word3.includes(substring1)); // true
// console.log(word3.includes("Java")); // false
// console.log(word3.includes(substring2)); // false

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(jsFileName) // "script.js"
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// // const minifiedCssFileNames1 = cssFileNames.replace(".css", ".min.css");
// // console.log(minifiedCssFileNames1); // "styles.min.css, about.css, portfolio.css"
// const minifiedCssFileNames2 = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames2); // "styles.min.css, about.min.css, portfolio.min.css"

// const word5 = "javascript";

// const word6 = word5.slice();
// console.log(word6); // 'javascript'
// console.log(word5.slice(0, word5.length)); // 'javascript'
// console.log(word5.slice(0)); // 'javascript'
// console.log(word5.slice(0, 10)); // 'javascript'

// console.log(word5.slice(3)); // 'ascript'

// const word7 = word5.slice(0, 4);
// console.log(word7); // 'java'
// console.log(word5.slice(4)); // 'script'
// console.log(word5.slice(-6, -3)); // 'scr'
// console.log(word5.slice(-1)); // 't'
// console.log(word5.slice(-6)); // 'script'

// console.log('    a    '.trim().length) // 1


// ❗️❗️❗️  Логічні операторы (&&,  ||,  !)

// // У логічних операціях  відбуваєтьмя приведення типів операндів до true або false.

// (falsy) значення, що приводяться до false у логічному перетворенні:
// 0
// NaN
// null
// undefined
// порожній рядок
// false.

// Абсолютно все інше приводиться до true.

// && - запинається на false
// // Якщо всі операнди були приведені до true, повертається остання.
// // Якщо результат приведення операнди до буля false, перевірка зупиняється та повертається вихідне значення цього операнда.

// || - запинається на true
// Повертає перше правдиве (приведене до true) значення або останнє, якщо таке truthy значення не знайдено.

// ! - інвертує true в false, або false в true

// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(false && false); // false
// console.log(true && 4 && "kiwi"); // 'kiwi'
// console.log(true && "" && "kiwi"); // ''
// console.log(true && " " && "kiwi"); // 'kiwi'
// console.log(true && 0 && "kiwi"); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); // true
// console.log(true || false || 7); // true
// console.log(false || true || 7); // true
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); // 3
// console.log(null || (null && 3) || 4); // 4

// ?? - оператор нульового злиття

// console.log(null ?? 1)
// console.log(undefined ?? 1)
// console.log(false ?? 1)

// ----------------------------------------------------------

// ❗️❗️❗️ Оператори розгалудження

// const number1 = Number(prompt("Enter a number 1, please"));
// console.log(number1);
// const number2 = Number(prompt("Enter a number 2, please"));
// console.log(number2);

// if(number1 > number2) {
//     console.log('I am here')
// }

// if (number1 > number2) {
//     console.log('+')
// } else {
//     console.log('-')
// }

// if (number1 > number2) {
//     console.log(">");
//   } else if (number1 === number2) {
//     console.log("=");
//   } else if (number1 < number2) {
//     console.log("<");
//   }

// if (number1 > number2) {
//   console.log(">");
// } else if (number1 === number2) {
//   console.log("=");
// } else {
//   console.log("<");
// }

// if (number1 > number2) {
//   console.log(">");
// } else {

//   if (number1 === number2) {
//     console.log("=");
//   } else {
//     console.log("<");
//   }

// }

// if(number1 > 50 && number2 > 50) {
//     console.log('super')
// }

// ❗️❗️❗️ Тернарний оператор

// const number1 = 100

// if (number1 > 20) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// number1 > 20 ? console.log('true') : console.log('false')

// const number2 = 20;
// number2 > 20
//   ? console.log(">")
//   : number2 === 20
//   ? console.log("=")
//   : console.log("<");

// ❗️❗️❗️ Switch

// const number = Number(prompt("Enter a number berween 0 and 3"));

// switch (number) {
//   case 0:
//     console.log("Your entered 0");
//     break;
//   case 1:
//     console.log("Your entered 1");
//     break;
//   case 2:
//     console.log("Your entered 2");
//     break;
//   case 3:
//     console.log("Your entered 3");
//     break;
//   default:
//     console.log("Your entered another number");
// }

// if (number === 0) {
//   console.log("Your entered 0");
// } else if (number === 1) {
//   console.log("Your entered 1");
// } else if (number === 2) {
//   console.log("Your entered 2");
// } else if (number === 3) {
//   console.log("Your entered 3");
// } else {
//   console.log("Your entered another number");
// }


// ❗️❗️❗️ Області видимості

// const a = 1;
// console.log(b)

// if (true) {
//     // const a = 2;
//     const b = 3;
//     // console.log(a)
//     if (true) {
//         const a = 4;
//         // console.log(a)
//     }
//     if (true) {
//         // const a = 4;
//         console.log(a)
//     }
// }
// console.log(b)

// let a = 1;

// if (true) {
//   a = 2;
// //   console.log(a)
// }

// console.log(a);

// ❗️❗️❗️ Цикли

// let counter = 1;

// while (counter <= 5) {
//   console.log("counter: ", counter);
// //   counter = counter + 1
//   counter += 1;
// }

// console.log('next')

// let number

// do{
//     console.log('here')
//     number = prompt('Input number, that bigger then 100')
// } while (number <=100)

// console.log(number)

// for (let i = 0; i <= 3; i += 1) {
//     console.log(i);
// }

// let word = "";

// for (let i = 0; i < 3; i += 1) {
//   console.log("Iteration:", i + 1);
//   console.log("previous string:", word);
//   console.log(i);
//   word += i;
//   console.log("next string:", word);
// }
// // https://monosnap.com/file/agY6GyBSoMjnf2o9L6IdU4vRnGdZPm
// console.log('final:', word)

// const word = "css";
// let word2 = "";

// for (let i = 0; i < word.length; i += 1) {
//   console.log("Iteration:", i + 1);
//   console.log('i', i)
//   console.log("previous string", word2);
//   console.log(word[i]);

//   word2 += word[i];
//   console.log("next string", word2);
// }

// // https://monosnap.com/file/R8e4VDAfvT1CzBHBp9pY0uyEdvsIe6
// console.log(word2);

// const num1 = 5
// const num2 = 10

// for(let i = num2; i >= num1; i-=1) {
//     console.log(i)
// }

// for(let a = 100; a > 50; a -= 10) {
//     console.log(a)
// }

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 2) {
//       console.log("Знайшли число 2, перериваємо виконання циклу");
//       break;
//     }
//   }

//   console.log("Лог після циклу");

//   for (let i = 0; i < 15; i += 1) {
//     console.log( 'before', i);
//     if (i / 3 === 4 || i / 2 === 5) {
//       continue;
//     }
//     console.log('after', i);
//   }



// a:
// for (let i = 0; i < 3; i+=1) {
// console.log('i', i)
//    b:
//    for (let j = 0; j < 3; j+=1) {
//     console.log('  j', j)
//       if (i === 1 && j === 1) {
//          break a;
//       }
//    }
// }

//! -----------------------Практика суббота 02.09.23 -----------------------------------
//? Task #1
//* Проверить есть ли скидка. Скидка доступна студентам или пенсионерам
//* или в возрасте от 12 до 18 включительно

// const age = 65;
// const isStudent = false;
// const isPensioner = true;

// let hasDiscount = false;

// if (isStudent || isPensioner || ((age >= 12) && (age <= 18))) {
//     hasDiscount = true;
// }

// console.log(hasDiscount);

//-------------------
//? Task #2
//* Проверить возможно ли получение прав. Можно получить если исполнилось 18 лет
//* и есть право на работу

// const age = 20;
// const hasWorkPermit = false;

// let canGetDriverLicense = false;

// if (hasWorkPermit && age >= 18) {
//     canGetDriverLicense = true;
// }

// console.log(canGetDriverLicense);

//-------------------
//? Task #3
//* Проверить является ли введенное пользователем значение числом, если да, вывести его квадрат.
//* Если нет, сообщить о неправильном вводе. Ввод с помощью prompt()

//* --------мой вариант
// const a = prompt("Введіть будь ласка число: ");
// console.log(a);

// if (Number(a)) {
//     const square = a*a;
//     console.log(square);
// }
// else {
//     console.log("Error");
// }

//* -------- вариант урока
// let userValue = Number(prompt("Введіть будь ласка число: "));

// if (isNaN(userValue)) {
//     console.log("Error");
// }
// else {
//     let squareNumber = Math.pow(userValue, 2);
//     console.log(`Ваше число ${userValue} в квадраті дорівнює ${squareNumber}`);
// }

//-------------------
//? Task #4
//* Проверить является ли введенное значение строкой и не содержит символ $.
//* Если это так, вывести количество символов в строке.
//* Если нет, сообщить о неправильном вводе. Ввод с помощью prompt()

// let userString = prompt("Введіть будь ласка строку без символа $: ");

// if ((typeof userString === "string") && !userString.includes("$")) {
//     console.log(userString.length);
// }
// else {
//     console.log("Error");
// }

//-------------------
//? Task #5
//* Проверить с помощью тернарного оператора является ли введенное число четным.
//* Вывести сообщение с помощью alert(). Ввод с помощью prompt()

// let userValue = Number(prompt("Введіть будь ласка число: "));
// userValue % 2 === 0 ? alert("Парне число") : alert("Непарне число");

//-------------------
//? Task #6
//* Еапишіть цикл for для виводу в консоль всіх парних чисел
//* від min до max включно по зменшенню

// const max = 56;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//-------------------
//? Task #7
//* За допомогою циклу for знайти суму всіх парних чисел від min до max включно

// const max = 10;
// const min = 0;
// let arr = [];
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) continue;
//     else {
//         arr.push(i);
//         total += i;
//     }
// }

// console.log(arr);
// console.log(total);

//! 1:28:44