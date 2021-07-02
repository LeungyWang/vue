// 1. 导入对象中定义的变量
import {flag,sum} from "./a.js"
if (flag){
  console.log('hhh')
}
console.log(sum(10,20))

// 2. 直接导入export定义的变量
import {num1, height} from './a.js';

console.log(num1);
console.log(height);

// 3. 导入export的function/类
import {mul} from './a.js'

console.log(mul(30,50))

// 4. 导入export default中的内容
import { Person } from "./a.js";

const person = new Person()
person.run()

import addr from "./a.js"

console.log(addr('hi'))

// 5. 统一全部导入
import * as aaa from './a.js';
console.log(aaa.flag)
console.log(aaa.height)