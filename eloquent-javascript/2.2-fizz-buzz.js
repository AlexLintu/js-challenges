// Version 1
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('FizzBuzz');
  }
  else if (num % 3 === 0) {
    console.log('Fizz');
  }
  else if (num % 5 === 0) {
    console.log('Buzz');
  }
  else {
    console.log(num);
  }
}

// Version 2
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}
