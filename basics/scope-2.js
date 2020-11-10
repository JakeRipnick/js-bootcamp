//Global (name)
//... Local (name)
//..... Local
//... Local
let name = 'Jake';

if (true) {
  let name = 'Mike';
  if (true) {
    name = 'Jen';
    console.log(name);
  }
}

if (true) {
  console.log(name);
}
