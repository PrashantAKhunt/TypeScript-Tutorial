// Index Signatures

interface TransactionObj {
    readonly [key: string]: number // index signature
    Pizza: number,
    Books: number,
    Job: number,
}


// interface TransactionObj {
//     readonly [key: string]: number // index signature
// }

const todaysTransactions: TransactionObj = {
    Pizza: -5,
    Books: -10,
    Job: 45,
    Data: 29
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])


let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transections: TransactionObj) : number => {
    let sum = 0
    for (let item in transections) {
        sum += transections[item]
    }
    return sum
}


console.log(todaysNet(todaysTransactions))


// todaysTransactions.Pizza = -10

//////////////////////////////////////////////

interface Student {
    // [key: string]: string | number | number[] | undefined
    name: string
    GPA: number
    classes?: number[]
}


const student : Student = {
    name: 'John',
    GPA: 3.5,
    classes: [1,2,3]
}   

// console.log(student.test)
// console.log(student.classes)
for (const key in student) {
    // console.log(`${key} : ${student[key]}`)
    console.log(`${key} : ${student[key as keyof Student]}`)
}

Object.keys(student).map((key) => {
    console.log(`${key} : ${student[key as keyof typeof student]}`)
})


const logStudentKey = (student: Student, key: keyof Student) => {
    console.log(`${key} : ${student[key]}`)
}

logStudentKey(student, 'name')


//////////////////////////////////////////////////////

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sideIncome'

type Incomes = Record<Streams, number>  // string literal as key

const monthlyIncomes: Incomes = {
    salary: 5000,
    bonus: 1000,
    sideIncome: 200
}

for(const revenue in monthlyIncomes) {
    console.log(`${revenue} : ${monthlyIncomes[revenue as Streams]}`)
    console.log(`${revenue} : ${monthlyIncomes[revenue as keyof Incomes]}`)
}