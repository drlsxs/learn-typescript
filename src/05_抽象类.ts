(function () {


  /**
   * 以abstract开头的类是抽象类
   * 抽象类与其他类差别不大，只是不能用来创建对象
   * 抽象类就是专门用来被继承的类
   */
  abstract class Animal {
    protected constructor(name: string) {
      this.name = name;
    }
    name: string;
    //定义一个抽象方法
    // 抽象方法使用abstract开头，没有方法体
    //抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写

    abstract sayHello(): void;

  }

  class Dog extends Animal {

    age: number;

    constructor(name: string, age: number) {
      super(name);
      this.age = age;
    }

    sayHello() {
      console.log("汪汪汪汪！");
    }
  }

  const dog = new Dog("旺财", 8);
  dog.sayHello();



})();
