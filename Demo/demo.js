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


// Join mETHOD
let str2="My name is adarsh singh";
let str2spl=str2.split(" ");
console.log(str2spl);
let joinstr=str2spl.join(" and ");
console.log(joinstr);


// Map method
let arrOne=[1,2,3,4,5,6,7,8,9];
let arrTwo=arrOne.map((item)=>{
return item*2;
});
console.log(arrTwo);

// Filter method
let arrOne=[1,2,3,4,5,6,7,8,9];
let arrTwo=arrOne.filter((item)=>{
return item%2===0;
});
console.log(arrTwo);

// Reduce Method
let arrOne=[1,2,3,4,5,6,7,8,9];
let arrTwo=arrOne.reduce((item)=>{
return item%2===0;
});
console.log(arrTwo);


// Objects 
const stud={
    firstName:"adarsh",
    lastName:"Singh",
    age: 20
};

// to get keys=> key
// to get values use student[key]
for(key in stud){
    console.log(key);
    
}
for(key in stud){
    console.log(stud[key]);
    
}


// rest Parameters
function showRest(a,b,...args){
    console.log(a);
    console.log(b);
    console.log(args);
    
}
showRest(1,2,3,4,5,6);

// spread operator
let arrOne=[1,2,3];
let arrTwo=[4,5,...arrOne,6];
console.log(arrTwo);

//Asynchronous JS
// 1.SetTimeOut()
setTimeout(()=>{
    console.log("hello Adarsh");
}, 4000);

//2. Promises
let x=1;
let prom= new Promise((resolve,reject)=>{
    if(x===1){
        resolve("Promise done");
    }
    else reject("failed");
})
console.log(prom);