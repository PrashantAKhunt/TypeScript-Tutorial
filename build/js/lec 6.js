"use strict";
// classes in TypeScript
class Coder {
    constructor(name, music, age, lang = 'JavaScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const Dave = new Coder('Dave', 'Rock', 30, 'JavaScript');
// console.log(Dave.name, Dave.music, Dave.getAge(), Dave.lang);
const Dave1 = new Coder('Dave', 'Rock', 30);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
    }
    getAge() {
        return super.getAge();
    }
    getLang() {
        return this.lang;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Pop', 20);
console.log(Sara.name, Sara.music, Sara.getAge(), Sara.getLang(), Sara.computer);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is playing ${this.instrument} by ${action}`;
    }
}
const page = new Guitarist('Jimmy Page', 'Guitar');
const jones = new Guitarist('John Paul Jones', 'Bass');
console.log(page.play('Led Zeppelin'));
console.log(jones.play('Led Zeppelin'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const peep1 = new Peeps('Dave');
const peep2 = new Peeps('Sara');
const peep3 = new Peeps('John');
console.log(peep1.id);
console.log(Peeps.getCount());
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(entry => typeof entry === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Invalid data format');
        }
    }
}
const MyBands = new Bands();
MyBands.data = ['Led Zeppelin', 'The Beatles', 'The Rolling Stones'];
console.log(MyBands.data);
