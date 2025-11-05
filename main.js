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

//Code Question 2

const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?

//P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

//domande:

// 1-Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// 1-(Salad)
// 2-Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 2-(2)

//Code Question 3

const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29
  }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

//domande:

// 1-Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 1(9)