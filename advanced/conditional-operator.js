const userAge = 15;
let message;

message = userAge >= 18 ? 'You can vote!' : 'You cannot vote.';

// if (userAge >= 18) {
//   message = 'You can vote!'
// } else { 'You cannot vote!' };


const myAge = 20;
const showPage = () => {
  console.log('Showing the page');
};
const showErrorPage = () => {
  console.log('Showing the error page');
};

myAge >= 21 ? showPage() : showErrorPage();

const team = ['Jake', 'John', 'Jim', 'Jimbo',];

team.length <= 4 ? console.log(`Team size: ${team.length}`) : console.log('Too many people on your team');