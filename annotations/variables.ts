//type annotations
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects 
let now: Date = new Date()

// Array
// we are telling Typescript we are making an Array
// that will contain nothing but strings inside

// left hand we are indicating the type of array ,
// right hand we are creating the array 
let colors: string[] = ['red', 'green', 'blue'];

let myNumbers: number[] = [1,2,3,4,5];

let truths: boolean[] = [true, false, true];

//class
class Car {

}

//instance of a car
let car: Car = new Car();

// Object literal

let point: { x: number; y: number } = {

    x: 10,
    y: 20
};

// Functions

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
    
};

//when to use annotations
// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);

console.log(coordinates); // {x: 10,y: 20};

// 2) When we declare a variable on one line
// and initalizate it later 

let words = [ 'red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3) Variables whose type cannot be inferred correctly 
 let numbers = [ -10, -1, 12];
 let numberAboveZero: boolean | number = false;
 