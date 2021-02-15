const narcissistic = (value) => {
    let arrayOfDigits = value.toString().split("");
    let numberOfDigits = arrayOfDigits.length;
  
    arrayOfDigits.forEach((entry) =>
      arrayOfDigits.push(Math.pow(parseInt(entry), numberOfDigits))
    );
    arrayOfDigits.splice(0, numberOfDigits);
    return arrayOfDigits.reduce((a, b) => a + b, 0) === value ? true : false;
  };
  
  console.log(narcissistic(333));