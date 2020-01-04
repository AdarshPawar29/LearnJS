console.log('Hello World!');
console.error('This Is an eroor');
console.warn("Rhis is warning");
//https://developer.mozilla.org/en-US/docs/Web/API/console

// Variables 
// var , let , const
// var is for globle

// let, const 
let age = 20;
age = 19;
console.log(age);

const score = 20;
//score = 31; !!
console.error("Cant re assign the const variable");

let temp;
temp = 31;
console.log(temp);
//const age1; cant do that!!

// String, NUmbers, Boolean, Null, undefined 

const name = 'Adarsh Pawar';
const age2 = 30;
const isCool = true;
const rating = 2.5;
const x = null;
const y = undefined;
let z;
null == undefined; //true
null === undefined; //false
this == window; // true
this === window; //true


console.log(typeof name);
console.log(typeof x);
console.log(typeof age2);

//Concatenation 
console.log('My name is '+ name +' and Im ' + age);
console.log(`My name is ${name} and I am ${age}`);

//String Oprations

const s = 'Hello World!!';
console.log(s.length);
console.log(s.toLocaleUpperCase());

console.log(s.substring(0,5));
console.log(s.substring(0,5).toLocaleLowerCase());

console.log(s.split(''));

const tech = 'technology, computers, IT, code';
console.log(tech.split(', '));

let te = tech.split(', ');
console.log(te.length);

 // Array - variable that hold multipale values 

 const number = new Array(1,2,3,4,5,6);
 console.log(number);

const fruits = ['Apple', 'Orange', 30, true, 3.7];
fruits[4] = 'End'; 
fruits.push('Hello');
fruits.unshift('Banana'); //add element in the 1st position
fruits.pop(); 
console.log(fruits);
console.log(fruits[1]);

console.log(Array.isArray(fruits)); // to check whether its array or not
console.log(fruits.indexOf('Apple')); //find the possition of the elements


//Object litrals

const person = {
    firstName: 'Adarsh',
    lastName: 'Pawar',
    age: 30,
    hobbies: ['Music', 'Movies', 'Sport'],
    adrdess: {
        street: '211A Bakers street',
        city: 'Boston',
        state: 'MA'
    }
}
person.email = 'adarsh.pawar@bcone.com';
console.log(person);
console.log(person.firstName);
console.log(person.hobbies[1]);



//const {firstName, lastName} = person;
//console.log(firstName);

const {firstName, lastName, adrdess: {city}} = person;

console.log(city)


// Array todos 

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

//About JSON
const todosJSON = JSON.stringify(todos); // convert the object litraters into JSON format
console.log(todosJSON);

// for LOOOOOOOOP

for(let i=0; i<10; i++)
{
    console.log(`For loop is going on here ${i} time!`);
}

//While Loop

let i = 0;
while(i<10)
{
    console.log(`While loop is going on here ${i}time!`);
    i++;
}

// loop in array

for(let i=0; i<todos.length; i++)
{
    console.log(todos[i].text);
}

//better way 

for(let todo of todos)
{
    console.log(todo.id);
}

//forEach, map, filter

//forEach
todos.forEach(function(todo)
{
    console.log(todo.text);
});

//MAP
const todoText = todos.map(function(todo)
{
    return todo.isCompleted;
});
console.log(todoText);

//Filter
const todoCompleted = todos.filter(function(todo)
{
    return todo.isCompleted === true;
});
console.log(todoCompleted);

// const todoCompleted = todos.filter(function(todo)
// {
//     return todo.isCompleted == true;
// }).map(function(todo)
// {
//     return todo.text;
// });
// console.log(todoCompleted);


//conditionals

const zx = 10; //Assign 
if(zx === 10)
{
    console.log('zx is 10');
} 
else 
{
    console.log('zx is not 10');
}

//Iternally Opraters like short hand is statements

const q = 10;
const color1 = q > 10 ? 'Red' : 'Blue';
console.log(color1);

//switch
const x1 = 20;
const color = x1 > 10 ? 'Red' : 'Blue';

switch(color)
{
    case 'Red':
        console.log('Color is red');
        break;
    case 'Blue':
        console.log('color is not red or blue');
        break;
}

//funtions

function addNum(num1, num2)
{
    return num1+num2;
}
console.log(addNum(2,3));

//ES6 Function 
const addNums = (num1, num2) =>
{
    return num1+num2;
}
console.log(addNums(2,3));
 
//can be writern like that we dont need {} 
const multiNums = (num1, num2) => num1*num2;
console.log(multiNums(2,3));

let obj = {
    myVar: 'foo',
    myFunc: function(){
        console.log(window.myVar);
    }
}
obj.myFunc(); //foo
console.log(obj.myVar); //foo


//THIS 
function bike() {
    console.log(this.name);
  }
  
  var name = "Ninja";
  var obj1 = { name: "Pulsar", bike: bike };
  var obj2 = { name: "Gixxer", bike: bike };
  
  bike();           // "Ninja"
  obj1.bike();      // "Pulsar"
  obj2.bike();      // "Gixxer"

function bike() {
    var name = "Ninja";
    this.name = "NINJA";
    this.maker = "Kawasaki";
    console.log(this.name + " " + maker);  // undefined Bajaj
  }
  
  var name = "Pulsar";
  var maker = "Bajaj";
  
  obj = new bike();
  console.log(obj.maker);                  // "Kawasaki"

//Functions
//OOP in ES5
//Construct0r Function
function  Person(firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getFullName = function()
    {
        return `${this.firstName} ${this.lastName}`;
    }
    // this.getBirthYear = function()
    // {
    //     return this.dob.getFullYear();
    // }
}
//Prototypes 
Person.prototype.getBirthYear = function()
{
    return this.dob.getFullYear();
} 

// Intantiate object 
const person1 = new Person('Adarsh', 'Pawar', '06-08-1996');
const person2 = new Person('Wanda', 'Kaur', '02-01-1994');

console.log(person2);
console.log(person2.dob.getDate);
console.log(person1.getBirthYear());
console.log(person2.getFullName());

//OOPS in ES6
//syntex suger //orgnaized  
//Class
class Persons{
    constructor(firstName, lastName, dob)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);  
    }
    getBirthYear()
    {
        return this.dob.getFullYear();
    }
    getFullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person11 = new Persons('Adarsh', 'Pawar', '06-08-1996');
const person22 = new Persons('Wanda', 'Kaur', '02-01-1994');

console.log(person22);
console.log(person22.dob.getDate);
console.log(person11.getBirthYear());
console.log(person22.getFullName());




