let fu=5;
for( let i=0;i<10;i++){
var pi=3;
console.log(i);
let li="nu";
console.log(li);

}

console.log(pi + "jjkjk"+fu);


let add=(a,b)=> a+b;
console.log(add(10,20));

// Array and its method
let newArray= [1,2,3,4];
newArray.pop();
console.log(newArray);

newArray.push(10,40);
console.log(newArray);

newArray.shift();
console.log(newArray);

newArray.unshift();
console.log(newArray);

let arr1=newArray.slice(0,2);
console.log(newArray);
console.log(arr1);



let findArray=newArray.findIndex((rank,index)=> rank==10 && index>1);
console.log(findArray);


let arr2=[1,2,3,4,5,6,7,8,9];
console.log(arr2);
let arrSplice=arr2.splice(1,5,10,11,12);
console.log("Spliced Array"+arrSplice);
console.log(arr2);