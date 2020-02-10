/**
 * es6 class 写法就是 es5 构造函数的 语法糖
 * class 本质上还是 function (typeof 检查)
 */

// es6 class
class Test {
  constructor(name, age = 0) {
    console.log(this);
    this.name = `${name}`;
    this.age = age;
  }

  sayName() {
    console.log(`my class name is ${this.name}, my age is ${this.age}`);
  }
}


/**
 * 1. this的指向
 * 通过构造函数来实例化的对象中的this，指向这个实例化对象
 *  
 * 2. 构造函数（可以省略）作用
 * 重复的构建相同数据结构的对象，使用 对象字面量 会有大量重复的操作
 * 所以使用构造函数
 * 
 */

// function Test(name = 'gigi') {
//   this.name = name;
//   this.age = 18;
// }

// Test.prototype = {
//   sayName() {
//     console.log(this);
//     console.log(`my name is ${this.name}, my age is ${this.age}`);
//   }
// } 


export default Test;