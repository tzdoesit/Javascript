
const output = document.querySelector('.output');
output.innerHTML = '';

for (let i = 10; i >= 0; i--) {
    const para = document.createElement('p');

    if (i === 10){
    para.textContent = `Countdown ${i}`;
    }

    else if (i === 0) {
        para.textContent = `Blast off!`;
    }

    else {
        para.textContent =  i;
    }

    output.appendChild(para);
}


// const cats = ["Pete", "Biggles", "Jasmine"];

// let myFavoriteCats = "My cats are called ";

// for (const cat of cats) {
//     myFavoriteCats += `${cat}, `;
// }

// for (let i = 0; i < cats.length; i++) {
//     if (i === cats.length - 1) {
//         myFavoriteCats += `and ${cats[i]}.`;
//     }
//     else {
//         myFavoriteCats += `${cats[i]}, `;
//     }
// }

// console.log(myFavoriteCats);

// you can nest arrays inside of an array, this is used somewhat often
// let a = [
//     ["A", "B"],
//     [1, 2],
// ]

// console.log(a[0][0])
// console.log(a[1])

// const fruits = ["banana", "apple", "pear", "orange"];
// fruits.push(["mango"]);
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// fruits.unshift("lemon");
// console.log(fruits);
// fruits[fruits.length] = "kiwi";
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// for (const fruit of fruits) {
//     console.log(fruit);
// }


// const button = document.querySelector("button");

// button.addEventListener("click", updateName);

// function updateName() {
//     const name = prompt("Enter a new name");
//     button.textContent = `Player 1: ${name}`;
// }

// const button = document.querySelector("button");

// function greet() {
// const name = prompt ("What is your name?");
// const greeting = document.querySelector("#greeting");
// greeting.textContent = `hello ${name}, nice to see you!`;
// }

// button.addEventListener("click", greet);

// ---------------

// const button = document.querySelector("button");

// button.addEventListener("click", updateName);

// function updateName() {
//     const name = prompt("Enter a new name");
//     button.textContent = `Player 1: ${name}`;
// }

// function greet() {
//   const name = prompt("What is your name?");
//   const greeting = document.querySelector("#greeting");
//   greeting.textContent = `Hello ${name}, nice to see you!`;
// }

// greeting = document.getElementById("trash");
// button.addEventListener("click", greet);


// const name = "Tommy";
// const greeting = `hello, ${name}`;
// console.log(greeting);

// let text = "HELLOOOO WORLD";
// let char = text.charAt(6);
// let length = text.length;

// console.log(text, char, length);

// let letter = name[2];

// var text = "HELLO WORLD";
// document.getElementById("demo").innerHTML = text.charAt(0);

// const button = document.querySelector("button");

// function greet() {
//     const name = prompt("what is your name?");
//     const greeting = document.querySelector("#greeting");
//     greeting.textContent = `Hello ${name}, nice to meet you!`;
// }

// button.addEventListener("click", greet);