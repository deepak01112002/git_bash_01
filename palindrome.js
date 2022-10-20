let name = "naman";
let new_name = "";

for(let i = name.length-1; i>=0; i--){
     new_name += name[i];
};

  if(new_name==name){
     console.log("It is a Palindrome"); 
  }
  else{
     console.log("Not a Prime Number");
  }