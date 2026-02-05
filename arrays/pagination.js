/*WAP which will take page and record per page
input page 1 record per page 5
output [1,2,3,4,5]
input page 2 record per page 5
output [6,7,8,9,10]
*/

function Pagination(page, noOfRecords) {
  if (typeof page !== "number" || typeof noOfRecords !== "number") {
    throw new Error("Inputs must be numbers");
  }
  if (page < 0 || noOfRecords < 0) {
    throw new Error("Values must be greater than 0");
  }
  let start = (page - 1) * noOfRecords + 1;
  let end = start + noOfRecords;
  let result = [];

  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

console.log(Pagination(2, 5));
