const p1 = Promise.resolve(1);
const p2 = new Promise((res) => setTimeout(() => res(2), 1000));
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.log(err));

// All or None
// fail fast
// used to call multiple api or promises Parallely
// As soon as any of promises rejected then promise.all will through an error
// Promise.all throughs same error fo rejected promise error as its result or error

//Use case: multiple API calls, need all results.
