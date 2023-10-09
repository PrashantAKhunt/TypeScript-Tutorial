"use strict";
// Type Assertion or Type Casting
// convert to more or less specific type
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'hello';
let e = 'hello';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
// let myVal: string = addOrConcat(1, 2, 'concat')
let myVal = addOrConcat(1, 2, 'concat');
// be careful with this! TS will not check if you are correct
let nextVal = addOrConcat(1, 2, 'concat');
// 10 as string
10;
// The DOM
const img = document.querySelector('img'); // HTMLImageElement | null
const img1 = document.querySelector('img'); // HTMLImageElement | null
const id = document.querySelector('#myId'); // Element | null
const myImg = document.getElementById('#myId'); // HTMLImageElement | null
img.src;
img1.src;
// myImg.src // error
