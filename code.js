import{Toolbox} from "./toolbox.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); 

let arr = ["a", "b", "c"];

//gets a random number 0 -> array.length, given an array


// let counts = [0,0,0];
for(let i = 0; i<100; i++) {
    // let randomIndex = getRandomIndex(arr);
    // counts[randomIndex] = counts[randomIndex] + 1;

    console.log(Toolbox.getRandomItem(arr));
}

// console.log(counts);