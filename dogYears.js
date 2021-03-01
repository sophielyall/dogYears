//Your current age
const myAge = 29;
//first two human years
var earlyYears = 2;
//first two years in dog years
earlyYears *=10.5;

var laterYears = myAge -2;
//4 dogs years for each human year
laterYears *= 4;

//current age in dog years.
let myAgeInDogYears = earlyYears + laterYears;
console.log(earlyYears);
console.log(laterYears);

//my name in lower case
let myName = 'Sophie'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)