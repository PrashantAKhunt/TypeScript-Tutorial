"use strict";
// Index Signatures
// interface TransactionObj {
//     readonly [key: string]: number // index signature
// }
const todaysTransactions = {
    Pizza: -5,
    Books: -10,
    Job: 45,
    Data: 29
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transections) => {
    let sum = 0;
    for (let item in transections) {
        sum += transections[item];
    }
    return sum;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: 'John',
    GPA: 3.5,
    classes: [1, 2, 3]
};
// console.log(student.test)
// console.log(student.classes)
for (const key in student) {
    // console.log(`${key} : ${student[key]}`)
    console.log(`${key} : ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(`${key} : ${student[key]}`);
});
const logStudentKey = (student, key) => {
    console.log(`${key} : ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 5000,
    bonus: 1000,
    sideIncome: 200
};
for (const revenue in monthlyIncomes) {
    console.log(`${revenue} : ${monthlyIncomes[revenue]}`);
    console.log(`${revenue} : ${monthlyIncomes[revenue]}`);
}
