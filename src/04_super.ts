(function () {


  class Animal {
    constructor(name: string) {
      this.name = name;
    }
    name: string;

    sayHello() {
      console.log("动物再叫");


    }

  }

  class Dog extends Animal {

    age: number;

    constructor(name: string, age: number) {
      super(name);
      this.age = age;
    }

    sayHello() {
      super.sayHello();
    }
  }

  const dog = new Dog("旺财", 8);
  dog.sayHello();



})();
