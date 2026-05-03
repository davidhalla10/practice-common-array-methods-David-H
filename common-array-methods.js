let drinks = ["Cappuchino", "Espresso", "Latte"];
let pastry = ["Danish", "Croissant", "Bagel"]

console.log(drinks.length, pastry.length);

let order1 = `${drinks[0]} and a ${pastry[2]}.`;
console.log(order1);

let order2 = `${drinks[1]} and a ${pastry[1]}.`;
console.log(order2);

let order3 = `${drinks[2]} and a ${pastry[0]}.`;
console.log(order3);

for (let i = 0; i < drinks.length; i++) {
    console.log(drinks[i]);
};

drinks.push("Flat white");
console.log(drinks.length);

let drinkIndex = 3;
let pastryIndex = 1;

console.log(drinks[drinkIndex] + " and a " + pastry[pastryIndex]);
