// Map method
let arrOne=[1,2,3,4,5,6,7,8,9];
let arrTwo=arrOne.map((item)=>{
return item*2;
});
console.log(arrTwo);
let arrThree=arrOne.map((item)=>{
    return item/10;
    });
    console.log(arrThree);


// Filter method
let arrOne=[1,2,3,4,5,6,7,8,9];
let arrTwo=arrOne.filter((item)=>{
return item%2===0;
});
console.log(arrTwo);

let arrOdd=arrOne.filter((item)=>{
    return item%2!=0;
    });
    console.log(arrOdd);

// Reduce Method
let arrOne=[1,2,3,4,5,6,7,8,9];
let arrTwo=arrOne.reduce((sal,item)=>{
    return sal+item;
},0);
console.log(arrTwo);