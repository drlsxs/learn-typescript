class Person {

  //实例属性，只有new出来过后才能访问
  readonly name: string = "孙悟空";
  age: number = 18;

  //定义类属性，静态属性
  static readonly sex: string = "男";

  //定义方法
  sayHello() {
    console.log("Hello 大家好");
  }

  static sayHello2() {
    console.log("类方法");
  }


}

const person = new Person();

// console.log(person.name);

// person.name = "liumeixi";
// console.log(person.name);
// console.log(Person.sex);

person.sayHello();
Person.sayHello2();


class Dog {
  age: number;
  name: string;

  constructor(name: string, age: number) {
    console.log("构造函数执行了~");
    //在构造函数中当前对象就是新建的对象
    this.name = name;
    this.age = age;

  }
  break() {
    alert("汪汪汪");
  }
}


const dog = new Dog("孙悟空", 18);
const dog2 = new Dog("liumeixi", 20);

console.log(dog);
console.log(dog2);

