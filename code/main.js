/*Create 16 <div> elements using JavaScript.*/

for(let i = 1; i <= 16; i++) {
    const myDiv = document.createElement('div');
    document.body.appendChild(myDiv);
}

/*Create a function that takes a number as a parametre and genarates a random number from it*/

function random(number) {
    return Math.floor(Math.random() * number);
}

/*Create a function to generate random background color*/

function bgChange() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    return rndCol;
}

/*Reference the divs created and store them in a variable*/

const divs = document.querySelectorAll('div');

/*Create code to apply random background color to targeted div*/

for(let i = 0; i < divs.length; i++) {
    divs[i].onclick = function(e) {
        e.target.style.backgroundColor = bgChange();
    }
}