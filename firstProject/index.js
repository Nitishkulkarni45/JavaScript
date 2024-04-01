console.log('im learning js');
let fullName = prompt("enter your name");
let namee = ' ';
for(let val of fullName){
    if(val !== 'i'){
        namee = namee + val;
    }
    else{
        namee = namee + 'i';
        namee = namee + 'a';
    }
    console.log("name =",namee);
}