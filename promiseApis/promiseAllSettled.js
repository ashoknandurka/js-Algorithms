const p1 = Promise.resolve(10);
const p2 = Promise.reject("Error");

Promise.allSettled([p1, p2]).then((results) => console.log(results));

/* 
[
  { status: 'fulfilled', value: 10 },
  { status: 'rejected', reason: 'Error' }
]
*/

// waite for all promises to settled
// Use case: show partial results.
