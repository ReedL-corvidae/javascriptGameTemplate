export class Toolbox {

    getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }

    //gets a random item from an array
    getRandomItem(array){
        let randomIndex = getRandomIndex(array);
        return array[randomIndex];
    }

}