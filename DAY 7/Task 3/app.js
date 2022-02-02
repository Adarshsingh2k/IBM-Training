// Practice args
 function sum(...args){
     return args.reduce((result,item)=>result+item,0);
 }

console.log(sum(1,2,3,4,5,6,7,8,9));

// practice SpreadOperator
function sum(...args){
    return args.reduce((result,item)=>result+item,0);
}
const numbers = [1, 2, 3,4,5,6];

console.log(sum(...numbers));