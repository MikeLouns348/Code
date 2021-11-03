var X = 10;
//perfomrs math base on global variable and local variable
function Function_1(){
    var Y = 20;
    document.write(X+Y);
    console.log(X+Y);
}
//tries to use an undefined local variable 
function Function_2(){
    document.write(3 * Y);
    console.log(3 * Y);
} 
//performs the functions without input from user
Function_1();
Function_2();

//gets the current day number and compares it to 31. Outputs 31 - current day number
function myFunction(){
    const today = new Date();
    if (new Date().getDate() < 31 ){
      document.getElementById("Days").innerHTML = 31 - today.getDate() + " days until the new year";  
    }
}

//determines if user input age variable is larger or smaller than 18
function Vote_Function() {
    Age = document.getElementById("Age").value;
    if (Age > 18) {
        can_Vote = "You are old enough to vote.";
    }else if (Age == 18){
        can_Vote = "Congratulations on your first time voting!"
    }else{
        can_Vote = "You are not old enough to vote yet."
    }
    document.getElementById("Vote").innerHTML = can_Vote;
}
    

