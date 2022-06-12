import {h1} from "./m1";


function sum(a: number, b: number) {
  return a + b;
}

const obj = {
  name: "孙悟空",
  age: 33,

};

console.log(obj);
obj.age = 18;
console.log(obj);

console.log(sum(123, 456));
console.log(h1);

