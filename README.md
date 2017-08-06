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

### map数据结构
#### add("1").add("2")可以链式添加
#### delete 删除数据
#### clear 清除数据
#### has 检测是存在，返回布尔值
#### keys 返回键名的遍历器
#### value 返回键值的遍历器
#### entries 返回键值对的遍历器
#### forEach 接受三个参数 value key map，其实map就是本身
#### 详见map数据结构文件夹

### iterator接口
#### Symbol.iterator接口
```
const arr=[1,2,3];
console.log(arr[Symbol.iterator]);
console.log(arr[Symbol.iterator].next);

```
#### 同理 new Set() \ new Map() 都可以使用 Symbol.iterator接口

### 使用展开运算符去重
```
const arr=[0,0,2,,1,3,3];

//先去使用new Set()去重
//在使用展开运算符 ...
console.log([...new Set(arr)]);

```
### for of 循环
```
const arr=[0,0,0,0,0];

for(let i of ){
  console.log(i)
}

const map=new Map([["a",1]]);
map.set("b",2);

for(let [key,val] of map){

  console.log(key,val);

}
for(let i of map){
  
  console.log(i);

}

```
