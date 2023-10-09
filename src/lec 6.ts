// classes in TypeScript


class Coder {

    // name: string
    // music: string
    // age: number
    // lang: string

    secondLang!: string
    
    constructor(
        public readonly name: string , 
        public music: string , 
        private age: number , 
        protected lang: string = 'JavaScript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }    

    public getAge() {
        return this.age
    }
}

const Dave = new Coder('Dave', 'Rock', 30, 'JavaScript')

// console.log(Dave.name, Dave.music, Dave.getAge(), Dave.lang);

const Dave1 = new Coder('Dave', 'Rock', 30)


class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    )
    {
        super(name, music, age)
    }

    public getAge() {
        return super.getAge()
    }

    public getLang() {
        return this.lang
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Pop', 20)

console.log(Sara.name, Sara.music, Sara.getAge(), Sara.getLang(), Sara.computer);


// interface in TypeScript


interface Musician {
    name: string,
    instrument: string,
    play(action: string):string
}


class Guitarist implements Musician{
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string): string {
        return `${this.name} is playing ${this.instrument} by ${action}`
    }
    
}

const page = new Guitarist('Jimmy Page', 'Guitar')
const jones = new Guitarist('John Paul Jones', 'Bass')

console.log(page.play('Led Zeppelin'));
console.log(jones.play('Led Zeppelin'));


class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const peep1 = new Peeps('Dave')
const peep2 = new Peeps('Sara')
const peep3 = new Peeps('John')


console.log(peep1.id);

console.log(Peeps.getCount());



class Bands {
    private dataState: string []

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value:string[]) {
        if(Array.isArray(value) && value.every(entry => typeof entry === 'string')) {
            this.dataState = value
            return
        }
        else {
            throw new Error('Invalid data format')
        }
    }

}


const MyBands = new Bands()

MyBands.data = ['Led Zeppelin', 'The Beatles', 'The Rolling Stones']

console.log(MyBands.data);


