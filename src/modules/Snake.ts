class Snake {
  //表示蛇的元素
  head: HTMLElement;
  //蛇的身体 （包括蛇头的）
  bodies: HTMLCollection;
  //获取蛇的容器
  element: HTMLElement;


  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake > div") as HTMLElement;
    this.bodies = document.getElementById("snake")!.getElementsByTagName("div");
  }

  //获取蛇的坐标
  get X() {
    return this.head.offsetLeft;
  }

  //蛇的Y坐标
  get Y() {
    return this.head.offsetTop;
  }

  set X(value: number) {
    this.head.style.left = value + "px";
  }

  set Y(value: number) {
    this.head.style.top = value + "px";
  }

  //蛇怎加身体的方法
  addBody() {
    //想element中添加div
    this.element.insertAdjacentHTML("beforeend","<div></div>")
  }
}

export default Snake;
