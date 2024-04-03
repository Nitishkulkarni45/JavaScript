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
let str = prompt("Enter the name");
function count(string){
    let cnt = 0;
    for(let char of string){
       if(char == 'a'||char == 'e'||char == 'i'||char == 'o'||char == 'u'){
        cnt++;
       }
    }
    console.log(cnt);
}
count(str);