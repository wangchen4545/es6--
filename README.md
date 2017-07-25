es6学习

### 定义类
#### class
### 构造方法
#### constructor()
### 新建父类的this对象
#### super()
### 静态函数
#### static
```
class fullPage(){
  constructor{
    this.x=1;
    this.y=2;
  }
}
class init extends fullPage(){
  constructor{
    super();

  }
  const add=()=>{
    //子类的方法
    return this.x+this.y * fn()
  }
  //静态函数
  static fn(){
    return 3
  }
}

```
