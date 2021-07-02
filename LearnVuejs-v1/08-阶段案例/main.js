const app = new Vue({
    el: '#app',
    data:{
        books:[
            {id:1,
            name: '《算法导论》',
            date: '2006-9',
            price: 85.00,
            count: 1
            },
            {id:2,
            name: '《UNIX编程艺术》',
            date: '2006-2',
            price: 59.00,
            count: 1
            },
            {id:3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },            
            {id:4,
            name: '《代码大全》',
            date: '2005-9',
            price: 75.00,
            count: 1
            }
        ]
        },
    methods: {
        getFinalPrice(price)
        {
            return '￥' + price.toFixed(2)
        },
        increment(item){
            console.log('increase');
            item.count ++;
        },
        decrement(item){
            console.log('decrease');
            item.count --;
        },
        removeHandle(index){
            this.books.splice(index, 1)
        }
    },
    filters: {
        showPrice(price){
            return '￥' + price.toFixed(2)
        }
    },
    computed:{
        totalPrice(){
            // 1. 普通for循环
            let totalPrice = 0;
            // for (let i=0;i<this.books.length;i++){
            //     totalPrice += this.books[i].price * this.books[i].count
            // }
            // return totalPrice

            // 2. for(let i in this.books)
            // for (let i in this.books){
            //     totalPrice += this.books[i].price
            // }
            // return totalPrice

            // 3. for(let i of this.books)
            // for (let item of this.books){
            //     totalPrice += item.price
            // }
            // return totalPrice

            // 4. reduce
            return this.books.reduce(function(pre, book){
                return  pre + book.price * book.count
            },0)


        }
    }
})

// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
// filter/map/reduce
// filter中的回调函数有一个要求：必须返回一个boolean值
//true: 当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//false: 当返回false时，函数内部会过滤掉这次的n

const nums = [10,20,111,222,444,40,50]

let total = nums.filter(n => n < 100).map(n => n*2).reduce((previous, n) => previous+n);
// 1. filter函数的使用
// const newNums = nums.filter(function(n){
//     return n<100
// })
// console.log(newNums)

// 2. map函数的使用
// const newNums = nums.map(function(){
//     return n * 2
// })
// console.log(newNums)

// 3. reduce函数的使用
// const newNums = nums.reduce(function(preValue, n){
//     return preValue + n
// }, 0)