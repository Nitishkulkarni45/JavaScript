// console.log('im learning js');
// let fullName = prompt("enter your name");
// let namee = ' ';
// for(let val of fullName){
//     if(val !== 'i'){
//         namee = namee + val;
//     }
//     else{
//         namee = namee + 'i';
//         namee = namee + 'a';
//     }
//     console.log("name =",namee);
// }


// let fullName = prompt("Enter you name");
// let userName = "@"+fullName+fullName.length;
// console.log(userName);

//-----------------------------------------------------------------------------------------------
//Day-3
// learning arrow functions
//Arrow function value will be always stored in a variable 
const fun = (x,y)=>{
 let v = x + y;
 console.log(v);
}

//practice question: take a string as an argument and count the vowels in it
// let str = prompt("Enter the name");
// function count(string){
//     let cnt = 0;
//     for(let char of string){
//        if(char == 'a'||char == 'e'||char == 'i'||char == 'o'||char == 'u'){
//         cnt++;
//        }
//     }
//     console.log(cnt);
// }
// count(str);

// The same code using arrow functions
// let val = prompt("Enter your name");
// let count1 = (str)=>{
// let ct = 0;
// for(let car of str){
//     if(car == 'a'||car == 'e'||car == 'i'||car =='o'||car == 'u'){
//         ct++;
//     }
    
// }
// console.log(ct);
// }
// count1(val);

// Practice question : print the sq roots of numerbs in an array by using call back functions
// let arr = [1,2,3,4];
// arr.forEach( (value)=>{
//     console.log(value*value);


// })Practice Question: print the largest element in an array:
let arr = [1,5,3,56,34,789];
let final = arr.reduce((cur,next)=>{
    if(cur>next){
        return cur;
    }
    else{
        return next
    }
})
console.log(final);