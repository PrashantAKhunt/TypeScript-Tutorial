// type stringOrNumber = string | number

// type stringOrNumberArray = Array<stringOrNumber>



// type myType1 = {
//     name?: string,
//     age?: number, // ? makes optional
//     isWorking: stringOrNumberArray,
// }

// type UserId = stringOrNumber | boolean

// // Literal Types

// let myName: 'Prashant'

// let userName: 'Dave' | 'Prashant' | 'John'


// // userName = 'Dave1'

// // functions

// const myFunc = (a: number, b: number): number => {
//     return a + b
// }

// const logMsg = (msg: any): void => {
//     console.log(msg)
//     // return 10
// }

// logMsg('Hello')
// logMsg(myFunc(10, 20))
// // logMsg(myFunc('10', '20'))

// let subtract = function (a: number, b: number): number {
//     return a - b
// }

// // type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number) : number  
// } 


// let multiply : mathFunction = function(a,b)
// {
//     return a*b
// }

// logMsg(multiply(10,20))


// // optional parameters

// const addAll = (a: number, b: number, c?: number): number => {

//     if(typeof c === 'undefined')
//     {
//         c = 0
//     }

//     return (a + b) + c
// }


// // default parameters
// const sumAll = (a: number = 10, b: number, c: number = 2): number => {

//     if(typeof c === 'undefined')
//     {
//         c = 0
//     }
    
//     return (a + b) + c
// }

// console.log(addAll(10, 20))

// console.log(sumAll(10, 20))

// console.log(sumAll(undefined, 20, 30))


// // Rest parameters
// const total = (a:number, ...nums: number[]): number => {
//     // let sum = 0
//     // nums.forEach(num => sum += num)

//     return a - nums.reduce((a,b) => a+b)
// }

// logMsg(total(1,1,2,2))

// // never type
// const createError = (msg: string): never => {
//     throw new Error(msg)
// }



// const infiniteLoop = (): never => {
//     let i = 10
//     while(true)
//     {
//         i++
//         if(i === 100)
//         {
//             // break
//         }

//     }
// }

// // custom type guard
// const isNumber = (value: any): boolean => {
//     return typeof value === 'number'? true: false
// }


// // use of the never type
// const numberOrString = (a: string | number): string => {
//     if(typeof a === 'string')
//     {
//         return `Hello ${a}`
//     }
    
//     if(typeof a === 'number')
//     {
//         return `Hello ${a}`
//     }

//     if(isNumber(a))
//     {
//         return `Hello ${a}`
//     }
    
//     return createError('Invalid type')
// }