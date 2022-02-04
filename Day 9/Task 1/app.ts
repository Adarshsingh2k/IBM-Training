// import "./styles.css";

let number : number=1;
console.log(number);

function addNumbers(a: number, b: number) { 
  return a + b; 
} 

var sum: number = addNumbers(10, 15) 

console.log('Sum of the two numbers is: ' +sum); 

// any
function anyFn(a: number, b) { 
  return a + b; 
} 

var sum2: any = anyFn(10, "adarsh")
console.log(sum2)

// String
function strCt(a: string,b:string){
  return a+" "+b;
} 
console.log(strCt("adarsh","singh"));

//Array
var marks:number[]= [20,30,40,50,25];
function itr(item:number[]){
  for(var i=0;i<item.length;i++){
    console.log(item[i]);
  }
}

itr(marks);

//object
let employee: {
  fname: string,
  lname:string,
  age:number
}={
  fname:"Adarsh",
  lname:"Singh",
  age:21
}
console.log(employee);

// tupple
let data:[string,number,number?]=["adarsh",20];
console.log(data);

//enum
enum brands{
nike,
adidas,
puma,
DG
}
console.log(brands)