const parsone = {name: "Azizul Haque Sarker", age: 45, job:"Atel", gfName: "Madhuri", phone: 01711308257, friend:["rubel", "Vabon", "Parth Pal", "Ali Akkas"], addars: "Mazikara"}

const {gfName, phone, friend} = parsone;

// const gfName = parsone.gfName;
// const  phone = parsone.phone;
const friends = ["Shakib Khan", "Arman Khan", "Amir Khan", "Salman Khan", "Sharukh Khan"];
const [cotoFriend, nextFriend, ...rest] = friends;
console.log(cotoFriend, nextFriend);
console.log(rest);
