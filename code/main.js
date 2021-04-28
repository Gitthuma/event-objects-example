/*Create 16 <div> elements using JavaScript.*/

for (i = 1; 1<= 16; i++) {
    const myDiv = document.createElement('div');
    document.body.appendChild(myDiv);
}

/*Create a function that takes a number as a parametre and genarates a random number from it*/

function random(number) {
    return Math.floor(Math.random() * number);
}