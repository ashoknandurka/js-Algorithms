const fast = new Promise((res) => setTimeout(() => res("fast"), 500));
const tooFast = new Promise((res, reject) =>
  setTimeout(() => reject("too fast"), 200)
);
const slow = new Promise((res) => setTimeout(() => res("slow"), 2000));

Promise.race([tooFast, fast, slow])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// return result of first settled promise
// Use case: timeout logic.
