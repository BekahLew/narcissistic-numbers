const narcissistic = (value) => {
    let arrayOfDigits = value.toString().split("");
    console.log(arrayOfDigits);
    let numberOfDigits = arrayOfDigits.length;
  
    arrayOfDigits.forEach((entry) =>
      arrayOfDigits.push(Math.pow(parseInt(entry), numberOfDigits))
    );
    arrayOfDigits.splice(0, numberOfDigits);
    return arrayOfDigits.reduce((a, b) => a + b, 0) === value ? true : false;
  };
  
  console.log(narcissistic(371));

  module.exports = narcissistic;