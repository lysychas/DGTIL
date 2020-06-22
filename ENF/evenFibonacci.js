function evenFibSum(limit) {
  if (limit < 2) return 0;

  let num1 = 0;
  let num2 = 2;

  let sum = num1 + num2;

  while (num2 <= limit) {
    let num3 = 4 * num2 + num1;
    if (num3 > limit) break;
    num1 = num2;
    num2 = num3;
    sum += num2;
  }

  return sum;
}

console.log(evenFibSum(4000000));
