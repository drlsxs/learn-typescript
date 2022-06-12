(function () {

  //描述一个对象的类型
  type myType = {
    name: string;
    age: number

  };


  interface myface {
    name: string;
    age: number;
  }





  const myobj: myface  ={
    name: "sss",
    age: 20,
  }


  interface myInter {
    name: string;

    sayHello(): void;
  }

  class MyClass implements myInter {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(): void {
    }

  }


})();
