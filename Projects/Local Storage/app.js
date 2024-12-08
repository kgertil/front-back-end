
localStorage.setItem("name", "Jazmine");
localStorage.setItem("age", 30);
localStorage.setItem("address", "Massachusets");

let name = localStorage.getItem("name");
let age = localStorage.getItem("age");
let address = localStorage.getItem("address");

console.log(name, age, address );

localStorage.setItem("age", 25);
age =localStorage.getItem("age");

console.log(name, age, address );

localStorage.removeItem("address");
address =localStorage.getItem("address");

console.log(name, age, address );

localStorage.clear();






/*
-set 3 variables in localstorage: name, age, address
-get them, ouput the variables you got
-then update the age variable and retrieve them once again to see the updated version

-then delete the address variable only
-set an interval and clear everything
*/

