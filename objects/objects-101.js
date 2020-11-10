let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: '326',
};

console.log(myBook);

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

//Challenge area

// Name, Age, Location

// Jake is 26 and lives in New Jersey.
//Increase age by 1 and print message again

let person = {
  name: 'Jake',
  age: 26,
  location: 'New Jersey',
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

person.age = person.age + 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
