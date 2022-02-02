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

stud.class=10;
console.log(stud);
delete stud.class;
console.log(stud);

