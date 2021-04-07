//№1
//==================================================

// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2, );
// console.log(arr);

//№2
//==================================================

// var arr = [1, 2, 3, 4, 5];
// console.log(arr);
// var res = arr.join(' ');
// console.log(res);
// arr.unshift('hello');
// var spl = arr.slice(' ', 1);
// console.log(spl);
// arr.reverse();
// console.log(arr);


// let awr = 'morgenstern';
// var wins = awr.split('');
// console.log(wins);


//№3
//==================================================


// const wrr = ['GSPD', 'Lil Peep', 'linkin park', 'lil Fill', 'Garik'];
// const newWrr = [];
// for (let i = wrr.length - 1; i >= 0; i--) {
//     newWrr.push(wrr[i]);

// }
// console.log(wrr);
// console.log(newWrr);


//№4
//==================================================

var a1 = [1, 2, 3];
var a2 = [1, 2, 3];
console.log(a1 == a2);
console.log(JSON.stringify(a1) == JSON.stringify(a2));










//№5
//==================================================

//массив\\


// fizzBuzz(100)

// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzBuzz');
//         } else if (i % 3 === 0) {
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz();

//№6
//==================================================

// function createChess(a, b) {
//     var value1 = "# ";
//     var value2 = " #";
//     var odd = "";
//     var even = "";
//     for (var i = 0; i < a / 2; i += 1) {
//         odd += value2;
//         even += value1;
//     }

//     for (var j = 0; j < b; j += 1) {
//         if (j % 2 != 0) {
//             console.log(odd);
//         } else {
//             console.log(even);
//         }
//     }
// }

// createChess(8, 8);