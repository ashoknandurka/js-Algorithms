const p1 = Promise.reject("Fail 1");
const p2 = new Promise((resolve) => setTimeout(() => resolve("success"), 1000));
const p3 = Promise.reject("Fail 2");

Promise.any([p1, p2, p3])
  .then((result) => console.log(result)) // success
  .catch((err) => console.log(err));

// succes seeking
// wait for first settled success
// when all fails then return Aggregate error ([AggregateError: All promises were rejected])
