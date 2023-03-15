"use strict";
function getRandomNumber(minValue, maxValue, isMinInclusive = true, isMaxInclusive = false) {
    if (minValue > maxValue) {
        [minValue, maxValue] = [maxValue, minValue];
    }
    else if (minValue == maxValue && (!isMinInclusive || !isMaxInclusive)) {
        // throw "min may not be equaled to max";
    }
    else if (minValue + 1 === maxValue && !isMinInclusive && !isMaxInclusive) {
        // throw "min or max must be inclusive";
    }
    else if (!isMinInclusive && !isMaxInclusive) {
        minValue += 1;
    }
    else if (isMinInclusive && isMaxInclusive) {
        maxValue += 1;
    }
    else if (!isMinInclusive && isMaxInclusive) {
        minValue += 1;
        maxValue += 1;
    }
    return minValue + Math.floor(Math.random() * (maxValue - minValue));
}
function getRandomDate(minYear, maxYear) {
    if (minYear < 0) {
        minYear *= -1;
    }
    if (maxYear < 0) {
        maxYear *= -1;
    }
    const year = getRandomNumber(minYear, maxYear);
    const month = getRandomNumber(0, 12);
    const day = getRandomNumber(0, 32);
    return new Date(year, month, day);
}
console.log(getRandomDate(-1, -4));
//# sourceMappingURL=exams.js.map