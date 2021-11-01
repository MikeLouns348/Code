function addition_Function() {
var addition = 2+2; //adds 2 and 2
document.getElementById("Math").innerHTML = " 2+2 = " + addition;  // replaces element text with result
}

function subtraction_Function() {
    var subtraction = 5-3; //
    document.getElementById("Math2").innerHTML = " 5-3 = " + subtraction; // replaces element text with result
}

function multiplication_Function() {
    var multiply = 6*8; //
    document.getElementById("Math3").innerHTML = " 6*8 = " + multiply; // replaces element text with result
}

function division_Function (){
    var divide = 48/6; // divides 48 by 6
    document.getElementById("Math4").innerHTML = " 48/6 = " + divide; // replaces element text with result
}

function more_Math (){
    var simple_Math = (1+2) * 10/2 -5; // combines multipler operators
    document.getElementById("Math5").innerHTML = "1 + 2 Multiplied by 10, divided in half and then subtracted by 5 = " + simple_Math;  // replaces element text with result
}

function modulus_Operator (){
    var simple_Math2 = 25 % 6; //displays the remainder of 25 divided by 6
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of " + simple_Math2; // replaces element text with result
}

function negation_Operator (){
    var x = 10; //makes something negative
    document.getElementById("Math7").innerHTML = "10 * -1 = " + -x; // replaces element text with result
}

function count_Up (){
    var x = 5;
    x++; //adds 1 
    document.getElementById("Math8").innerHTML = x; // replaces element text with result
}

function count_Down (){
    var y = 5.25;
    y--; //subtracts 1
    document.getElementById("Math9").innerHTML = y; // replaces element text with result
}

function random_Percent (){
    var percent = Math.random(); // random number between 0 and 1
    document.getElementById("Math10").innerHTML = percent; // replaces element text with result
}

function random_100 (){
    var rand100 = Math.random() * 100; //random number between 0 and 100
    document.getElementById("Math11").innerHTML = rand100; // replaces element text with result
}

function random_Rounded (){
    var round = Math.round(Math.random() * 100); //random number between 0 and 100 rounded
    document.getElementById("Math12").innerHTML = round; // replaces element text with result
}