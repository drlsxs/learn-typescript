import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

//核心类，核心的控制器，控制其他的所有类
class GameControl {

  //定义三个属性
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  //创建一个属性来存储蛇的移动方法（也就是按键的方法）
  direction: string = "Right";

  //创建一个属性来记录游戏是否结束
  isLive: boolean = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }

  //游戏的初始化方法，调用后游戏即将开始
  init() {
    //绑定键盘按下的事件
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    //调用run方法使蛇移动起来
    this.run();



  }

  /**
   *
   * @param event
   */

  //创建一个键盘按下的相应函数
  keydownHandler(event: KeyboardEvent) {
    //修改direction的属性
    this.direction = event.key;
  }


  //创建一个控制蛇移动的方法
  run() {
    /**
     * 根据方向（this.direction）来设置蛇的方法
     */
      //获取蛇现在的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;

    //根据按键的方向来修改X,Y值
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }

    //修改蛇的X值和Y值
    this.snake.X = X;
    this.snake.Y = Y;

    //开启一个定时调用
    setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);


  }






}

export default GameControl;
