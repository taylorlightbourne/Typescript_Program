function log(message) {
    console.log(message);
}

var message = 'Hello World!';

log(message);

function doSomething() {
    for (let i = 0; i < 5; i++){
        console.log(i);
    }

    console.log('Finally: ' + i);
}

doSomething();

let count: number; // int or float
 count = 5;

// boolean
//string
// any
// number[] = [1, 2, 3];
// any[] = [1, "hello world", true];
// enum - related consts in a container

const ColorRed = 1;
const ColorBlue = 2;
const ColorGreen = 3;

enum Color { Red, Blue, Green};
let backgroundColor = Color.Blue;

// Type Assertions

let str = 'abc';

let endsWithC = (<string>str).endsWith('c');

let altEndsWithC = (str as string).endsWith('c');
console.log(altEndsWithC);

// Arrow functions

let doLog = (message) => console.log(message);

doLog(message);


//
let drawPoint = (point: { x: number , y: number}) => {
 //...   
}

drawPoint ({
    x: 1,
    y: 2
})

// alt with interface

interface Point {
    x: number,
    y: number
}

let drawPoint1 = (point: Point) => {
    //...   
   }

 let getDistance = (pointA: Point, pointB: Point) => {
     //...
 }  
