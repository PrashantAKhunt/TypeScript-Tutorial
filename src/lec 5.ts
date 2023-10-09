// Type Assertion or Type Casting

type One = string
type Two = string | number
type Three = 'hello'


// convert to more or less specific type

let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific


let d = <One> 'hello'
let e = <string | number> 'hello'

const addOrConcat = (a: number, b: number, c:'add' | 'concat'): number | string => {
    if(c === 'add') {
        return a + b
    }
    return '' + a + b
}


// let myVal: string = addOrConcat(1, 2, 'concat')
let myVal: string = addOrConcat(1, 2, 'concat') as string

// be careful with this! TS will not check if you are correct
let nextVal: number = addOrConcat(1, 2, 'concat') as number


// 10 as string
(10 as unknown) as string


// The DOM

const img = document.querySelector('img') as HTMLImageElement  // HTMLImageElement | null
const img1 = document.querySelector('img')!  // HTMLImageElement | null
const id = document.querySelector('#myId') // Element | null
const myImg = document.getElementById('#myId') as HTMLElement // HTMLImageElement | null

img.src
img1.src

// myImg.src // error