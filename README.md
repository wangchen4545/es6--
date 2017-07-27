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
### set数据结构
#### add("1").add("2")可以链式添加
#### delete 删除数据
#### clear 清除数据
#### has 检测是存在，返回布尔值
#### keys 返回键名的遍历器
#### value 返回键值的遍历器
#### entries 返回键值对的遍历器
#### forEach 接受三个参数 value key set，其实set就是本身
#### 详见set数据结构文件夹
