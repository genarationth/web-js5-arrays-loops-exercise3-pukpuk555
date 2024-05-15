// ex3

// const pyramid = () => {
//   for (let i = 0; i < 5; i++) {
//     let star = "";
//     for (let j = 0; j <= i; j++) {
//       star += "*";
//     }
//     console.log(star);
//   }
// };

// pyramid();

// ex4
// 1

// let xValue = 5;

// while (xValue !== 0) {
//   console.log(xValue);
//   xValue -= 0.5;
// }

// 2

// let i = 1;
// while (i <= 100) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

// 3
// let n = 9;

// let i = 1;
// while (i <= n) {
//   if (i === n) {
//     console.log(`[${i}]`);
//   } else {
//     console.log(`[${i}]`);
//   }
//   i++;
// }

// 4

const sumAll = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
};

n = 9;

console.log(`n = ${n} sum = ${sumAll(n)}`);
