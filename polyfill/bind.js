let person = {
  firstname: "Ashok",
  lastname: "Nandurka",
};

let printName = function (city, state, country) {
  console.log(
    this.firstname,
    " ",
    this.lastname,
    " ->",
    city,
    " ->",
    state,
    "->",
    country
  );
};

let printMyName = printName.bind(person, "Hyderabad", "Telangana");
printMyName("india");

Function.prototype.mybind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(person, "Hyderabad", "Telangana");
printMyName2("india");
