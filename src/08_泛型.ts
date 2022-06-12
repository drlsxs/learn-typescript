(function () {



}());

/*
* 在定义函数或者类，如果遇到类型不明确，可以使用泛型
* */

function fn<T>(a: T): T {
  return a;

}

//可以调用具有泛型的函数
fn(10);  //不指定类型，TS自动判断
fn<string>("hello");

