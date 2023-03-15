"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandomEmployee = exports.statSalary = exports.statAge = void 0;
const config = {
    "minId": 1,
    "maxID": 10000,
    "department": ["Marketing", "Sales", "Engineering", "Support", "Finance", "Development"],
    "minSalary": 5000,
    "maxSalary": 40000,
    "minBirthYear": 1950,
    "maxBirthYear": 2008
};
function statAge(employees) {
    const dateCurrent = new Date();
    const yearCurrent = dateCurrent.getFullYear();
    const minResYear = getAgeEmployee(employees[0], yearCurrent);
    return employees.reduce((res, empl) => {
        const yearEmpl = +empl.birthDate.slice(0, 4);
        const ageEmpl = yearCurrent - yearEmpl;
        console.log(ageEmpl);
        if (ageEmpl < res.min) {
            res.min = ageEmpl;
        }
        if (ageEmpl > res.max) {
            res.max = ageEmpl;
        }
        res.avr += Math.floor(ageEmpl / employees.length);
        return res;
    }, { min: minResYear, max: minResYear, avr: 0 });
}
exports.statAge = statAge;
function statSalary(employees) {
    return employees.reduce((res, empl) => {
        if (empl.salary < res.min) {
            res.min = empl.salary;
        }
        if (empl.salary > res.max) {
            res.max = empl.salary;
        }
        res.avr += Math.floor(empl.salary / employees.length);
        return res;
    }, { min: employees[0].salary, max: employees[0].salary, avr: 0 });
}
exports.statSalary = statSalary;
function createRandomEmployee(employees) {
    return {
        id: getID(employees),
        name: getRandomName(),
        birthDate: getBirthDate(),
        department: config.department[getRandomNumber(0, config.department.length)],
        salary: getRandomNumber(config.minSalary, config.maxSalary)
    };
}
exports.createRandomEmployee = createRandomEmployee;
function getRandomName() {
    const NAMES = ['Dan', 'Dima', 'Yury', 'Vladimir', 'Moshe', 'Bill', 'Emma', 'Olivia'];
    return NAMES[getRandomNumber(0, NAMES.length)];
}
function getBirthDate() {
    const randomDate = getRandomDate(config.minBirthYear, config.maxBirthYear);
    const dateArr = randomDate.toISOString().split("T");
    return dateArr[0];
}
function getID(employees) {
    let id = getRandomNumber(config.minId, config.maxID);
    let res = employees.reduce((res, empl) => empl.id === id ? res = true : res = false, false);
    while (res) {
        id = getRandomNumber(config.minId, config.maxID);
        res = employees.every(empl => empl.id === id);
    }
    // if (res) {
    //     id = getRandomNumber(config.minId, config.maxID);
    // }
    return id;
}
function getAgeEmployee(employee, currentYear) {
    const yearEmpl = +empl.birthDate.slice(0, 4);
    const ageEmpl = currentYear - yearEmpl;
    return ageEmpl;
}
function getRandomNumber(minValue, maxValue, isMinInclusive = true, isMaxInclusive = false) {
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
function getRandomDate(minYear, maxYear) {
    const year = getRandomNumber(minYear, maxYear);
    const month = getRandomNumber(0, 12);
    const day = getRandomNumber(0, 32);
    return new Date(year, month, day);
}
const arrEmpl = [];
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
const objSalary = statSalary(arrEmpl);
console.log(`StatAge: min:  ${objAge.min} max: ${objAge.max}  avr: ${objAge.avr}`);
console.log(`StatSalary: min:  ${objSalary.min} max: ${objSalary.max}  avr: ${objSalary.avr}`);
//# sourceMappingURL=Exam.js.map