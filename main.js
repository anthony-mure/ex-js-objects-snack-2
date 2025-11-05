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
// 1-(9)

//Code Question 4

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
}

const restaurant = {
  name: "Hyur's Burgers",
  address: {
    street: 'Main Street',
    number: 123,
  },
  openingDate: new Date(2025, 3, 11),
  isOpen: false,
};

//domande:

// 1-Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// 1-(Il metodo migliore è lo spread operator perchè mi permette di copiare anche la funzione che contiene)
// 2-Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
// 2-(Il metodo migliore è lo structuredclone() perchè mi permette di copiare anche l'oggetto data contenuto al suo interno nel modo corretto)
