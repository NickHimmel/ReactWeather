// // callback function
//
// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });
//
// // let callback = function (err, temp) {
//   //   if (err) {
//   //     console.log('error', err);
//   //   } else {
//   //     console.log('success', temp)
//   //   }
//
//   // callback(undefined, 78);
//   // callback('City not found');
//
//   //promises
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// })
// if (typeof 7 === 'number') {
//
// }

function addPromise (x, y) {
  return new Promise(function (resolve, reject) {
    if (typeof x === 'number' && typeof y == 'number') {
      resolve(x + y);
    } else {
      reject('X & Y need to be numbers');
    }
  });
}

addPromise(3, 5).then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise error', err);
})

addPromise("a", 5).then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise error', err);
})
