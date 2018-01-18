## 

### javascript

## 一.输出的三种方式

```javascript
 
  alert("Hello JavaScript!"); // 弹出一个窗口，如果窗口不关闭，不能执行其他操作
  console.log("嘿嘿"); //在控制台中输出信息，需要打开开发人员工具，选择Console或控制台
  document.write("欢迎来到南京网博！");//在当前页面中输出信息
```

## 二.引用js的三种方式

```javascript
	
	<!-- 方式一 -->
	<script type="text/javascript">
		console.log("1.将JavaScript代码写在head头部");
	</script>
	<!-- 方式二 -->
	新建一个js结尾的文件
	<script type="text/javascript" src="js/itany.js"></script>
	<!-- 方式三 -->
	<input type="button" value="点我" onclick="javascript:alert('我被点我，好疼！');" />
	<!-- 超链接点击执行JavaScript代码时，与href连用的时候，必须添加javascript前缀 -->
	<a href="javascript:alert('超链接被点击了！');" >我是超链接</a>
	
```

## 三.转义符

```html

由于字符串中经常会有一些特殊字符，比如换行、引号等，为了让字符能够正常显示，此时需要使用转义符
常用转义符
\” 双引号
\’ 单引号
\n 换行
\t 制表符，缩进
```

## 四.注释

```javascript

单行注释以 // 开始，以行末结束，例如：alert("恭喜你！"); //在页同上弹出提示框

多行注释以 /* 开始，以 */ 结束，符号 /*…… */ 指示中间的语句是该程序中的注释。例如：
/*
  这是多行注释
  此处的语句都不会被执行
*/
```

## 五.变量

### 1.定义变量的语法

```javascript

JavaScript是弱变量类型的语言，声明变量只需要使用var。

定义变量，语法：var  变量名 = 变量值
```

### 2.定义变量名的命名规则

```javascript
 
 (1)只能由数字，英文字母，下划线以及$符号组成，但不能以数字开头。
 (2)不能使用javascript中的关键字和保留字。    
 		关键字：已经被javascript内部使用过的。	
 		保留字：还没有被javascript内部使用，但将来会用
 (3)区分大小写
 
 (4)通常第一个单词首字母小写，其他单词首字母大写
```

## 六.加号的作用

##### (1)两个字符串用加号连接    作用：连接这两个字符串

##### (2)两个数值用加号连接    作用：进行加法运算

##### (3)字符串和其他值用加号连接    作用：连接

## 七.字面量

```

字面量（直接量）表示如何表达这个值，一般除去表达式外，给变量赋值时等号右边都可以认为是字面量。简单来说就是字面上就能明白代码含义

字符串字面量(string literal )，如var name=“tom”;
数组字面量(array literal)，如var array=[12,32];
对象字面量(object literal)，如var stu={name:”tom”,age:20}
函数字面量(function literal)
```

## 八.判断数据的类型

```javascript

使用typeof判断数据类型
用法：typeof(变量) 或 typeof  变量
返回值：
string
number
boolean
undefined
object：对象、null
```

```javascript

数据类型：
string存储一串字符,用双引号或单引号括起来
number表示整数或浮点数
boolean表示真假, true或false
undefined变量被声明了，但未被赋值
null空
```

## 九.常用的输入/输出

```javascript

alert() 弹出提示框
console.log() 向控制台输出信息
document.write() 向网页中输出信息，代码调试
prompt() 弹出输入框，获取用户输入的数据
prompt(“提示信息”, “输入框的默认信息”);
prompt(“请输入姓名：”, “张三”);
prompt(“请输入一个数字：”);
```

## 十.运算符

| 类型        | 运算符                                      |
| --------- | ---------------------------------------- |
| 赋值运算符     | =                                        |
| 算术运算符     | +  -  *  /  %                            |
| 比较运算符     | >      <     >=     <=      ==   !=   ===   !== |
| 逻辑运算符     | &&      \|\|     !                       |
| 条件(三目)运算符 | 语法：条件？表达式1：表达式2                          |



```

比较运算符：用来做比较运算，结果是boolean值
==（是否相等），只判断数据的内容，不判断数据的类型
===（是否全等），既判断内容，也判断类型
!=（是否不等），只判断数据的内容，如果内容一样，则返回false
!==（是否不全等），只要内容或类型不一样，则返回true，否则返回false
```



```javascript

逻辑运算符：&& 与（并且）         ||或（或者）               !非（取反）

逻辑中断
||：如果第一个为真就返回第一个表达式，否则返回第二个表达式
&&：如果第一个为假就返回第一个表达式，否则返回第二个表达式

运算优先级：!   >   &&  >  ||
```

```

条件运算符，又称之为三目运算符
语法：条件？表达式1：表达式2
条件为true则执行表达式1，如果为false则执行表达式2

```

## 十一.NaN

```

含义：not a number 表示非数字，其自身是number类型
作用：用来表示数值的一种不正常的状态，一般在计算出错时会出现。

isNaN()
作用：检查其参数是否是非数字
如果是非数字，则返回true
如果不是非数字（即是数字），则返回false

```

## 十二.复杂的算术运算符

```javascript

Math对象：执行常见的算数任务。
Math.abs(a);//得到a的绝对值
Math.pow(a,b);//得到a的b次方
Math.round(a);//四舍五入
Math.ceil(a);//向上取整
Math.floor(a);//向下取整
Math.random();//产生随机数，范围[0.0,1.0)
Math.max(a,b…);//返回最大值
Math.min(a,b…);//返回最小值
Math.PI;//返回圆周率π的值
```

## 十三.运算符的补充

##### (1)运算符的简写

```javascript

+=、-=、*=、/=、%=

var a=5;

 +=
a+=1; //a=a+1;
a+=4; //a=a+4;

 -=
a-=2; //a=a-2;

 *=
a*=5; //a=a*5;

 /=
a/=2; //a=a/2;

 %=
/a%=2; //a=a%2;

		
```

##### (2)自增自减运算符

```javascript

var b=8;
b++;//都是在原有b的基础上加上1

++b;//都是在原有b的基础上加上1
console.log(b);


var z=7;
// console.log(z++); //z++表示先执行，再加1
// console.log(++z); //++z表示先加1，再执行


var aa=10;
var c=6
// var y=2+ ++aa+c--;  //2+11+6
console.log(y);
```

## 十四.数据类型转换

### (1)转换为number

##### (1)使用Number()   

```

如果内容可以转换成数字，则返回对应的数字（整数或小数）
如果内容不可以转换成数字，则返回NaN
如果内容为空，则返回0

```

##### (2)使用parseInt()

```

将内容转换成整数（直接去掉小数）
会从第一个字符开始解析，直到遇到非数字符号停止，并返回已解析的部分
```

##### (3)使用parseFloat()

```

将内容转换成小数
会从第一个字符开始解析，直到遇到非数字符号停止，并返回已解析的部分

```

## (2)转换为string

###### (1)使用String()

```

将要转换的内容放在String后的小括号中
```

###### (2)使用toString()

```

直接调用变量的toString()方法

```

## (3)转换为boolean

```

false、0、NaN、Undefined会被转换成false
“”空字符串会被转换成false
其它的都会被转成true（任何非空字符串都会被转换为true）
boolean值true在内存中用1表示，false用0表示

```
## 十五.流程控制语句

#### 1.选择结构	

```javascript

  1.if选择结构：      
  (1) 基本的if选择结构       
  if ( 条件 ) {  
  		//代码块      
  }
  (2)使用if-else选择结构    
  if ( 条件 ) {  
  		//代码块1  
  }else {      
  		//代码块2 
  }
  (3)多重if选择结构
  if ( 条件 1) { 
       //代码块1  
   }
   else if ( 条件2 ) { 
       //代码块2 
   }
  else { 
       //代码块3 
   }
  (4)嵌套if选择结构
	 if（条件1) {
      if（条件2) {
              代码块1
      } else {
              代码块2
      }
	} else {
    	  代码块3
	}
	2.switch选择结构
	switch (表达式) {

      case 常量 1://可以是数值，也可以是字符串类型
		语句;
		break;

      case 常量 2:
		语句;
		break;//如果省略break，则一旦匹配就会一起往下执行，直到遇到break为止
	…
	
	default:
		语句;
}

switch和if的相同点和不同点：
相同点
都是用来处理多分支条件的结构

不同点
switch选择结构
	只能处理等值条件判断的情况
多重if选择结构
	没有switch选择结构的限制，特别适合某个变量处于某个连续区间时的情况

```

#### 2.循环结构

```javascript

1.while循环
while ( 循环条件 ) {    
       循环操作
}
2.do...while循环
do {
		循环操作
} while ( 循环条件 );
3.for循环
for(表达式1; 表达式2;表达式3){
  循环操作
} 
循环的区别：
while 循环：先判断，再执行
do-while循环：先执行，再判断
for循环：先判断，再执行
适用状况：
适用情况
循环次数确定的情况，通常选用for循环
循环次数不确定的情况，通常选用while和do-while循环

```

## 十五.二重循环

```javascript

一个循环体内又包含另一个完整的循环结构
外层循环变量变化一次，内层循环变量要变化一遍
各种循环可以相互嵌套
while(循环条件1){
     //循环操作1
     while(循环条件2){
          //循环操作2
     }
}

do{
    //循环操作1
    do{
        //循环操作2
    }while(循环条件1);
}while(循环条件2);

for(循环条件1){
     //循环操作1
     for(循环条件2){
          //循环操作2
     }
}
while(循环条件1){
      //循环操作1
      for(循环条件2){
   	        //循环操作2
	 }
}


```

## 十六.数组

#### 1.什么是数组？

```html

数组也是一个变量，可以存储一组数据
数组的大小可以动态调整，没有长度限制
可以存储任意类型的数据

```

#### 2.数组的使用

```javascript
1.创建数组
var 数组名=new Array();
2.为数组元素赋值
数组名[索引]=元素值;
3.获取元素值
数组名[索引]
**注意：元素下标：对数组中的元素进行编号，下标从0开始
通过下标访问数组中的元素，也称为索引**
```
#### 3.创建数组的两种方式

###### 方式一：直接使用Array

```

var nums=new Array();//创建一个空数组
var nums=new Array(5);//创建一个长度为5的数组
var nums=new Array(13,43,2,120);//创建一个包含3个元素的数组

```

###### 方式二：使用数组字面量ۚ

```

var names=[ ];//创建一个空数组
var names= ["apple", "orange", " peach","bananer"];
var names= [“zs”,“ls”,true,12,5.6];

```

```

数组中的项，如果没有赋值 ，则默认为undefined
```

#### 4.数组常用方法

```javascript

排序方法
sort()：默认按字符编码的顺序排列，非string类型会自动转换为string，可自定义比较规则
反转方法
reverse()：将数组元素倒序排列
拼接操作
join()：将数组拼接为string
concat()：将多个数组拼接成一个数组
栈操作
push()：入栈，向数组末尾添加一个或多个元素
pop()：出栈，删除并返回数组的最后一个元素
unshift()：向数组的开头添加一个或更多元素，并返回新的长度
shift()：删除并返回数组的第一个元素
slice() ：从某个已有的数组返回选定的元素
splice()：向/从数组中添加/删除项目，然后返回被删除的项目
转换数组
toString()：将数组转换为字符串
valueOf()：返回数组对象本身，一般会自动调用
迭代数组
forEach()：ES5新增

```

## 十七.关于二维数组

```javascript

JavaScript本身只支持一维数组，不支持直接定义二维数组，但是我们可以间接实现二维数组
将一维数组的每个元素又定义为一个数组，即数组中的元素也是数组

var array=new Array();
//定义一维数组 
for(var i=0;i<5;i++){  
	array[i]=new Array(); //将每一个子元素又定义为数组 
    for(var j=0;j<10;j++) { 
    	array[i][j]=i+j; //此时array[i][j]可以看作是一个二级数组 
    } 
  } 
   

```

## 十八.什么是函数？

```javascript

含义：一段有名字的代码块，完成特定功能的代码块，可以被调用执行多次，实现复用
分类：内置函数、自定义函数

```

#### 1.内置函数

```

类型转换： 
parseInt
parseFloat
特定计算：eval
计算字符串表达式的值，并执行其中的JavaScript代码。支持简单表达式、带变量表达式、条件分支表达式等
解析JSON格式字符串（以后介绍）

```

```

判断函数
isNaN：判断是否是NaN，如果是返回true
isFinite：判断是否是有限数字（或可转换为有限数字），那么返回true。如果是NaN、或者是正、负无穷大的数（Infinity），则返回 false。
编解码函数(了解)
将特殊字符串进行编码以及对编码过的字符串解码
encodeURI、decodeURI：使用ISO8859-1，每个UTF-8的汉字编码成3个16进制字节，如下： %字节1%字节2%字节3
escape、unescape：使用Unicode，每个UTF-8的汉字被编码成一个双字节16进制转义字符%uXXXX，中文范围%u4e00---%u9fa5

```

#### 2.自定义函数

###### (1)创建函数

```javascript

function 函数名(参数1,参数2，… )
 { 
    //JavaScript代码，即函数体
 }

形参
定义函数时指定的参数，没有实际的值，占位置
实参
调用函数时指定的参数，有实际的值
形参和实参匹配问题
JavaScript中调用函数时，实参的个数可以和形参的个数不相等
JavaScript中没有重载的概念
后定义的同名函数会覆盖前面定义的函数，所以不要定义同名的函数。注：在其他语言中会有重载的概念，即函数名相同，参数个数不同的多个函数。



```

#### 3.函数的返回值

```javascript


函数执行后可以返回一个结果，称为函数的返回值
使用return关键字来返回函数执行后的结果值
function sum(var num1,var num2)
{
	var result=num1+num2;
	return result;
}
如果return后面没有跟返回值或没有使用return关键字，则默认返回：undefined

```

#### 4.变量的作用域

```javascript

即变量可以在什么位置使用
分类：局部变量、全局变量
局部变量
	在函数内声明的变量，只能在该函数内访问
	函数运行结束，变量自动销毁
全局变量
	只要不是在函数内声明的变量，在任何位置都可以访问，在函数内未使用var声明，直接赋值的变量，也是全局变量
	当所在页面关闭时销毁
	
```

#### 5.变量提升

```

解析器执行JavaScript代码的过程
首先预解析(全局作用域)
将变量var和函数function的声明提前到作用域的最上面，需要注意的是变量的赋值操作不会提前
然后执行代码
从上往下，一行一行执行代码
当执行函数时会进入函数内部 
再次预解析 (局部作用域)
然后从上往下，一行一行执行代码

```

#### 6.定义函数的两种方式

```javascript

方式一：函数声明
function 函数名(参数)
 { 
    	函数体
 }

方式二：函数表达式
var 变量名 = function (参数 )
 { 
	函数体
 };

调用函数：变量名(参数);



```

#### 7.回调函数callback

```

不立即执行的函数调用，满足一定条件时执行或者由别的代码调用执行
用法：
调用时只写函数名，没有小括号()和参数
应用
事件绑定
函数参数


```

#### 8.匿名函数

```

匿名函数：没有函数名的函数

```

```
(1)一般用于回调
window.onload=function(){
	console.log('这是匿名函数');
};
(2)也可能用于一次性执行的函数，或将匿名函数作为另一个函数的参数
(function (){
	console.log('执行一次');
})();
```

## 十九.javascript的组成部分

```
ECMASCript  规范定义了一种脚本语言实现应该包含的内容，JavaScript 是 ECMAScript 规范的一种实				现。  简单来说，就是语法规范，语法规则。             
DOM         文档对象模型（Document Object Model）
			是W3C制定的一套规范，提供了一组操作HTML和XML文档的API，即提供一套属性、方法和事。
            DOM作用：
            		获取页面中的元素
					获取/设置元素的属性
					获取/设置元素的样式
					添加/删除元素
					绑定事件—触发响应

            	
BOM        浏览器对象模型（Browser Object Model）
		   BOM是Browser Object Model的缩写，简称浏览器对象模型
		   BOM提供了独立于内容而与浏览器窗口进行交互的对象
		   由于BOM主要用于管理窗口与窗口之间的通讯，因此其核心对象是window
		   BOM由一系列相关的对象构成，并且每个对象都提供了很多方法与属性
		   

		
```

## 二十 .window对象的常用属性和方法

#### 1.window常用属性

| 名称       | 说明                |
| -------- | ----------------- |
| screen   | 有关客户端的屏幕和显示性能的信息。 |
| history  | 有关客户访问过的URL的信息。   |
| location | 有关当前 URL 的信息。     |
| document | 表示浏览器窗口中的HTML文档   |

###### (1)history对象

| 名称         | 说明                      |
| ---------- | ----------------------- |
| back( )    | 加载 History 列表中的上一个 URL。 |
| forward( ) | 加载 History 列表中的下一个 URL。 |
| go(number) | 浏览器移动指定的页面数。            |

###### (2)location对象

| 名称       | 说明                  |
| -------- | ------------------- |
| href     | 属性，设置或检索完整的 URL 字符串 |
| reload() | 方法，重新加载当前页          |

###### (3)document对象

```
document对象表示整个HTML文档
```

###### 属性

```

bgColor 设置或检索 Document 对象的背景色 
title 返回当前文档的标题
body 提供对 <body> 元素的直接访问

```

###### 方法

```

write() 在当前页面中输出内容
getElementById() 返回指定id的第一个对象的引用
getElementsByName() 返回带有指定名称的对象的集合
getElementsByTagName() 返回带有指定标签名的对象的集合
getElementsByClassName()返回带有指定class的对象的集合
（不仅document对象具有getElementsByTagName()，getElementsByClassName()方法，其他DOM对象同样具有，用来在元素内部根据标签名查找
）
```

###### DOM对象的属性

```

DOM对象的属性和HTML标签的属性几乎是一样的，
用法：DOM对象.属性
src、href、title等
type、value、checked、selected、disabled等
也可以使用DOM对象.getAttribute("属性名")
```

######	DOM相关的类型

```

node(节点):文档、元素、文本、属性等，都可以称为节点
节点类型：1表示元素节点、2表示属性节点、3表示文本节点

element(元素)：表示HTML文档中的元素
属性
nodeName/nodeType：节点名称/节点类型
childNodes：返回子节点集合，NodeList类型
attributes：返回属性集合，NamedNodeMap类型
firstChild/lastChild：第一个/最后一个子节点
parentNode：返回元素的父节点
方法
appendChild()：添加子节点，包括子元素、文本节点等
getAttribute()：获取指定属性的值
setAttribute()：添加/修改属性

注意：DOM对象.attributes;//获取的是属性的集合，使用for循环遍历的方式取出来，再通过.name或者.value取出属性名和属性值

```

###### document写操作的步骤

```

创建新元素：
document.createElement(元素名)
设置文本内容（支持文本内容的元素）：
元素.appendChild(document.createTextNode(文本内容))
设置属性：
元素.setAttribute(属性名，属性值)
找到父元素：
document.getElement……
追加：
父元素.appendChild(新元素)

```

###### 其它元素操作

```

插入：parent.insertBefore(新的节点,已经存在的节点)
删除：parent.removeChild(要删除的节点)
替换：parent.replaceChild(新的节点,被替换的节点)
克隆：node.cloneNode(true|false是否包括内容)

```



#### 2.window对象常用方法

| 名称                       | 说明                                      |
| ------------------------ | --------------------------------------- |
| alert (text)             | 显示一个带有提示信息和确定按钮的警告对话框 （undefined）       |
| confirm(text)            | 显示一个带有提示信息、确定和取消按钮的对话框 （true  or false） |
| prompt(text,val)         | 显示一个带有提示信息、确定和取消按钮以及文本输入框的对话框           |
| open (url,name, options) | 打开具有指定名称的新窗口，并加载给定 URL 所指定的文档           |
| showModalDialog( )       | 在一个模式窗口中显示指定的HTML文档                     |
| close ( )                | 关闭当前窗口（FF与IE规则不同）                       |
| setTimeout(func,delay)   | 设置一次性定时器，经过指定毫秒值后执行某个函数                 |
| setInterval(func,delay)  | 设置周期性定时器，周期性循环执行某个函数                    |
| clearTimeout(timer)      | 清除一次性定时器                                |
| clearInterval(timer)     | 清除周期性定时器                                |

#### 3.window对象常用事件

| 名称          | 说明                |
| ----------- | ----------------- |
| onload      | 一个页面或一幅图像完成加载     |
| onmouseover | 鼠标移到某元素之上         |
| onmouseout  | 鼠标移开某元素时          |
| onclick     | 当用户单击某个对象时调用的事件句柄 |
| onkeydown   | 某个键盘按键被按下         |
| onscroll    | 窗口滚动条滑动           |

## 二十一.javascript访问css样式

```javascript

style属性
单一单词的CSS样式属性，直接使用“对象名.style.样式名”来访问，如obj.style.color=“red”;
复合词，将复合符号“-”去掉，并将其后的单词首字母改成大写，如obj.style.fontSize=“18px”
className属性
当修改的样式比较多时，可以借助于样式表，为不同状态下的样式分别定义一个类选择器，在脚本中使用“对象名.className”来访问

```

## 二十一.什么是对象

```

万物皆对象，如手机、电脑、汽车、桌子、学生、狗、游戏等
现实世界中充满着对象，符合人们的思维习惯
对象具有特征和行为
特征：对象具有的属性，如学生的姓名、年龄等
行为 ：对象具有的能力，如学生可以学习、跑步、做自我介绍等

```

## 二十二.JavaScript中的对象

```

属性可理解为键值对，键是属性名，值是对应的数据，所以也可认为对象是键值对的集合
值可细分为基本值、对象、函数
对象的属性和方法
属性：对象具有的特征
方法：对象具有的行为
优点：对象可以封装一组数据，便于使用


```

###### 创建对象的三种方式

```javascript

方式一：直接使用Object
var person=new Object(); 
person.name="tom"; 
方式二：使用构造函数，模拟类的定义
function Person() {
 	this.name="tom";
} 
方式三：使用对象字面量
var stu={
	name:"tom",
};

```

###### 构造函数

```javascript

用来创建对象的函数，称为构造函数(构造器)
定义构造函数，模拟类的定义：相当于是定义了一个类型
function 构造函数名( ) {
 	 this.属性名=属性值; 
     this.方法名=function(){方法定义};
} 
调用构造函数，创建对象：
var 对象名=new 构造函数名( );

```

###### 带参的构造函数

```javascript

为了便于对象的创建及初始化，通常会使用参数的构造函数
function 构造函数名(形参1,形参2…) {
 	this.属性名=形参1; 
 	this.属性名=形参2; 
  	this.方法名=function(){方法定义};
} 

可以在创建对象的同时设置属性值
var 对象名=new 构造函数名(实参1,实参2…);

```

###### this关键字

```

函数中的this，表示调用函数的当前对象
function test() {
   console.log(this);
}
test();
window.test();
此时的this指的是window

构造函数中的this，表示将来new出来的当前对象
function Student(name,age){
  	this.name=name;
  	this.age=age;
}
var stu=new Student("tom",20);
此时的this指的是new出来的stu

事件绑定的匿名回调函数中的this，表示事件源（发生事件的元素）
如在标签中或者js中绑定事件时
```

###### 对象字面量

```

var stu={
	name:"tom",
	age:20,
	sex:"男",
	"js-score":92,
	study:function(){
		console.log("正在学习JavaScript中...");
	}
};
属性名可加引号，也可不加，标准写法是不加双引号
如果命名不规范，则必须加引号

```

###### 使用for...in循环遍历对象

```

for(var key in stu){
       console.log(key+"="+stu[key]);//不能使用stu.key

}

```

###### JSON简介

```

JSON(JavaScript Object Notation)是一种轻量级的数据交换格式，易于阅读和编写，同时也易于机器解析和生成。

结构特点：
键值对的集合
应用：

客户端和服务器之间传递数据，如AJAX
只有属性定义时

```

###### JSON复合属性

```

var jsonObj={
		属性名1：{
				属性名1-1：属性值1-1，
				属性名1-2：属性值1-2，
				……
			     }，
		属性名2：属性值2,
		……
};

```

###### JSON对象的集合

```

var jsonObjs=[
	{对象1属性集}, 
	{对象2属性集}
	……
];
其实就是定义JSON对象数组

```

###### JSON和字符串之间的转换:

```javascript

JSON转换为字符串
var person={"name":"张三","age":20,"wife":null};
var str=JSON.stringify(person);
字符串转换为JSON
var str='{"name":"tom","age":20}';
var obj=JSON.parse(str);
var users='[{"id":1,"username":"admin","password":"123"},//里面属性名称一定用双引号引起来
		      {"id":2,"username":"tom","password":"456"}]';
var userObj=JSON.parse(users); 

```

###### 数据类型

```

基本(简单)数据类型(5种)
string、number、boolean、undefined、null
引用(复杂)数据类型
Object、Array....
两者的区别主要在存储方式上
基本数据类型是存储在栈中。
引用数据类型是存储在堆中，但是它的引用存储在栈中。
堆和栈都是内存的一部分


JavaScript中将内存分为两种类型：栈内存、堆内存
	1.栈内存
			基本数据类型的变量和引用数据类型变量的引用，会存储在栈内存中
			存取速度较快

	2.堆内存
			引用数据类型的变量，会存储在堆内存中
			存取速度较慢
	注：在创建引用数据类型变量时，首先会在栈内存上为其引用分配一块空间，而其具体数据会存储在堆内存中，然后由栈上的引用指向堆中的地址。即引用变量的引用是存储在栈中，真实数据是存储在堆中
		

```

###### 判断对象数据类型

```

if (a instanceof  Array) {
      console.log(“变量a是数组类型”);
}
typeof和instanceof区别
typeof可以判断任意变量的类型，在判断对象的类型时候，typeof总是返回object
instanceof只能判断对象的类型，判断对象的精确类型时，返回true或false

```

###### 闭包

```javascript

JS中特有现象，在一个函数内部又定义了一个函数，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥

//在一个函数内部又定义一个函数
	function f1(){
		var n=99;
		function f2(){//只是定义函数，必须调用才会执行
			console.log(n); //在内部函数f2中可以访问到函数f1中的局部变量n
		}
			//f2();
		return f2; //返回函数f2
	}
	var fn=f1();
	fn();
如果内部函数使用外部函数的变量，在外部函数执行完成之前变量会有改变时，内部只能获取最后改变的值，无法获取定义时的值，就会产生闭包
function doAdd(){
    for(var i=1;i<=5;i++){
        //方式一：会产生闭包问题
        var btn=document.createElement("input");
        btn.type="button";
        btn.value="按钮"+i;
        btn.onclick=function(){
            console.log("点击了按钮"+i);
        };
        $("mydiv").appendChild(btn);
   	 }
 }
解决方式
不在函数内部定义函数，将函数定义在外面，在函数内部调用
将创建一个按钮的方式拿出来定义
function createButton(num){
    var btn=document.createElement("input");
    btn.type="button";
    btn.value="按钮"+num;
    btn.onclick=function(){
        console.log("点击了按钮"+num);
    };
    return btn;
}

为元素附加属性，用来存储变量
function doAdd(){
    for(var i=1;i<=5;i++){
        //方式一：会产生闭包问题
        var btn=document.createElement("input");
        btn.num=i;//为按钮添加num属性
        btn.type="button";
        btn.value="按钮"+i;
        btn.onclick=function(){
            console.log("点击了按钮"+this.num);
        };
        $("mydiv").appendChild(btn);
   	 }
 }
```
###### prototype原型

```

在构造函数中有一个属性叫 prototype 
可以通过prototype来添加新的属性和方法，并且新增内容为该构造函数的所有对象所共有
由该构造函数创建的对象会默认链接到该属性上
作用：
对象间共享数据
为“类”(系统内置或自定义)增加新的属性、方法，并且新增内容对于当前页面中已经创建的对象也有效
prototype是一个对象属性，其属性值为对象，称为原型对象

```

###### prototype用法

```

语法：
构造函数.prototype.属性名=值;
构造函数.prototype.方法名=function(){方法定义体};
在访问对象的属性 (方法)时，首先在当前对象中查找，如果没有，就会到该对象关联的构造函数的 prototype属性中找，即到原型对象中查找
在访问对象的属性 (方法)时，首先在当前对象中查找，如果没有，就会到该对象关联的构造函数的 prototype属性中找，即到原型对象中查找

```

```

_proto_和prototype关系
prototype是一个隐藏属性，于是为每个对象提供一个叫 __proto__的属性
对象的 __proto__ 与创建它的构造函数的 prototype 本质上是同一个东西
__proto__ 是站在对象的角度讨论其原型对象
prototype 是站在构造函数的角度讨论原型属性，是构造函数创建的对象的原型对象
由于__proto__ 是非标准属性，因此一般不建议使用

```

###### 对象的类型

```

对象的类型是什么？
typeof 判断对象时统一返回object
instanceof 判断对象时返回true或false，无法获取类型名称
构造函数的名称就是对象的类型
var stu=new Student()		------> Student类型
var p=new Person()		------> Person类型
var nums=new Array()		------> Array类型
var obj=new Object()		 ------> Object类型

```

###### constructor属性

```

每个对象都有一个constructor属性，该属性描述的就是其构造函数
用法：
var c=obj.contructor;
对象的 constructor 属性是其原型对象提供的，因为每个对象都链接到其原型对象上 

```

###### 继承

```

封装
将复杂的操作包裹起来，进行隐藏，简单化、安全化
继承
拿来主义，自己没有，把别人的拿过来，让其成为自己的

JavaScript中有两种继承模型：
1.原型式继承
2.组合式继承

```
###### 组合式继承

```javascript

组合式继承就是将其他对象中的成员添加到自己身上
var o1 = { name: 'jim', age:19, gender: '男' };
var o2 = { score: {
	math: 100,
	english:90,
	chinese:120
} };
//通过循环操作，将其他对象上的成员添加到当前对象上
for ( var k in o1 ) {
	o2[ k ] = o1[ k ];
}

```

###### 原型式继承

```javascript

原型式继承就是对象继承自其原型对象
在对象的原型对象中添加属性, 该对象就会自动继承得到
方式：
动态向原型对象中添加
直接覆盖原型对象

function Person() {}
Person.prototype = {
	constructor: Person,//覆盖原型对象实现继承时，一定要给新对象添加一个 constructor 属性，以便模拟对象的类型

	sayHello: function() {},
	sayGoodbye: function() {},
	sayLove: function () {}
};

```

###### 异常处理exception

```javascript

在JavaScript中使用try...catch…finally语句来进行异常处理
try 
	捕获异常的第一步是用try{…}语句块选定可能出现异常的代码
catch 
	在catch语句块中捕获并处理异常，编写对异常对象进行处理的代码
	可以通过捕获到的异常对象，获取异常的详细信息
finally
	无论如何都要执行的代码，放在finally中
  //Exception异常处理，try...catch...finally
  //try代码块，必须
  //catch代码块，可选
  //finally代码块，可选
  //但catch和finally必须至少有一个
  
  // var num=5;
    function fn(){
        console.log("----程序即将开始运行----");
        try{ //存放可能会出现异常的代码
            console.log(num);
            num++;
            return;
        }catch(e){ //捕获异常并处理
            //console.log("系统出现异常，请稍后再试！");
            document.write("系统出现异常，请稍后再试！");
            console.log("系统出现异常，请联系管理员！异常消息："+e);
        }finally{ //可选，存放必须要执行的代码
            console.log("welcome to itany!");
        }
        console.log("Hello World!"); //未做异常处理时如果程序出错，会结束代码的执行
}

		fn();

```

###### 异常处理

```javascript

throw抛出异常
我们可以使用throw抛出异常，自定义错误 ，事实上可以抛出任何对象
语法：throw  对象

Error
表示错误异常
有两个基本的属性 name 和 message 。message用来表示异常的详细信息。而name指的是Error对象的构造函数。

//计算两个整数之和，要求范围在[1,100]之间
  function calc(m,n){
      if(m<1||m>100||n<1||n>100){
          //如果程序出现异常，但不知如何处理，此时可以抛出异常
          throw new Error("数字无效，范围只能在1-@@@100之间！");
      }
      var sum=m+n;
      return sum;
  }

  function show(){
      try{
          var sum=calc(4,200);
          console.log(sum);
      }catch(e){
          console.error("系统出现异常，消息："+e.message);
          // console.log("系统出现异常，消息："+e.message);
          // console.debug("系统出现异常，消息："+e.message);
          // console.info("系统出现异常，消息："+e.message);
      }
  }
  show();
```

## 二十三.String对象

```javascript

	String 对象用于处理文本（字符串） 
	用法：
	var str=new String();或	var str="";
	通过length属性获取字符串长度.
	var str="this is JavaScript";
	var strLength=str.length;


```

###### 字符串的常用方法

| 方法                       | 描述                                 |
| ------------------------ | ---------------------------------- |
| charAt(index)            | 返回在指定索引位置的字符                       |
| charCodeAt(index)        | 返回在指定的位置的字符的 Unicode 编码。           |
| indexOf(字符串,index)       | 返回某个指定的字符串值在字符串中首次出现的位置(若找不到，返回-1) |
| lastIndexOf(字符串,index)   | 返回某个指定的字符串值在字符串中最后出现的位置(若找不到，返回-1) |
| toLowerCase()            | 把字符串转化为小写                          |
| toUpperCase()            | 把字符串转化为大写                          |
| substr(start,length)     | 从起始索引号提取字符串中指定数目的字符                |
| substring(start,stop)    | 提取字符串中两个指定的索引号之间的字符                |
| slice(start,end)         | 提取字符串的某个部分，并返回提取到的新字符串             |
| split(separator,howmany) | 把字符串分割为字符串数组                       |
| fromCharCode()           | 将字符编码转换为字符串，静态方法                   |

```javascript

注意：这三个方法的区分
var str="welcome to itany!";
// console.log(str);

/*
    截取方法
*/
//substr()
/*var s1=str.substr(2,3);//3代表3位
console.log(s1);
console.log(str.substr(2)); //如果未指定第二个参数，表示截取到末尾
console.log(str.substr(-5)); //支持负数，表示从后面数的第几个开始截取
console.log(str.substr(-5,2));*/

//substring()，常用
/*console.log(str.substring(2,3)); //不包括右边界[2,3)
console.log(str.substring(2));
console.log(str.substring(-5)); //不支持负数，会从头开始截取
console.log(str.substring(-5,2));
console.log(str.substring(5,2)); //具有自动交换能力，相当于str.substring(2,5)*/

//slice()
console.log(str.slice(2,3));//[2,3)
console.log(str.slice(2));
console.log(str.slice(-5)); //支持负数，表示从后面数的第几个开始截取
console.log(str.slice(-5,2)); //不具有自动交换能力
console.log(str.slice(5,2));

```

## 二十四.Date对象

```javascript

Date对象用于处理日期和时间。
用法：
var 日期对象=new Date(参数);
var today=new Date();
//var d1=new Date("2016-2-14 12:30:24");
var d1=new Date("2016/2/14 12:30:24");
var d2=new Date(2016,7,18,11); //月份取值为[0-11]，7表示8月
var d3=new Date(2134075923232);
console.log(today); 
/*console.log(d1);
console.log(d2);
console.log(d3);*/

```
###### 日期对象常用方法

| 方法名               | 说明                           |
| ----------------- | ---------------------------- |
| getDate()         | 返回一个月中的某一天(1~31)             |
| getDay()          | 返回一周中的某一天(0~6)，0表示周日         |
| getMonth()        | 返回月份(0~11)，0表示1月             |
| getFullYear()     | 以四位数字返回年份，代替getYear()        |
| getHours()        | 返回小时 (0 ~ 23)                |
| getMinutes()      | 返回分钟 (0 ~ 59)                |
| getSeconds()      | 返回秒数 (0 ~ 59)                |
| getMilliseconds() | 返回毫秒(0 ~ 999)                |
| getTime()         | 返回从GMT1970-1-1 0:0:0.0至今的毫秒数 |

###### 参数值及其对应的整数

| 值               | 整数             |
| --------------- | -------------- |
| Second 和 Minute | 0 至 59         |
| Hours           | 0 至 23         |
| Day             | 0 至 6（星期天至星期六） |
| Date            | 1 至 31（月份中的天数） |
| Month           | 0 至 11（一月至十二月） |

| Date方法分组 | 说 明            |
| -------- | -------------- |
| setXxx   | 这些方法用于设置时间和日期值 |
| getXxx   | 这些方法用于获取时间和日期值 |

###### 日期对象其他方法

```

另有一组和get方法对应的set方法，用于设置日期对象的某个值
toUTCString()：把Date对象转换为世界时格式的字符串
toLocaleString()：把Date对象转换为本地格式的字符串

```

###### 日期具有自动调节的功能

```

Date类型具有自动调节至正确日期的能力
如：2016.4.31会自动调整为2016.5.1


//计算某年某月有多少天？
var year=prompt("请输入年份：")*1; //2000
var month=prompt("请输入月份：")*1;  //2
//方式1		
/*var d=new Date(year,month-1,31);
var day=d.getDate(); //可能的取值：31、1、2、3
if(day==31){
    console.log("31天");
}else{
    console.log(31-day+"天");
}*/
//方式2
var d=new Date(year,month,0); //2000,2,0
console.log(d.getDate()+"天");
		
```

## 二十五.正则表达式

```

正则表达式（RegExp）是Regular Expression缩写，是用于查找符合某些规则的字符串的工具。
正则表达式是一个描述字符模式的对象，当检索某个文本时，可以使用一种模式来描述要检索的内容，RegExp 就是这种模式。
简单的模式可以是一个单独的字符，复杂的模式包括了更多的字符，并可用于解析、格式检查、替换等等。
可以规定字符串中的检索位置，以及要检索的字符类型等。

```

###### 正则表达式的组成

```javascript

匹配模式pattern
一个用于指定匹配规则的字符串，由三部分组成：
元字符：具有特殊含义的字符
量词：指定字符出现的次数
特殊符号：具有特定含义的符号
匹配特征attribute
一个可选的字符串，包含属性 “g”、“i” 和 “m”，分别用于指定全局匹配、忽略大小写和多行匹配
属性和方法
属性用于表示匹配状态，方法用于匹配操作

//使用字面量的方式定义正则表达式对象
var reg=/a/ig;  //判断是否包含字母a或A
//使用构造函数定义正则表达式
// var reg2=new RegExp("a","i");

//属性
// console.log(reg.ignoreCase);//是否忽略大小写
// console.log(reg.global);//是否全局匹配
// console.log(reg.multiline);//是否多行匹配
console.log(reg.exec(str));
//方法
// console.log(reg.test(str));  //返回true或false，测试方法，用于测试一个字符串是否符合正则表达式对象所指定的模式规则
console.log(reg.exec(str)); //返回找到的结果，搜索方法，用于在字符串中查找符合正则表达式对象所指定的模式的子字符串，返回找到的结果，若找不到则返回null


```

###### 元字符：正则表达式常用符号

| 符号   | 描述                              |
| ---- | ------------------------------- |
| \s   | 匹配任何的空白字符                       |
| \S   | 任何非空白字符                         |
| \d   | 匹配一个数字字符，等价于[0-9]               |
| \D   | 除了数字之外的任何字符，等价于[^0-9]           |
| \w   | 匹配一个数字、下划线或字母字符，等价于[A-Za-z0-9_] |
| \W   | 任何非单字字符，等价于[^a-zA-z0-9_]        |
| .    | 匹配除了换行符之外的任意字符                  |

大写的\s、\d、\w与小写的意思正好正反

###### 量词：正则表达式重复字符

| 符号    | 描述                              |
| ----- | ------------------------------- |
| {n}   | 匹配前一项n次                         |
| {n,}  | 匹配前一项n次，或者多次                    |
| {n,m} | 匹配前一项至少n次，但是不能超过m次              |
| *     | 匹配前一项0次或多次，等价于{0,}              |
| +     | 匹配前一项1次或多次，等价于{1,}              |
| ?     | 匹配前一项0次或1次，也就是说前一项是可选的，等价于{0,1} |

###### 特殊符号

| 符号    | 描述               |
| ----- | ---------------- |
| /…/   | 代表一个模式的开始和结束     |
| ^     | 匹配字符串的开始，即表示行的开始 |
| $     | 匹配字符串的结束，即表示行的结束 |
| [  ]  | 表示可匹配的列表         |
| ()    | 用于分组             |
| \|    | 表示或者             |
| [ ^ ] | 在[  ]中的尖括号表示非    |

```javascript

var reg1=/\d/;//判断是否包含数字
reg1=/[0-9]/;//判断是否包含数字
var reg2=/\d{2}/;//判断是否包含两个连续的数字
var reg3=/^\d$/;//判断是否是一个数字
var reg4=/[a-zA-Z]/;//判断是否包含字母
var reg5=/[a-z]/i;//判断是否包含字母
var reg6=/^[\u4e00-\u9fa5]{2,3}$/;//判断是否是二位或者三位中文
var reg7=/[\u4e00-\u9fa5]{2,3}/;//判断是否包含两个连续的中文或者3个连续的中文
var reg8=/[A|B]/;//判断是否包含A或者B或者|
var reg9=/[.]/;//将点号放入[]中，表示的是否包含点号
var reg10=/\./;//因为点号在正则表达式中有特殊含义的，需要反斜杠进行转义
var reg11=/^\d+$/;//判断是否是一位或者是多位数字
var reg12=/^\d*$/;//判断是否是空的或者是多个数字

```

###### String对象支持正则匹配的方法

```javascript

String对象的以下方法，支持使用正则表达式
search：检索与正则表达式相匹配的子字符串，返回第一个与regexp相匹配的子串的起始位置，若找不到则返回-1(对g无效)
match：检索与正则表达式相匹配的子字符串，返回第一个匹配结果(无全局标志g)或存放所有匹配结果的数组(有全局标志g)
replace：检索与正则表达式相匹配的子字符串，然后用第二个参数来替换这些子串，全局标志g有效
split：按照与正则表达式匹配的字符作为分隔符
```

###### 表单验证的步骤

```

首先定义表单验证方法，如doCheck()
在form元素的onsubmit事件中绑定，如：<form name=“frm” action=“…” onsubmit=“return doCheck()”>
在doCheck方法中获取要验证的表单元素的值进行验证，如不符合要求返回false，全部通过验证返回true

```

###### 文本框对象

```
文本框对象的属性、方法和事件
```

| 类别   | 名称         | 描述                                  |
| ---- | ---------- | ----------------------------------- |
| 事件   | onblur     | 失去焦点，当光标离开某个文本框时触发                  |
|      | onfocus    | 获得焦点，当光标进入某个文本框时触发                  |
|      | onkeypress | 某个键盘按键被按下并松开                        |
| 方法   | blur()     | 从文本域中移开焦点                           |
|      | focus()    | 在文本域中设置焦点，即获得鼠标光标                   |
|      | select()   | 选取文本域中的内容                           |
| 属性   | id         | 设置或返回文本域的id                         |
|      | value      | 设置或返回文本域的value属性的值 JavaScript基本包装类型 |

###### javascript的包装类型

```javascript

即基本类型的包装类型
为了便于操作基本类型，提供了三个特殊的引用类型： String 、Number和Boolean
每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，从而能够调用一些方法来操作这些数据。

```

## 二十六.Select、Option对象

```

Select
代表 HTML 表单中的一个下拉列表
Option
代表 HTML 表单中下拉列表中的一个选项。
在 HTML 表单中 <option> 标签每出现一次，一个 Option 对象就会被创建。

```

```

Option对象常用属性
text：设置或返回某个选项的纯文本值
value：设置或返回被送往服务器的值

```

## 二十七.客户端存储

#### cookie

​	

```

什么是Cookie
Cookie意为“甜饼”，是由W3C组织提出，最早由Netscape社区发展的一种机制。目前Cookie已经成为标准，所有的主流浏览器如IE、Netscape、Firefox、Opera等都支持Cookie。
Cookie实际上是一小段的文本信息。客户端请求服务器，如果服务器需要记录该用户状态，就使用response向客户端浏览器颁发一个Cookie。客户端浏览器会把Cookie保存起来。当浏览器再请求该网站时，浏览器把请求的网址连同该Cookie一同提交给服务器。服务器检查该Cookie，以此来辨认用户状态。服务器还可以根据需要修改Cookie的内容。

出于记录用户特定数据的目的，需要客户端数据存储技术
Cookie
优点：可与服务器端交互、浏览器自动管理不同站点的数据并发送到服务器端
缺点：安全性受限、数据量受限、可用性受限、明文存储

```

###### 写cookie

```javascript

设置指定格式字符串：cookie名=cookie值;expires=失效时间的GMT格式字符串
赋给document对象的cookie属性
如果有多个，则重复上述操作
如果未指定expires，则浏览器关闭cookie就失效

```

###### 读cookie

```

通过document.cookie整体读取，需要进行拆分
先按照“;”拆分为多个键值对
再按照“=”拆分为键和值

```

```

通常在读写cookie时会进行编码和解码的操作，防止数据出现异常
考虑到值当中可能会出现特殊符号，如”name”=“tom;cruise”，一般在写cookie时会对value进行编码（encodeURIComponent）；读取时对value进行解码（decodeURIComponent）

```

#### WebStorage

```javascript

HTML5引入的一个非常重要的功能，可以在客户端本地存储数据，功能比cookie强大，存储数据量也远大于cookie的4KB，官方建议为每个网站5MB，部分浏览器可支持到10MB甚至更多
包括2个不同类型
sessionStorage：浏览器关闭后数据即失效
localStorage：数据永久有效

```

#### WebStorage用法

```javascript
写
localStorage.变量名=值;
读
var value= localStorage.变量名;
以上用法要求变量名必须符合JS命名规范

```

#### WebStorage常用方法

```javascript

length：存储的键值对数量
setItem(key,value)：写数据
getItem(key)：根据key读数据
removeItem(key)：根据key删除数据
clear()：删除所有数据
key(index)：获取index位置的key

```

```javascript

Cookie
优点：可与服务器端交互、浏览器自动管理不同站点的数据并发送到服务器端
缺点：安全性受限、数据量受限、可用性受限、明文存储
Web Storage
HTML5新增，分为localStorage和sessionStorage
优点：操作简单、不会自动发送到服务器端、存储空间大
缺点：安全性受限、永不过期、不区分站点、明文存储

```

