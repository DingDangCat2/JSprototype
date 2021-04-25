// var a={"a":1}
// var  b=a.valueOf();
// console.log(Number(b)); 
// var a= "    02x5a";
// console.log(parseInt(a));
// var a ="dfgj";
// console.log(parseFloat(a));
// var a=[1,2,3];
// console.log(a.toString());
// var a=010;
// console.log(a.toString(2));
// function c(){var a=new Object();
//     console.log(a.constructor.toString())}
//     c();
// var a=new Number();
// console.log(a.constructor);
// var a="sdfg";
// console.log(a.constructor);
// var a =new Object();

// console.log(a.constructor);
// console.log(a.hasOwnProperty("name"));
// console.log(Object.constructor)
// console.log(Object.hasOwnProperty("constructor"))
// function names(params) {
//     this.params=params;
// }
// var b=new names('zx');
// console.log(b.prototype)
//  function a(){}
//  var b=new a();
//  console.log(b.constructor)
//  console.log(a.constructor);
// console.log(a.prototype);
// const as=new Object();
// console.log(as)
// console.log(as.constructor);
// console.log(as.prototype);
// function a(){
//     this.text=function(){console.log('sss');}
// }
// var b=new a();
// console.log(a);
// console.log(a.prototype);
// console.log(b.text);
// console.log(b.__proto__)
// console.log(b)
// console.log(b instanceof Object)
// console.log(Function.prototype.__proto__);
// console.log(Object instanceof Object);
// console.log(Function instanceof Function)
// console.log(b instanceof b);
// console.log(Function instanceof Object);
// var a=function(){}
// console.log(a.constructor);
// console.log(a.prototype.constructor)

// var fn=function(){
//     Object.prototype.a=function(){
//         console.log("a")
//     }
//     Function.prototype.b=function(){console.log("b");}
// }
// var  f=new fn();
// f.a();

// console.log(Function.prototype);
// fn();
// var a=4;
// function f(){
   
//     console.log(a);
    
// }
// f();


// var fn=function (){
//     console.log("c");
// }
// var a=5
// function f(){
//     var a=3;
//     console.log(a)
// }
// f();
// console.log(a);
// function a(){}
// var a;
// console.log(typeof a)

//  var a=2;
//  function a(c){
//     console.log(c)
//  }
//  a(2)
//  var a ;
//  function a(){}
//  a=2;
//  console.log( a)
// if(!c){
//   var  c=3;
// }  console.log(c);
var a={n:1}
var b=a;
 a.x=a={n:2}
 console.log(a.x,b.x);