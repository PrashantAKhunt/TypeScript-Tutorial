// Utility Types

// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>) : Assignment => {
    return { ...assign, ...propsToUpdate }
}


const assign1: Assignment = {
    studentId: '123',
    title: 'Assignment 1',
    grade: 100
}

console.log(updateAssignment(assign1, {grade: 90}));
console.log(assign1.grade);

const assignGraded: Assignment = updateAssignment(assign1, {grade: 90});

console.log(assignGraded.grade);


// Required and Readonly

const recordAssignments = (assign: Required<Assignment>) : Assignment => {
    // send to database, etc.
    return assign;
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}

// assignVerified.grade = 100; // error

recordAssignments({...assignGraded, verified: true});



// Record

const hexColorMap: Record<string, string> = {
    'red': '#ff0000',
    'green': '#00ff00',
    'blue': '#0000ff'
}

type Students = 'Sam' | 'Sally' | 'Susan';

type LetterGrade = 'A' | 'B' | 'C' | 'D' | 'F';

const finalGrades: Record<Students, LetterGrade> = {
    Sam: 'A',
    Sally: 'B',
    Susan: 'C'
}


interface Grades {
    assign1: number,
    assign2: number,
}


const gradeData: Record<Students, Grades> = {
    Sam: { assign1: 100, assign2: 100 },
    Sally: { assign1: 90, assign2: 95 },
    Susan: { assign1: 80, assign2: 85 }
}


// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
    studentId: 'P123',
    grade: 100
}

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
    studentId: 'P123',
    title: 'Assignment 1',
}


// Exclude and Extract


type adjustGrades = Exclude<LetterGrade, 'C' | 'F'>;

type HighGrades = Extract<LetterGrade, 'A' | 'B'>;

// NonNullable

type AllPossibleGrades = 'Dave' | 'John' | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;



// ReturnType
//type newAssign = { title: string, points: number };


const createNewAssign = (title: string, points: number) => {
    return { title, points };
}

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Util Types", 100);

console.log(tsAssign);


// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Util Types", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);

console.log(tsAssign2);


// Awaited - helps us with the return type of Promise (async/await)


interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async () : Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>  {
        return res.json();
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    });

    return data;    
}


type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
// type FetchUsersReturnType = ReturnType<typeof fetchUsers>;

fetchUsers().then(users => {
    console.log(users);
})
