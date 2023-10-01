//задание 1
let user = {
    name: 'John',
    surname: 'Smith',
}
alert(user);

user.name = "Pete";
alert(user.name);

delete user.name;
//задание 2
let schedule = {};
function isEmpty(obj){
    for (let key in obj){
    return false;
    }
    return true;
}
console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));
//задание 3
const user1 = {
    name:"John",
};
user1.name = "Pete";
console.log(user1.name)

//задание 4
let salaries = {
    John:100,
    Ann:160,
    Pete:130,
}

let sum = 0;
for (let key in salaries){
    sum += salaries[key]
}
console.log(sum)

//задание 5
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
  };
  
  function multiplyNumeric(obj){
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }

  multiplyNumeric(menu);
  console.log(menu)