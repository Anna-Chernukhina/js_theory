//! Task #19
//* Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
//* Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
//* Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
   

// function getAllPropValues(propName) {
//     let propValues = [];
  
//     for (const product of products) {
//         switch (propName) {
//             case "name":
//                 propValues.push(product.name);
//                 break;
        
//             case "price":
//                 propValues.push(product.price);
//                 break;
        
//             case "quantity":
//                 propValues.push(product.quantity);
//                 break;
        
//             default:
//                 break;
//         }
//     }
//     return propValues;
// }
// console.log(getAllPropValues("name"));
    
//! Task #20
//* Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару.
//* Функція повинна повернути загальну вартість(ціна * кількість) товару з таким ім'ям з масиву products

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
// for (const product of products) {
//   if (product.name === productName) {
//     totalPrice = product.price * product.quantity;
//   }
// }
//   return totalPrice;
// }

// console.log(calculateTotalPrice("Radar"));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
  
//   addPotion(newPotion) {
//     let isSet = false;
//     for (let item of this.potions) {
//       if (item.name === newPotion.name) {
//         isSet = true;
//       }
//     }
//     if (isSet) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     else {
//       this.potions.push(newPotion);
//     }
//   },
  
//   removePotion(potionName) {
//     let isSet = true;
//     for (let item of this.potions) {
//       if (item.name === potionName) {
//         let potionIndex = this.potions.indexOf(item);
//         this.potions.splice(potionIndex, 1);
//         isSet = false;
//       }
//     }

//     if (false) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//     return this.potions;
//   },
  
//   updatePotionName(oldName, newName) {
//     let isSet = false;
//     for (let item of this.potions) {
//       if (item.name === oldName) {
//         let potionIndex = this.potions.indexOf(item);
//         this.potions.splice(potionIndex, 1, { 'name': newName, 'price': item.price });
//         isSet = true;
//       }
//     }
    
//     if (false) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//   }
//   // Change code above this line
// };




//! Module 3-1 Objects

//* создание объекта
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: false,
//     rating: 0,
//     data: {
//         a: 1,
//         b: {
//           test: 'test!!!',
//           test1: {
//             d: 10
//           }
//         },
//         c: 3
//     }
//   };

//* вывод объекта, его свойств
// const a = book.title
// console.log(a)
// console.log(book.genres)
// console.log(book.data.a)
// console.log(book.data.b.test)

// console.log(book['genres']);
// console.log(book[genres]); // error

//* имя свойства в переменной, правильный синтаксис
// const x = 'author';
// console.log(book['author']) //  "Bernard Cornwell"
// console.log(book[x]) // "Bernard Cornwell"
// console.log(book.x) // undefined

// console.log(book['data']['a']) // 1

// console.log(book)

//* изменение значения свойств
// book.isPublic = true;

// console.log(book)

// book.genres.push('tale')
// console.log(book)

// console.log(book.price)

//* добавление новых свойств
// book.price = '10$'
// book['price'] = '10$'

// book.data.d = 'd'

//* добавление новых свойств в виде объектов
// book.x.y = 'test' // error

//! свойство в виде объекта добавляется в 2 этапа
// book.x = {}
// book.x.y = {}
// book.x.y.q = 'a'

//* добавление новых свойств в виде массива
// book.array = []
// book.array = [1, 2, 3]
// console.log(book)


// ❗️❗️❗️ Скорочена форма запису при створенні об'єкта

// const name = "Генрі Сибола";
// const age = 45;

//* не нужно дублировать
// const user = {
//   name: name,
//   age: age,
// };

// console.log(user)

//* короткая запись
// const user = {
//   name,
//   age,
// };

// console.log(user)

// ❗️❗️❗️ Приклад з методами

// const student = {
//     name: 'Jhon',
//     email: 'jhon@gmail.com',
//     homeworkResults: [],
//     getName() {
//        return this.name
//     },
//     getEmail() {
//         console.log(this.email)
//     },
//     getHWResults() {
//         console.log(this.homeworkResults)
//     },
//     addHomeworkResults(topic, sucess) {
//       //  const item = {topic:topic, sucess:sucess}
//       //* короткая запись, то же самое что и строка выше
//       const item = {topic, sucess}
//       this.homeworkResults.push(item)
//       this.getHWResults()
//     }
// }

// console.log(student.getName())
// const studentName = student.getName()
// console.log(studentName)
// student.getEmail()
// const studentEmail = student.getEmail()
// console.log(studentEmail) // undefined т.к. нет return

// student.addHomeworkResults('HTML/CSS', true)
// console.log(student);
// student.getHWResults()
// student.addHomeworkResults('JS', true)


//! Циклом  for in перебираются ключи объекта!

// ❗️❗️❗️ Протопитипне наслідування, for in

const animal = {
  legs: 4,
  eyes: 2
};

// console.log(animal)

const dog = Object.create(animal);

// console.log(dog)

dog.name = "Манго"

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

//! Цикл  for in показывает и собственные свойства, и наследуемые из прототипа
// for (const a in dog) {
//   console.log(a)
// }

// for (const key in dog) {
//   console.log(dog.hasOwnProperty(key))
// if (dog.hasOwnProperty(key)) {
//     console.log(key)
// }
// }

// dog.eyeColor = 'grey';

//* Object.keys возвращает только собственные ключи объекта
// const keys = Object.keys(dog)
// console.log(keys)

// for (const item of keys) {
//   console.log(item)

// }

// const values = Object.values(dog)
// console.log(values)

// const entries = Object.entries(dog)
// console.log(entries)


//* ❗️❗️❗️ Задача
//* создать на основе массива объектов объект с такими же ключами и значениями ключей в виде массива значений
//* одноименных ключей исходного массива объектов

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// const data = {} // создаем объект для результата
// const keys = Object.keys(books[0]) // берем первый элемент массива объектов для забора ключей будущего объекта
// // console.log(keys)

// //* создаем пустые массивы в качестве значений будущего объекта
// for (const key of keys) {
//     data[key] = []
// }
// // console.log(data)

// for (const key in data) {
//   for (const book of books) {
//       console.log(`key: ${key} book[key]: ${book[key]}`);
//       data[key].push(book[key])
//     }
// }

// console.log(data)

//! Module 3-2 Objects. Десктруктуризация, rest, spread

// ❗️❗️❗️ Spread

// const a = ['a', 'b', 'c'];
// const b = [1, 2, 3];
// const c = [[1, 2], 'qwe', 1234]
// const d = [...a, 100, 200, 300, ...b, ...c];
// const d = [...a, 100, 200, 300, ...b, ...c[0], c[1], c[2]];
// const e = [a, b, c]

// console.log(d)

//* создание нового объекта с помощью spread
// const obj1 = {a: 1, b: 2};
// const obj2 = {c: 3, d: 4}
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// const obj1 = {a: 1, b: 2};
// const obj2 = {a: 0, c: 3, d: 4}
// // const obj3 = {...obj2, ...obj1}
// const obj3 = {...obj2, ...obj1, a: 5, e: 9}
// console.log(obj3)

// ❗️❗️❗️ Rest

// function q(...otherArgs) {
//   console.log(otherArgs); // Масив інших аргументів
// }

// q(1, 2);
// q(1, 2, 3);
// q(1, 2, 3, 4, 5, 6, 7);

// function w(a, b, c, ...otherArgs) {

//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(otherArgs); // Масив інших аргументів
// }
// w(1, 2, 3);
// w(1, 2, 3, 4, 5, 6, 7);

// function isIncluded(num, ...array) {
//   console.log(array.includes(num))
// }
// isIncluded(1, 2, 3, 5, 6, 8, 5)

// function isIncluded(...array) {
//   const newArray = array.slice(1)
//   console.log(newArray.includes(array[0]))
// }
// isIncluded(1, 2, 3, 5, 6, 8, 5)

// function isIncluded(...array) {
//   console.log(array);
//   const num = array.pop();
//   console.log(array);
//   console.log(num);
//   // console.log(array.includes(num));
// }
// isIncluded(5, 2, 3, 5, 6, 8, 10);

// ❗️❗️❗️ Деструктуризація

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
//   price: "3$",
//   coverImage: "bkjbkbh",
// };
// const { price, title, ...data } = book;

// console.log(book)
// // console.log(price)
// console.log(data)

// const { author} = book;

// console.log(book.author)
// console.log(book['author'])
// console.log(author)

// Деструктуризуємо

// const { title, author, isPublic, rating, coverImage = 'qwerty' } = book;

// console.log(coverImage)

// const { title, author, isPublic, rating: votes, coverImage, price='5$' } = book;
// console.log(rating)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {

// const {title, author, rating} = book
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// for (const {title, author, rating} of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//     a: {
//       b: 0,
//       c: {
//         d: "bkjbkjbnlkbklj",
//       },
//     },
//   },
// };


// const {
//   name,
//   tag,
//   stats: {
//     followers,
//     views,
//     likes,
//     a: {
//       b,
//       c: { d },
//     },
//   },
// } = user;

// console.log(stats)

// console.log(d);
// console.log(followers)
// console.log(likes)


// let a
// let b
// a = 5
// b = 10
// console.log(a)
// console.log(b)

// let a, b
// a = 5
// b = 10
// console.log(a)
// console.log(b)


// ❗️❗️❗️ Задача

// const car1 = {
//   brand: "BMW",
//   model: "700",
//   a: "red",
//   maxSpeed: 240,
//   isNew: true,
//   dimensions: {
//     weight: 2000,
//     height: 150,
//     length: 4.2,
//   },
// };

// const car2 = {
//   brand: "BMW",
//   model: "700",
//   a: "red",
//   maxSpeed: 240,
//   isNew: true,
//   dimensions: {
//     height: 150,
//     length: 4.2,
//   },
// };

// function createMessage(car) {
//   const message = `
//   Color: ${car.a}
//   Max speed: ${car.maxSpeed}
//   Is new: ${car.isNew}
//   Weight: ${car.dimensions.weight}
//   `;
//   console.log(message);
// }

// function createMessage({
//   dimensions: {
//     weight = 'No info',
//     height = "No info",
//     length = "No info"
//   },
//   a: color = 'No info',
//   maxSpeed = "No info",
//   isNew = "No info",

// }) {
//   const message = `
//   Color: ${color}
//   Max speed: ${maxSpeed}
//   Is new: ${isNew}
//   Weight: ${weight}
//   `;
//   console.log(message);
// }

// createMessage(car2);