//Code Question 1

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // ?
console.log(secondBurger.name); // ?

//domande:

// 1-Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// 1-(Double Cheese Burger)

// 2-Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 2-(1)