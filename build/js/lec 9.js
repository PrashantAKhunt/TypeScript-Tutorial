"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: '123',
    title: 'Assignment 1',
    grade: 100
};
console.log(updateAssignment(assign1, { grade: 90 }));
console.log(assign1.grade);
const assignGraded = updateAssignment(assign1, { grade: 90 });
console.log(assignGraded.grade);
// Required and Readonly
const recordAssignments = (assign) => {
    // send to database, etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 100; // error
recordAssignments(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    'red': '#ff0000',
    'green': '#00ff00',
    'blue': '#0000ff'
};
const finalGrades = {
    Sam: 'A',
    Sally: 'B',
    Susan: 'C'
};
const gradeData = {
    Sam: { assign1: 100, assign2: 100 },
    Sally: { assign1: 90, assign2: 95 },
    Susan: { assign1: 80, assign2: 85 }
};
const score = {
    studentId: 'P123',
    grade: 100
};
const preview = {
    studentId: 'P123',
    title: 'Assignment 1',
};
// ReturnType
//type newAssign = { title: string, points: number };
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Util Types", 100);
console.log(tsAssign);
const assignArgs = ["Util Types", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    });
    return data;
});
// type FetchUsersReturnType = ReturnType<typeof fetchUsers>;
fetchUsers().then(users => {
    console.log(users);
});
