// 1. 1 to 50 digits print
for (let i = 1; i <= 50; i++) {
  console.log(i);
}

// 2. 33 to 1 print
for (let a = 33; a >= 1; a--) {
  console.log(a);
}

// 3. summation 1 to 45 even numbers
let b = 1;
let sum = 0;
while (b <= 45) {
  if (b % 2 === 0) {
    sum += b;
  }
  b++;
}
console.log(sum);

// 4. summation of 1 to 10 squre numbers
let c = 1;
let addition = 0;
while (c <= 10) {
  if (c % 2 !== 0) {
    addition += c * c;
  }
  c++;
}
console.log(addition);

// 5. 7 er namta
for (let d = 1; d <= 10; d++) {
  console.log(7 + " * " + d + " = " + d * 7);
}

// 6. digits of 139586883
let number = 139586883;
let strNumber = "" + number;
console.log(strNumber.length);
