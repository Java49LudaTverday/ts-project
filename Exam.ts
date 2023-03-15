export type Employee = {
    id: number;
    name: string;
    birthDate: string;
    department: string;
    salary: number;
}
const config = {
    "minId": 1,
    "maxID": 10000,
    "department": ["Marketing", "Sales", "Engineering", "Support", "Finance", "Development"],
    "minSalary": 5000,
    "maxSalary": 40000,
    "minBirthYear": 1950,
    "maxBirthYear": 2008
}
export type Stat = {
    min: number; max: number; avr: number
}
export function statAge(employees: Employee[]): Stat {
    const dateCurrent: Date = new Date();
    const yearCurrent: number = dateCurrent.getFullYear();
    const minResYear = getAgeEmployee(employees[0], yearCurrent);
    return employees.reduce((res, empl) => {
        const yearEmpl: number = +empl.birthDate.slice(0, 4);
        const ageEmpl: number = yearCurrent - yearEmpl;
        console.log(ageEmpl)
        if (ageEmpl < res.min) {
            res.min = ageEmpl
        }
        if (ageEmpl > res.max) {
            res.max = ageEmpl
        }
        res.avr += Math.floor(ageEmpl / employees.length);
        return res;
    }, { min: minResYear , max: minResYear, avr: 0 })
}

export function statSalary(employees: Array<Employee>): Stat {
    return employees.reduce((res, empl) => {
        if (empl.salary < res.min) {
            res.min = empl.salary
        }
        if (empl.salary > res.max) {
            res.max = empl.salary
        }
        res.avr += Math.floor(empl.salary / employees.length);
        return res;
    }, { min: employees[0].salary, max: employees[0].salary, avr: 0 })
}

export function createRandomEmployee(employees: Employee[]): Employee {
    return {
        id: getID(employees),
        name: getRandomName(),
        birthDate: getBirthDate(),
        department: config.department[getRandomNumber(0, config.department.length)],
        salary: getRandomNumber(config.minSalary, config.maxSalary)
    }

}

function getRandomName(): string {
    const NAMES: string[] = ['Dan', 'Dima', 'Yury', 'Vladimir', 'Moshe', 'Bill', 'Emma', 'Olivia'];
    return NAMES[getRandomNumber(0, NAMES.length)];
}
function getBirthDate(): string {
    const randomDate = getRandomDate(config.minBirthYear, config.maxBirthYear);
    const dateArr = randomDate.toISOString().split("T");
    return dateArr[0];
}
function getID(employees: Employee[]): number {
    let id: number = getRandomNumber(config.minId, config.maxID);
    let res = employees.reduce((res, empl) => empl.id === id ? res = true : res = false, false)
    while (res) {
        id = getRandomNumber(config.minId, config.maxID);
        res = employees.every(empl => empl.id === id);
    }
    // if (res) {
    //     id = getRandomNumber(config.minId, config.maxID);
    // }
    return id;
}
function getAgeEmployee(employee: Employee, currentYear: number): number{
    const yearEmpl: number = +empl.birthDate.slice(0, 4);
    const ageEmpl: number = currentYear - yearEmpl;
    return ageEmpl;
}
function getRandomNumber(minValue: number, maxValue: number, isMinInclusive: boolean = true, isMaxInclusive: boolean = false): number {

    if (!isMinInclusive) {
        minValue += 1;
    }
    if (isMaxInclusive) {
        maxValue += 1;
    }
    if (minValue == maxValue) {
        throw "min may not be equaled to max";
    }
    if (minValue > maxValue) {
        [minValue, maxValue] = [maxValue, minValue];
    }
    return minValue + Math.trunc(Math.random() * (maxValue - minValue));
}
function getRandomDate(minYear: number, maxYear: number) {
    const year: number = getRandomNumber(minYear, maxYear);
    const month: number = getRandomNumber(0, 12);
    const day: number = getRandomNumber(0, 32);
    return new Date(year, month, day);
}
const arrEmpl: Employee[] = [];
let empl = createRandomEmployee(arrEmpl);
arrEmpl.push(empl);
let empl1 = createRandomEmployee(arrEmpl);
arrEmpl.push(empl1);
let empl2 = createRandomEmployee(arrEmpl);
arrEmpl.push(empl2);
console.log(empl);
console.log(empl1);
console.log(empl2);
console.log(arrEmpl);

const objAge = statAge(arrEmpl);
const objSalary = statSalary(arrEmpl)
console.log(`StatAge: min:  ${objAge.min} max: ${objAge.max}  avr: ${objAge.avr}`);
console.log(`StatSalary: min:  ${objSalary.min} max: ${objSalary.max}  avr: ${objSalary.avr}`);