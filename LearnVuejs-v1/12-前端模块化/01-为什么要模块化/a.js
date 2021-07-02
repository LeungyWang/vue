// var name = "小明"
// var age = 22

// function sum(num1, num2){
//   return num1 + num2
// }

// var flag = true

// if(flag){
//   console.log(sum(10, 20))
// }

// 匿名函数闭包
var moudleA = (function(){

    // 导出的对象
    var obj = {}

    var name = "小明"
    var age = 22

    function sum(num1, num2){
        return num1 + num2
    }

    var flag = true

    if(flag){
        console.log(sum(10, 20))
    }

    obj.sum = sum
    obj.flag = flag
    return obj
})()