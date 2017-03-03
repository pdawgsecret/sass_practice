function StairCase(n) {
  var stairCase = ""
  for (var i = 0; i < n; i++) {
    var j = n - i - 1;
    while (j > 0) {
      stairCase = stairCase.concat(" ")
      j--
    }
    for (var k = 0; k < i + 1; k++) {
      stairCase = stairCase.concat("#")
    }
    stairCase = stairCase.concat("\n")
  }
  console.log(stairCase);
  return stairCase;
}

stairCaseMaker(6);

array = [1, 2, 3, 4, 5];

function summation(numbers) {
  sum = 0;
  for (var i = 1; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  return sum;
}

summation(array);
