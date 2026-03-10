let a=[1,2,true,'hi',3.2]
a.pop();//use to remove one element from last
console.log(a);
a.push(999999);//use to add on element from last
console.log(a);
a.shift();//use to remove on element from first
console.log(a);
a.unshift('hello');//use to add on element from first
console.log(a);
a.includes(a);//to checkout if element is included in array or not(true or false)
console.log(a.includes(2));
console.log(a.includes(5));