function my_Function (){
document.getElementById("Test").innerHTML = 0/0;
}

function is_Number1 (){
    var X = "This is a string";
    document.getElementById("Test1").innerHTML = isNaN(X);
}

function is_Number2 (){
    var Z = 007;
    document.getElementById("Test2").innerHTML = isNaN(Z);
}

function Beyond (){
    document.write(2E310);
}

function the_Smallest (){
    document.write(-2E310);
}

function greater_Than (){
    document.write(10 > 2);
}
function less_Than (){
    document.write(10 < 2);
    console.log(10 < 2);
}

function console_Math (){
    console.log(2+2);
}

function double_Equal1 (){
    document.write(10==10);
}

function double_Equal2 (){
    document.write(3==11);
}

function Compare1() {
    var x = "6/15/2020";
    var y = "June 15th, 2020";
    document.write(x===y);
}

function Compare2() {
    var x = "6/15/2020";
    var y = "6/15/2020";
    document.write(x===y);
}

function AND() {
    var x = 5;
    var y = 2;
    var a = 10;
    var b = 4;
    document.write(x>y && a>b);
}

function AND2() {
    var x = 5;
    var y = 10;
    var a = 10;
    var b = 4;
    document.write(x>y && a>b);
}

function OR() {
    var x = 5;
    var y = 10;
    var a = 10;
    var b = 4;
    document.write(x>y || a>b);
}

function OR2() {
    var x = 5;
    var y = 10;
    var a = 10;
    var b = 20;
    document.write(x>y || a>b);
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(5 > 10);
}