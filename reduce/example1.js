/*
const users = [
    {id:1, role: "admin", name:"vamsi"},
    {id:2, role: "user", name:"karthik"},
    {id:3, role: "admin", name:"Rahul"},
    {id:4, role: "user", name:"Amit"},
]

output: {
    admin:[
        {id:1, role: "admin", name:"vamsi"},
        {id:3, role: "admin", name:"Rahul"},
    ],
    user:[
        {id:2, role: "user", name:"karthik"},
        {id:4, role: "user", name:"Amit"}
    ]
}

groupBy(users,'role')
*/

function groupBy(users, role) {
  const usersByRole = users.reduce((grp, user) => {
    const key = user.role;
    if (!grp[key]) {
      grp[key] = [];
    }
    grp[key].push(user);
    return grp;
  }, {});

  return usersByRole;
}

const users = [
  { id: 1, role: "admin", name: "vamsi" },
  { id: 2, role: "user", name: "karthik" },
  { id: 3, role: "admin", name: "Rahul" },
  { id: 4, role: "user", name: "Amit" },
];

console.log(groupBy(users));
