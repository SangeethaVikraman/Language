/*
function fac(n){
  if(n==0)
    return 1;
  else
    return fac(n-1)*n;
};
console.log(fac(6));


Math.max(2,3,4,5,6)
Math.sqrt();
Math.min();
Math.cos - Math.acos
Math.random()
Math.PI
Math.floor Math.ceil  Math.round
console.log(sum(range(1,10)));

like alert("hello") --> confirm("shall we?"); -true oR false  ---prompt("pick a num",""));
Number(x) - converts x to number (eg. from string to number)
isNaN
str.length
var mac = []   mac.push("mack")
mac.shift() mac.unshift()
mac.indexOf(2)  mac.lastIndexOf
mac.slice(2,4)
strings also have slice and indexOf methods
"string".trim()  -- removes spaces tabs and nnewline characters
inside function -- console.log(arguments.length) -- will give number of args given to it

function triangle(n)
{var str="";
for(var i=0;i<n;i++)
{str = "";
	for(var j=0;j<=i;j++)
	{
		str = str+"#";
	}
	
	console.log(str);
}
}
console.log(triangle(7));



var num = 15,str="";
if(num%3==0)
	str = str + "fizz";
if(num%5==0)
	str = str + "buzz";
console.log(str);

*/

var num = [];
num.push("hey");
num.push("one","two",2);
console.log(num);
console.log(num.pop());
console.log(num);
console.log(num.join());
