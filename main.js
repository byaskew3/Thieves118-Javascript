// Testing javascript link through web console
console.log('testing');

// Multi-line Comment
/*
this is 
a 
multiline
comment
*/

// Declaring a variable using var (the old way)
var num = 5;
console.log(num);

// Reassigning values
num = 3;
console.log(num);

// Use semicolons at the end of your JS code (Or not...)

// Use the typeof operator to see a data type
var int = 3
var float = 3.14
console.log(typeof int,typeof float) 

// strings in js
var first_name = 'christian'
console.log(first_name)

// Arrays AKA Python Lists
var students = ['gabe', 'sean', 'peace']
console.log(typeof students)

// Objects AKA Python Dicts
var bio = {
    'first name': 'dylan',
    age: 1000,
    location: 'USA'
}

// Hoisting
console.log(hoist)
var hoist = "I am hoisted"
console.log(hoist)

/* 
- NOTE: Instead of using VAR to define variables, use LET and CONST (Modern Way)
- Not only because of var hoisting behaviors can be tricky, but so you don't
accidentally re-declare a variable that already exists.
- LET and CONST are also variable declarations using the ES6 Syntax but do allow
for re-declaration.

- LET vs CONST
- let: allows for reassignment of values (Just like Python)
- const: does NOT allow for reassignment of values 
*/

// let
let last_name = 'askew'
console.log(last_name)
last_name = 'katina'
console.log(last_name)

// const
const full_name = 'christian askew'
console.log(full_name)

// ------------------------ Math Operations ----------------------------

// Addition
let sum = 5 + 5;
console.log(sum)

// Incrementing
sum+=3
console.log(sum)

// Increment by 1
sum++
console.log(sum)

// Subtraction
let diff = 12-3;
console.log(diff)

// Decrement by 1
diff--
console.log(diff)

// Decrementing
diff-=2
console.log(diff)

// Multiplication
let product = 5 * 2
console.log(product);

product *= 2
console.log(product)

// Division
let quotient = 20 / 4
console.log(quotient)

quotient /= 2
console.log(quotient);

// Exponents
let expo = 5**2;
console.log(expo);

expo **= 2;
console.log(expo)

// ---------- Math is a built-in for javascript ---------------

// Math.floor()
let floor = Math.floor(12.56)
console.log(floor)

// Math.ceil()
let ceil = Math.ceil(12.56)
console.log(ceil)

// Watch out for these behaviors when adding number and strings
let dylan_fav_num = 18
let will_fav_num = '12'
let result = dylan_fav_num + will_fav_num
console.log(typeof result, result)

// -------------- Javascript Functions ----------------------
// Function Declaration, Function Expression, Arrow Function (ES6)
// NOTE: Indentation does NOT matter in JS, but its good practice.
// We use curly braces to keep track of scope instead.

// Function Declaration
// Very similar to Python
function fullName(firstName, lastName){
    return firstName + ' ' + lastName
}
console.log(fullName('Sean', 'B.'))

// Function Expression
const nflTeam = function(city, name){
    return city + ' ' + name
}
console.log(nflTeam('seattle', 'seahawks'))

// Arrow Function (ES6)
const goatPlayer = (name) => {
    return `The goat will always be ${name}.`
}

console.log(goatPlayer('michael jordan'))
// -------------------- if, else if, else conditional statements -----------------------
// syntax: if (condition) { code block ran if true }

const checkWeather = (temp) => {
    if (temp < 60){
        return 'It is cold outside. #hoodieseason'
    } else if (temp < 90) {
        return 'It is a beautiful day!'
    } else {
        return 'It is hella hot! Avoid wearing black!'
    }
}

console.log(checkWeather(50))


// ------------------------- Ternary Operators -------------------------
// Python: (run_this_code_on_true) if (condition) else (run_this_code_on_false)
// JS: (Condition) ? (run_this_code_on_true) : (run_this_code_on_false)

const oddOrEven = (num) => (num % 2 == 0) ? 'Even' : 'Odd'

console.log(oddOrEven(11))


// ------------------------- JS Loops --------------------------------
// ----- For Loops -----
for(let i = 0; i < 10; i++){
    console.log(i)
}

// loop through an array
let students2 = ['caden', 'will', 'gabe']
for(let i = 0; i < students2.length; i++){
    console.log(students2[i])
}

// loop through an array with for-of loop (values) (ES6)
for(let name of students2){
    console.log(name)
}

// loop through an array with for-in loop (indices) (ES6)
for(let i in students2){
    console.log(parseInt(i))
}

// ----- While Loops -----
num = 0
while (num < 10){
    console.log(num)
    num+=2
}

// Do-While
// Syntax: do {code block} while (condition)
num = 15
do {
    console.log(num)
    num++
} while (num < 10)
// NOTE: It is guaranteed to run once

// -------------------- More JS Array Practice & Methods -----------------------
let artists = ['Kendrick Lamar', 'Bruno Mars', 'Chris Brown']

// index
console.log(artists[1])

// indexing from the end
console.log(artists[artists.length-1])

// object.toString() method returns a string representing the object
// NOTE: This is an object method, which means you can you use this on different data types
console.log(artists.toString())

// joining an array with a seperator
// syntax: array.join(seperator)
console.log(artists.join('$'))

// slice method (Out of place algo), does NOT effect the original Array
// syntax: array.slice(start, end)
console.log(artists.slice(0,2))
console.log(artists)


// splice method (in place algo), does effect the original Array
// syntax: array.splice(start, end)
console.log(artists.splice(3))
console.log(artists)