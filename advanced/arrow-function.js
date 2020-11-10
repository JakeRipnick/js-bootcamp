const square = (num) => num * num
console.log(square(5))

const squareLong = (num) => {
  return num * num
}

let result = squareLong(25)
console.log(result)

const people = [{
  name: 'Jake',
  age: 26
}, {
  name: 'Vikram',
  age: 31
}, {
  name: 'Jess',
  age: 22
}]

//const under30 = people.filter(function (person) {
//   return person.age < 30
// })

// const under30 = people.filter((person) => person.age < 30)
// console.log(under30)

const person = people.find((person) => (person.age === 22))
console.log(person.name)