function my_Function (){
document.getElementById("Test").innerHTML = 0/0; //replaces element with NaN
}

function is_Number1 (){
    var X = "This is a string";
    document.getElementById("Test1").innerHTML = isNaN(X);//replaces element with true or false
}

function is_Number2 (){
    var Z = 007;
    document.getElementById("Test2").innerHTML = isNaN(Z); //replaces element with true or false
}

function Beyond (){
    document.write(2E310); //prints infinity
}

function the_Smallest (){ 
    document.write(-2E310); //prints negative infinity
}

function greater_Than (){
    document.write(10 > 2); // prints true or false
}
function less_Than (){
    document.write(10 < 2); // prints true or false
    console.log(10 < 2); // prints true or false in the console
}

function console_Math (){
    console.log(2+2); //does math in the console
}

function double_Equal1 (){
    document.write(10==10); //compares objects and prints true or false
}

function double_Equal2 (){
    document.write(3==11); //compares objects and prints true or false
}

function Compare1() {
    var x = "6/15/2020";
    var y = "June 15th, 2020";
    document.write(x===y); //compares objects and prints true or false
}

function Compare2() {
    var x = "6/15/2020";
    var y = "6/15/2020";
    document.write(x===y); //compares objects and prints true or false
}

function AND() {
    var x = 5;
    var y = 2;
    var a = 10;
    var b = 4;
    document.write(x>y && a>b); // (AND) compares objects and prints true or false depending on both sets
}

function AND2() {
    var x = 5;
    var y = 10;
    var a = 10;
    var b = 4;
    document.write(x>y && a>b); // (AND) compares objects and prints true or false depending on both sets
}

function OR() {
    var x = 5;
    var y = 10;
    var a = 10;
    var b = 4;
    document.write(x>y || a>b); // (OR) compares objects and prints true or false depending on one set
}

function OR2() {
    var x = 5;
    var y = 10;
    var a = 10;
    var b = 20;
    document.write(x>y || a>b);// (OR) compares objects and prints true or false depending on one set
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10); // checks if value is NOT true
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(5 > 10); // checks if value is NOT true
}