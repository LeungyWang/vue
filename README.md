# vue
code recorded in the process of learning vue

## 1-vue初体验

程序位置:E:\Vue\LearnVuejs01\01-Vue初体验\01-HelloVuejs.html

+ 代码创建了一个Vue对象
+ 创建Vue对象的时候，传入了一些options:{}
  - {}中包含了el属性：该属性决定了这个Vue对象挂载到哪一个元素上
  - {}中包含了data属性，改属性中通常会存储一些数据
    * 这些数据可以是我们直接定义出来的。
    * 也可能是来自网络，服务器加载的。
+ 浏览器执行代码的流程：
  - 执行HTML
  - 创建Vue实例后，对原HTML内容进行解析和修改

## 2-vue中的mvvm

### 2.1 mvvm定义

MVVM(Model-view-viewmodel)是一种软件架构模式，MVVM有助于将图形用户界面的开发与业务逻辑或后端逻辑(数据模型)的开发分离开来。

### 2.2 mvvm模式的组成部分

![MVVMPattern.png](https://upload.wikimedia.org/wikipedia/commons/8/87/MVVMPattern.png)

#### 2.2.1 Model

模型是指代表真实状态内容的领域模型(面向对象)，或指代表内容的数据访问层(以数据为中心)

#### 2.2.2 视图

视图是用户在屏幕上看到的结构，布局和外观（UI）

#### 2.2.3 视图模型

视图模型是暴露公共属性和命令的视图的抽象 。

#### 2.2.4 绑定器

声明性数据和命令绑定隐含在MVVM模式中。

## 3-创建vue实例传入的options

### 3.1 options

- el：
  - 类型：string|HTMLElement
  - 作用：决定之后VUE实例会管理哪一个DOM

- data:
  - 类型：Object|Function（组件当中data必须是一个函数）
  - 作用：Vue实例对应的数据对象

- methods:

  - 类型：{{key:string}:Function}
  - 作用：定义属于Vue的一些方法，可以在其他地方调用，也可以在指令中调用

## 4-vue的生命周期

#### 4. 1 生命周期图示

![The Vue Instance Lifecycle](https://vuejs.org/images/lifecycle.png)

## 5-vue基础语法

### 5.1 v-once

* 该指令后面不要跟任何表达式(比如之前的v-for后面是跟表达式的)
* 该指令表示元素和组件（组件后面才会学习）只渲染一次，不会随着数据的改变而改变

### 5.2 v-html

某些情况下，我们从服务器请求到的数据本身就是一个HTML代码

* 如果直接通过{{}}来输出，会将HTML代码一起输出
* 因此需要对HTML格式进行解析，并且显示出对应的内容

对HTML格式内容的解析

* 可以使用v-html指令
  * 该指令后面往往会跟上一个string类型
  * 会将string的html解析出来并且进行渲染

### 5.3 v-text

* v-text作用和Mustache比较相似：都是用于将数据显示在界面中
* v-text通常情况下，接受一个string类型

### 5.4 v-pre

* v-pre用于跳过这个元素和它子元素的编译过程，用于显示原本的Mustache语法

### 5.5 v-cloak

* 在某些情况下，浏览器可能会直接显示出未编译的Mustache标签

## 6-v-bind

除了内容需要动态来决定之外，某些属性也希望动态来绑定，比如：

* 动态绑定a元素的hred属性
* 动态绑定img元素的src属性

这个时候需要使用v-bind指令：

* 作用：动态绑定属性
* 缩写/语法糖：:
* 预期：any(with argument) | Object (without argument)
* 参数：attrOrProp(optional)

### 6.1 v-bind绑定class

绑定class有两种方法

* 对象语法
* 数组语法

对象语法有以下这些用法：

* 用法一：直接通过{}绑定一个类

  ```html
  <h2 :class={'active':isActive} >Hello World</h2>
  ```

* 用法二：也可以通过判断，传入多个值

  ```html
  <h2 :class={'active':isActive, isLine: isLine} >Hello World</h2>
  ```

* 用法三：和普通的类同时存在，并不冲突

  ```vue
  <h2 class="Title" :class={'active':isActive, isLine: isLine} >Hello World</h2>
  ```

* 用法四：如果过于复杂，可以放在一个methods或者computed中

### 6.2 v-bind绑定style

* 绑定方式一：对象语法

  ```html
  :style="{fontSize: finalSize + 'px', color: finalColor}"
  ```

  style后面跟的是一个对象类型

  * 对象的key是CSS属性名称
  * 对象的value是具体赋的值，值可以来自于data中的属性

* 绑定方式二：数组语法

  ```html
  <div v-bind:style:="[baseStyles, overridingStyles]"></div>
  ```

  * style后面跟的是一个数组类型
    * 多个值以，分割

## 7-计算属性

* 在模板中可以直接通过插值语法显示一些data中的数据
* 在某些情况下，我们可能需要对数据进行一些转化后再显示，或者需要将多个数据结合起来进行显示
  * 比如我们有firstName和lastName两个变量，我们需要完整的名称
  * 但是如果多个地方都需要显示完整的名称，我们就需要写多个{{firstName}} {{lastName}}

* 可以将上面的代码换成计算属性：
  * 计算属性是写在实例的computed选项中的。

### 7.1 计算属性的setter和getter

* 每个计算属性都包含一个getter和一个setter

### 7.2 计算属性的缓存

>  methods和computed看起来都可以实现我们的功能，那么为什么还要多一个计算属性呢？

原因：计算属性会进行缓存，如果多次使用，计算属性只会调用一次

## 8-let/var

事实上var的设计可以看成JavaScript语言设计上的错误。但是这种错误多半不能修复和移除，因为需要向后兼容。

* 大概十年前，Brendan Eich就决定修复这个问题，于是他添加了一个新的关键字：let
* 可以将let看成更完美的var

### 8.1 块级作用域

* JS中使用var来声明一个变量时，变量的作用域主要是和函数的定义有关
* 针对于其他块定义来说是没有区块域的，比如if/for等，在开发中往往会引起一些问题

## 9-v-on

### 9.1 v-on介绍

* 作用：绑定事件监听
* 缩写：@
* 预期：Function|Inline Statement|Object
* 参数：event

### 9.2 v-on参数

当通过methods中定义方法，以供@click调用时，需要注意参数问题：

* 情况一：如果该方法不需要额外参数，那么方法后的()可以不添加
* 情况二：如果需要同时传入某个参数，并且需要event时，可以通过$event传入事件

### 9.3 v-on修饰符

在某些情况下，我们拿到event的目的可能是进行一些事件处理  

vue提供了修饰符来帮助我们方便的处理一些事件：

* .stop - 调用event.stopPropagation()
* .prevent- 调用event.preventDefault()
* .{keyCode|keyAlias}-只当事件是从特定键触发时才触发回调
* .native-监听组件根元素的原生事件
* .once-只触发一次回调

## 10-案例小问题

![image-20210127154327509](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210127154327509.png)

小问题：

* 在有输入内容的情况下，切换了类型，会发现文字依然显示之前的输入的内容
* 但是，实质上我们应该切换到另外一个input元素中
* 在另外一个input元素中，并没有输入内容
* 为什么会出现这个问题呢？

问题解答：

* 这是因为vue在进行DOM渲染时，出于性能考虑会尽可能的复用之前已经存在的 元素，而不是重新创建新的元素
* 在上面的案例中，vue内部会发现原来的input元素不再使用，直接作为else的input来使用了

解决方案：

* 如果不希望vue出现类似重复作用的问题，可以给对应的input添加key
* 并且需要保证key的不同

## 11-v-show

* v-show的用法和v-if用法非常相似，也用于决定一个元素是否渲染

### 11.1 v-show和v-if对比

* v-if当条件为false时，压根不会有对应的元素在DOM中
* v-show当条件为false时，仅仅是将 元素的display属性设置为none而已。

### 11.2 开发中的选择

* 当需要在显示与隐藏之间切片很频繁时，使用v-show
* 当只有一次切换时，通过使用v-if

## 12-v-for

### 12.1 v-for遍历数组

* 当有一组数据需要进行渲染时，可以使用v-for来完成
  * v-for的语法类似于JavaScrip中的for循环
  * 格式如下：item in items的形式

#### 12.1.1 简单案例

* 在遍历中不需要索引值
  * v-for="movie in movies"
  * 依次从movies中取出movie，并且在元素中的内容中，可以使用Mustache语法，来使用movie

* 在遍历中需要拿到元素在数组中的索引值
  * 语法格式：v-for=(item, index) in items
  * 其中的index就代表了取出的item在原数组中的索引值

### 12.2 v-for遍历对象

* v-for可以遍历对象
  * 格式如下：v-for="(value, key, index) in info"

### 12.3 组件的key属性

vue官方推荐在使用v-for时，给对应的元素或组件添加：key属性

#### 12.3.1 使用key属性的原因

* 与Vue的虚拟DOM的Diff算法有关系
* React's diff algorithm

![React - поглянемо по іншому на V в MVC](https://image.slidesharecdn.com/react-150227093830-conversion-gate02/95/react-v-mvc-6-638.jpg?cb=1425029996)

![Web Performance Calendar » React&#39;s diff algorithm](https://calendar.perfplanet.com/wp-content/uploads/2013/12/vjeux/2.png)

* 当某一层又很多相同的节点时，也就是列表节点，我们希望插入一个新的节点：

  * 希望在B和C之间加一个F，Diff算法默认执行：把C更新成F，D更新成C，E更新成D，最后再插入E

* 因此 需要使用key来给每一个节点做一个唯一标识

  * Diff算法就可以正确的识别此节点
  * 找到正确的位置区插入新的节点

* 总的来说就是key可以高效的更新虚拟DOM

  ![image-20210625153246026](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210625153246026.png)

## 13-表单绑定v-model

表单控件在实际开发中是非常非常常见的，特别是对于用户信息的提交，需要大量的表单。

Vue中使用v-model指令来实现表单元素和数据的双向绑定

### 13.1 案例解析

![image-20210629141935077](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210629141935077.png)

* 因为input中的v-model绑定了message，所以会实时将输入的内容message，message发生改变
* 当message发生改变时，使用了Mustache语法，将message的值插入到DOM中，所以DOM会发生响应的改变
* 所以通过v-model实现了双向的绑定

v-model也可以将v-model用于textarea元素

### 13.2 v-model原理

v-model实际上是一个语法糖，它的背后本质上包含两个操作：

* v-bind绑定一个属性
* v-on指令给当前的元素绑定input事件

下面的两条代码实质上是等同的:

```html
<input type="text" v-model="message">

<input type="text" v-bind:value="message" v-on:input="message= $event.target.value">
```

### 13.3 v-model结合radio类型

示例：

![image-20210629152110866](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210629152110866.png)

### 13.4  v-model结合checkbox类型

复选框分为两种情况：单个勾选框和多个勾选框

#### 13.4.1 单选框

* v-model即为布尔值

* 此时input的value并不影响v-model的值

* 单选框示例：

  ![image-20210629152656992](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210629152656992.png)

#### 13.4.2 多选框

* 当是多个复选框时，因为可以选中多个，所以对应的data中属性是一个数组
* 当选中某一个时，就会将input的value添加到数组中

* 多选框示例：

![image-20210629152722373](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210629152722373.png)



### 13.5 v-model结合select使用

select分为两种情况：单选和多选两种情况

#### 13.5.1 单选

* v-model绑定的是一个值

* 当我们选中option中的一个时，会将它对应的value赋值到对应的data数据中

* 单选示例：

  ![image-20210629153851130](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210629153851130.png)

  

#### 13.5.2 多选

* v-model绑定的是一个数组

* 当选中多个值时，就会将选中的option对应的value添加到对应的data数据中

* 多选示例：

  ![image-20210629154028687](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210629154028687.png)

### 13.6 v-model修饰符

#### 13.6.1 lazy修饰符

* 默认情况下, v-model默认是在input事件中同步输入框的数据
* 也就是说，一旦有数据发生改变对应的data中的数据就会自动发生改变
* lazy修饰符可以让数据在失去焦点或者回车时才会更新

#### 13.6.2 number修饰符

* 默认情况下，在输入框中无论我们输入的时字母还是数字，都会被当作是字符串类型进行处理
* 但是如果我们希望处理的是数字类型，那么最好直接将内容当作数字处理
* number修饰符可以让在输入框中输入的内容自动转换成数字类型

#### 13.6.3 trim修饰符

* 如果输入的内容首尾有很多空格，通常我们希望将其去除
* trim修饰符可以将过滤内容左右两边的空格

## 14-vue组件化思想

组件化是Vue.js中的重要思想

* 它提供了一种抽象，让我们可以开发出一个个独立可复用的小组来构造我们的应用
* 任何的应用都会被抽象成一颗组件树

![Component Tree](https://cn.vuejs.org/images/components.png)

### 14.1 组件化思想的应用

*  尽可能的将页面拆分成一个个小的，可复用的组件
*  这样让我们的代码更加方便组织和管理，复用性也更强

### 14.2 注册组件的基本步骤

组件的使用分成三个步骤：

1. 创建组件构造器
2. 注册组件
3. 使用组件

![组件化开发- 知乎](https://pic4.zhimg.com/80/v2-dbd609d1c1afd7f313f03357df9ff19f_1440w.jpg)

  

### 14.3 注册组件步骤解析

* Vue.extend():
  * 调用Vue.extend()创建的是一个组件构造器
  * 通常在创建组件构造器时，传入template代表我们自定义组件的模板
  * 该模板就是在使用到组件的地方，要显示的HTML代码
  * 事实上，这种写法在Vue2.x中的文档几乎已经看不到了，它会直接用到语法糖

* Vue.component()
  * 调用Vue.component()是将刚才的组件构造器注册为一个组件，并且给它起一个组件的标签名称
  * 所以需要传递两个参数：1、注册组件的标签名 2、组件构造器

* 组件必须挂载在某个Vue实例下，否则不会生效

### 14.4 全局组件和局部

* 当通过Vue.component()注册组件时，组件的注册是全局的

  * 意味着改组件可以在任意Vue实例下使用

    ```javascript
    const myComponent = Vue.extend({
      // ... 选项 ...  
    })
    
    Vue.component('my-component-name', myComponent)
    
    new Vue({ el: '#app' })
    ```

* 如果注册的组件时挂载在某个实例中，那么就是一个局部组件

  * 组件只能在特定实例下使用

    ```javascript
    var ComponentA = Vue.extend({ /* ... */ })
    var ComponentB = Vue.extend({ /* ... */ })
    var ComponentC = Vue.extend({ /* ... */ })}
    
    Vue.component('component-a', ComponentA)
    Vue.component('component-b', ComponentB)
    Vue.component('component-c', ComponentC)
    
    new Vue({
      el: '#app',
      components: {
        'component-a': ComponentA,
        'component-b': ComponentB
      }
    })
    ```

### 14.5 父组件和子组件

* 组件树：
  * 组件和组件存在层级关系
  * 而其中一种非常重要的关系就是父子组件的关系

* 父子组件错误用法：以子标签的形式在Vue实例中使用
  * 因为当子组件注册到父组件的components时，Vue会编译好父组件的模块
  * 该模板的内容已经决定了父组件将要渲染的HTML（相当于父组件中已经有了子组件的内容）

### 14.6 注册组件的语法糖

在上面注册组件的方式，可能会有些繁琐

* Vue为了简化这个过程，提供了注册的语法糖

* 主要是省去了调用Vue.extend()的步骤，而是可以直接用一个对象来代替

* 语法糖注册全局组件：

  ```javascript
  Vue.component('my-component-name', {
    // ... 选项 ...
  })
  new Vue({ el: '#app' })
  ```

* 语法糖注册局部组件

  ```
  var ComponentA = { /* ... */ }
  var ComponentB = { /* ... */ }
  var ComponentC = { /* ... */ }
  
  new Vue({
    el: '#app',
    components: {
      'component-a': ComponentA,
      'component-b': ComponentB
    }
  })
  ```

### 14.6 注册组件的语法糖

Vue提供了两种方案来定义HTML模块内容：

* 使用<script>标签：

  ```html
  <script type="text/x-template" id="cpn">
  	// ... 内容 ... 
  </script>
  ```

* 使用<template>标签

  ```html
  <template id="cpn">
  	// ... 内容 ...
  </template>
  ```

### 14.8 组件中的data必须是函数

#### 14.8.1 组件不能访问Vue实例数据

* 组件是一个单独功能模块的封装：
  * 这个模块有属于自己的HTML模板，也应该有属于自己的data

* 即使是可以访问，如果所有的数据都放在Vue实例中，Vue实例就会变的非常臃肿
  * Vue组件应该有自己保存数据的地方

#### 14.8.2 组件数据的存放

* 组件对象也有一个data属性(也可以有methods等属性)
* 这个data属性必须是一个函数
* 而且这个函数返回一个对象，对象内部保存着数据

### 14.9 父子组件的通信

开发中，一些数据需要从上层传递到下层：比如在一个页面中，从服务器请求到了很多的数据，其中一部分数据并非是由整个页面的大型组件来展示，而是需要下面的小组件进行展示。这时候，并不会让子组件再次发送一个网络请求，而是直接让**大组件（父组件）**将数据传递给**小组件（子组件）**

#### 14.9.1父子组件的通信方式

* 父组件通过props向子组件传递数据
* 子组件通过事件向父组件发送消息

<img src="https://blog-1257601889.cos.ap-shanghai.myqcloud.com/vue/attrs/vue.png?ynotemdtimestamp=1551245782807" alt="Vue案例引发的「嵌套组件」通信的简单方式_六小登登的专栏-CSDN博客" style="zoom:50%;" />

#### 14.9.2 props数据验证

props选项可以使用数组，但是需要对props进行类型等验证时，可以使用对象写法

验证支持的数据类型：

* String
* Number
* Boolean
* Array
* Object
* Data
* Function
* Symbol

代码示例：

```javascript
Vue.component('my-component', {
  props:{
    // 基础的类型检查('null' 匹配任何类型)
    propA:Number,
    // 多个可能的类型
    propB：[String, Number],
    // 必填的字符串
    propC:{
      type:String,
      required:true,
	},
    // 带有默认值的数字
    propD:{
      type:Number,
      default: 100
    },
    // 带有默认值的对象
    propE:{
      type:Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default(){
          return {message:'hello'}
      }
    },
    propF:{
      validator:function(value){
        // 这个值必须匹配下列字符串中的一个
        retrun ['success', 'warnning', 'danger'].index(value) !==-1
      }
    }
  }
})
```

当有自定义构造函数时，验证也支持自定义的类型

```javascript
function Person(firtname, lastname){
  this.firstname = firstname
  this.lastname = lastname
}

Vue.component('blog-post', {
  props:{
    author: Person
  }
})
```

#### 14.9.3 子组件向父组件传递

props用于父组件向子组件传递数据，还有一种比较常见的是子组件传递数据或事件到父组件中

子组件向父组件的通信需要使用**自定义事件**来完成

* v-on不仅仅可以监听DOM事件，也可以用于组件间的自定义事件

自定义事件的流程：

* 在子组件中，通过$emit()来触发事件
* 在父组件中，通过v-on来监听子组件事件

### 14.10 父子组件的访问方式

有时候需要父组件直接访问子组件，子组件直接访问父组件，或者是子组件访问根组件

#### 14.10.1 父组件访问子组件

父组件访问子组件时，使用\$chidren或\$refs 

* \$chidren：是一个数组类型，它包含所有子组件对象(基本不用)

\$chidren的缺陷：

* 通过\$children访问子组件时，是一个数组类型，访问其中的子组件必须通过索引值
* 当子组件过多时，往往不能确定索引值，索引值甚至可能发生变化
* 当需要明确获取其中一个特定的组件时，这个时候可以用\$refs



\$refs的使用：

* \$refs和ref指令通常是一起使用的
* 首先，通过ref给某一个组件绑定一个特定的ID
* 其次，通过this.$refs.ID就可以访问到该组件

## 15-插槽（slot）

### 15.1 组件的插槽

* 组件的插槽也是为了让我们封装的组件更加具有扩展性
* 让使用者可以决定组件内部的一些内容到底展示什么

### 15.2 封装组件插槽

* 最好的封装方式是将共性抽取到组件中，将不同暴露为插槽
* 一旦预留了插槽，就可以让使用者根据自己的需求，决定插槽中插入什么内容

### 15.3 slot基本使用

* 在子组件中，使用特殊元素`<slot>`就可以为子组件开启一个插槽
* 该插槽插入什么内容取决于父组件如何使用

### 15.4 具名插槽slot

 当子组件的功能复杂时，子组件的插槽可能并非是一个

具名插槽的使用：

* 给slot元素一个name属性
* `<slot name="myslot"></slot>`

### 15.5 编译作用域

***父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译***

#### 15.5.1 作用域插槽

***父组件替换插槽的标签，但是内容由子组件提供***

![image-20210701174113308](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20210701174113308.png)

## 16-模块化思想

### 16.1 使用模块作为出口

可以将需要暴露到外面的变量，使用一个模块作为出口

```javascript
var MoudleA = (function(){
  // 1.定义一个对象
  var obj = {}
  // 2.在对象内部添加变量和方法
  obj.flag = true
  obj.myFunc = function(info){
    console.log(info)
  }
  // 3. 将对象返回
  return obj
})
```

```javascript
if (MoudleA.flag){
  console.log('moudleA')
}

MoudleA.mysFunc('moudleA')
```

代码解析：

* 在匿名函数内部，定义一个对象
* 给对象添加各种需要暴露到外面的属性和方法
* 最后将对象返回，并且在外面使用一个MoudleA接收

这是模块最基础的封装，事实上模块的封装还有很多高级话题：前端模块化开发已经有了很多既有的规范，以及对应的实现方案

常见的模块化规范：

* CommonJS，AMD, CMD, 也有ES6的Modules

#### 16.1.1 CommonJS

CommonJS的导出：

```javascript
moudle.exports = {
   flag = true,
    test(a,b){
      return a+b
    },
    demo(a,b){
      return a+b
    }
}
```

CommonJS的导入：

```javascript
// CommonJS模块
let {test, demo, flag} = require('moudleA')

//等同于
let _mA = require('moudleA')
let test = _mA.test
let demo = _mA.demo
let flag = _mA.flag
```

### 16.2 ES6模块化的实现

#### 16.2.1 export基本使用

* 导出变量

  写法一：

  ```javascript
  // info.js
  export let name = 'wly'
  export let age = 18
  export height = 1.88
  ```

  写法二：

  ```javascript
  // info.js
  let name = 'wly'
  let age = 18
  let height = 1.88
  
  export{name, age, height}
  ```

* 导出函数或类

  ```javascript
  export function test(content){
  	console.log(content)
  }
  
  export class Person {
  	constructor(name, age){
  		this.name = name;
  		this.age = age;
  	}
  	
  	run(){
  		console.log(this.name + 'running')
  	}
  }
  ```

  ```javascript
  function test(content){
  	console.log(content)
  }
  
  class Person {
  	constructor(name, age){
          this.name = name
          this.age = age
      }
      run(){
          console.log(this.name+'running')
      }
  }
  
  export {test, Person}
  ```

* **export default**

  某些情况下，一个模块中包含某个的功能，我们并不希望给这个功能命名，而且让导入者可以自己来命名，这时候就可以使用export default

  ```javascript
  // info.js
  export default function(){
  	console.log('default function')
  }
  ```

  ```
  import myFunc from './info.js'
  
  myFunc()
  ```

  另外要**注意**：

  * export default在同一个模块中，不允许同时存在多个

#### 16.2.2 import使用

当我们使用export指令导出了模块对外提供的接口，就可以通过import命令来加载对应的模块

* 首先，在HTML代码中引入两个js文件，并且类型需要设置为**module**

  ```html
  <script src="info.js" type="module"></script>
  <script src="main.js" type="module"></script>
  ```

* import指令用于导入模块中的内容，比如main.js代码

  ```javascript
  import {name, age, height} from './info.js'
  
  console.log(name, age, height)
  ```

* 如果希望某个模块中所有信息都导入，一个个导入显然有些麻烦：

  * 通过*可以导入模块中所有的export变量
  * 通常情况下需要给*起一个别名，方便后续的使用

  ```
  import * as info from './info.js'
  
  console.log(info.name, info.age, info.height, info.firends)
  ```

## 17-Webpack

### 17.1 什么是Webpack

官方的解释：

* As its core, webpack is a static module bundler for modern JavaScript applications
* 从本质上来讲，webpack是一个现代的JavaScript应用的静态**模块打包**工具

### 17.2 前端模块化

​	在ES6之前，要想进行模块化的开发，就必须借助于其他的工具，在通过模块化开发完成了项目之后，还需要处

理模块间的各种依赖，并且将其进行整合打包

​	webpack其中一个核心就是进行模块化开发，并且会帮着开发者处理模块间的依赖关系。不仅仅是JavaScript文

件，CSS、图片、json文件等等在webpack中都可以被当作模块来使用
