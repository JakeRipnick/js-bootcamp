const people = [{
  name: 'Jake',
  age: 26
}, {
  name: 'Bill',
  age: 22
}, {
  name: 'Jeremy',
  age: 30
}];

const under30 = people.filter((person) => person.age < 30);
console.log(under30)

const ageTwentyTwo = people.find((person) => person.age === 22);
console.log(ageTwentyTwo.name);