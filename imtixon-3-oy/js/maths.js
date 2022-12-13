// // math-1
function returnArray(numbersTwo) {
  let returnArrayTwo = [];
  let arr = 0;
  let arr2 = 0;
  for (let i = 0; i < numbersTwo.length; i++) {
    if (numbersTwo[i] > 0) {
      returnArrayTwo.push(numbersTwo[i]);
    } else {
      arr = numbersTwo[i];
    }
  }
  for (let i = 0; i < numbersTwo.length; i++) {
    if (numbersTwo[i] < 0) {
      returnArrayTwo.push(numbersTwo[i]);
    } else {
      arr2 = numbersTwo[i];
    }
  }
  return [arr, arr2];
}
let sumResult = returnArray([1, 2, 3, 4, 5, -2, 23, -1, -13, 10, 52]);
console.log(sumResult);
// // // math-2
function allArray() {
  let returnNum = [-1, -2, -3, 55, -545, 5, 6, 1, -5];
  let falseArray = [];
  returnNum.forEach(function (item) {
    if (item < 0) {
      falseArray.push(item);
    }
  });
  console.log(falseArray);
}
allArray();
// // math-3
function palindrome(num) {
  let numToStringArray = num.toString().split("");
  let reversedArray = num.toString().split("").reverse();

  if (num.toString().length < 2) {
    return "It's a palindrome";
  } else {
    for (let i = 0; i < numToStringArray.length; i++) {
      if (numToStringArray[i] !== reversedArray[i]) {
        return "It's not a palindrome";
      } else {
        return "It's a palindrome";
      }
    }
  }
}
console.log(palindrome(121));

// // math-4
function arabicYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    alert(year + " Bu kabisa yili");
  } else {
    alert(year + " Bu kabisa yili emas");
  }
}

const year = prompt("Enter a kabisa year:");

arabicYear(year);
