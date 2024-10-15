const person={
    name:"XYZ",
    age:20,
}
//const newPerson=person;
const newPerson={...person};
const newPerson1={...person,city:"GZB"};
const newPerson2={...person,name:"ABC"};
newPerson.age=35;
// console.log(person);
// console.log(newPerson);
// console.log(newPerson1);
// console.log(newPerson2);
const emp=["DEF",45,100023.50];
console.log(emp);
const emp1=[...emp];
console.log(emp1);
const emp2=[...emp,"KAN"];
console.log(emp2);