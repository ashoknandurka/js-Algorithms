function reverseNumber(num) {
  let reverse = 0;
  while (num) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reverse;
}

console.log(reverseNumber(123));
