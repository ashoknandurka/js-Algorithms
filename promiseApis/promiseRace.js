const fast = new Promise((resolve) => setTimeout(() => resolve("fast"), 500));
const tooFast = new Promise((resolve, reject) =>
  setTimeout(() => reject("too fast"), 200)
);
const slow = new Promise((resolve) => setTimeout(() => resolve("slow"), 2000));

Promise.race([tooFast, fast, slow]) // too fast
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// return result of first settled promise
// Use case: timeout logic.
