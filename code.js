let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); 

let arr = ["a", "b", "c"];

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
    console.log(array);
}

getRandomIndex(arr);