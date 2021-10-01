const num = [1, 2, 3, 4, 5]
// question1 are they Positive? all of them?
// question2 are they Positive? just one of them?


//*********every*********** */
const allPositive = num.every((value) => {
    console.log(value);
    return value >= 0;
});
console.log(allPositive);
// 1
// 2
// 3
// 4
// 5
// true


const num2 = [1, 2, -3, 4, -5];
const allPositive2 = num2.every((value) => {
    console.log(value);
    return value >= 0;
});
console.log(allPositive2);
// 1
// 2
// -3
// false


//*********some*********** */
const atLeastOnePositive = num2.some((value) => {
    console.log(value);
    return value >= 0;
});
console.log(atLeastOnePositive);
// 1
// true


const num3 = [-1, 2, -3, 4, -5];
const atLeastOnePositive2 = num3.some((value) => {
    console.log(value);
    return value >= 0;
});
console.log(atLeastOnePositive2);
// -1
// 2
// true