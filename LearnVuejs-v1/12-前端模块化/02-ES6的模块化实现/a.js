var name = '小明'
var age = 18
var flag = true

function sum(num1, num2){
    return num1 + num2
}

if (flag){
    sum(20,30)
}

// 1. 导出方式一
export {
  flag, sum
}

// 2. 导出方式二
export var num1 = 1000;
export var height = 1.99

// 3. 导出函数/类
export function mul(num1, num2){
    return num1 + num2
}

// 4
export class Person{
  run(){
    console.log('running')
  }
}

// 5. export defult
// const address = "北京市"
// export default address

export default function(argument){
  console.log(argument)
}
