// import getType from "./getType";
console.log("----------main.js----------");
// console.log(`getType(null) : ${getType(null)}`);
// console.log(`getType({}}) : ${getType({})}`);
// console.log(`getType([]) : ${getType([])}`);

// 산술연산자(arithmetic operator)
console.log('산술연산자(arithmetic operator)')
console.log(`1 + 2 = ${1 + 2}`)
console.log(`5 - 7 = ${5 - 7}`)
console.log(`3 * 4 = ${3 * 4}`)
console.log(`10 / 2 = ${10 / 2}`)
console.log(`11 % 4 = ${11 % 4}`)

// 할당연산자(assignment operator)
console.log('할당연산자(assignment operator)')
let assignment = 2
assignment+=3
console.log(assignment)

// 비교연산자(comparison operator)
console.log('비교연산자(comparison operator)')
const x = 1
const y = null
const z = true
// function isEqual(x,y){
//   return x === y 
// }

// console.log(isEqual(x,z))
// console.log(isEqual(2,'2'))

console.log(x !== y)
console.log(x > y)

// 논리 연산자(logical operator)
console.log('논리 연산자(logical operator)')
const a = 1 === 1 //true
const b = '1' === 1
const c = true

console.log(a)
console.log(b)
console.log(c)

//a, b, c 가 전부 true일 경우 => true
console.log('&&: ', a && b && c)
console.log('||', a || b || c)
console.log('!: ',!a) // 부정연산자, not 연산자