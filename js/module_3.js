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

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line
  let totalPrice = 0;
for (const product of products) {
  if (product.name === productName) {
    totalPrice = product.price * product.quantity;
  }
}
  return totalPrice;
  // Change code above this line
}

console.log(calculateTotalPrice("Radar"));