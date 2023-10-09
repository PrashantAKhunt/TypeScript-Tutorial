"use strict";
// Generics Type
const stringEcho = (arg) => arg;
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj('Prashant'));
console.log(isObj(123));
console.log(isObj({ name: 'Prashant' }));
console.log(isObj([1, 2, 3]));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            arg,
            is: false
        };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return {
            arg,
            is: false
        };
    }
    return {
        arg,
        is: !!arg
    };
};
console.log(isTrue(true));
console.log(isTrue('Prashant'));
console.log(isTrue(123));
console.log(isTrue({ name: 'Prashant' }));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue(NaN));
console.log(isTrue(0));
console.log(isTrue(''));
console.log(isTrue([]));
console.log(isTrue({}));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            value: arg,
            is: false
        };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return {
            value: arg,
            is: false
        };
    }
    return {
        value: arg,
        is: !!arg
    };
};
const processUser = (user) => {
    console.log(user.id);
    return user;
};
console.log(processUser({ id: 1, name: 'Prashant' }));
// console.log(processUser({ name: 'Prashant'}));
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
console.log(getUsersProperty([{ id: 1, name: 'Prashant' }, { id: 2, name: 'Prashantqq' }], 'name'));
// console.log(getUsersProperty([{id: 1, name: 'Prashant'}, {id: 2, name: 'Prashantqq'}], 'name11'));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
// const store = new StateObject<number>(1234);
const store = new StateObject("abcd");
console.log(store.state);
store.state = "qq";
// store.state = 123;
const myState = new StateObject([15]);
console.log(myState.state);
myState.state.push('Prashant');
myState.state.push(123);
console.log(myState.state);
