//定义食物类Food
class Food{
  //定义一个属性表示食物所对应的元素
  element: HTMLElement;

  constructor() {
    //获取页面中的food元素，并赋值给element
    this.element = document.getElementById("food")!;


  }

  //定义一个获取食物X轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  //修改食物的位置
  change() {
    //生产一个随机的位置
    //食物位置最小是0，最大是290，
    //蛇移动一次就是一格，一歌的大小是10，所以要求食物的位置被10整除
    let left = Math.round(Math.random() * 29) * 10;
    let top = Math.round(Math.random() * 29) * 10;

    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }

}

export default Food;
