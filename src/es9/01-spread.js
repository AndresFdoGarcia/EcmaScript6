const user = {username:'Andres',age:32,country:'COL'};
const{username,...values}= user;
console.log(username);
console.log(values);