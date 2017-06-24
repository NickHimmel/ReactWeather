var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
//   //multi line
// })
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Nick'))

// var person = {
//   name: 'Nick',
//   greet: function () {
//     names.forEach(function (name) {
//       console.log(this.name + ' says hi' + name)
//     });
//   }
// }

var person = {
  name: 'Nick',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    });
  }
}
person.greet()

//Challenge Area
function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
};

var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));
console.log(addStatement(191, 0));
