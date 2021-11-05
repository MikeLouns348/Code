function count_To_Ten () {
    var Digit = "";
    var X = 1;
    while(X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
//counts the characters in the string
function String_Length() {
    var String1 = "How many characters are in this string?";
    document.getElementById("Length").innerHTML = String1.length;
}
//goes through a list and displays each item until Y = the number of items in the list
function for_Loop () {
    var Instruments = ["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute",];
    var Content = "";
    var Y;
    for(Y = 0; Y<Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List").innerHTML = Content;
}
//makes an array and then displays a sentence with an object from the array
function array_Function () {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture the cat is " + Cat_Picture[2] + ".";
}
//const demo
function constant_Function () {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The Cost of the " + Musical_Instrument.brand + " " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}
//let changes the value of a variable temporarily
function let_Function () {
    var X = 8;
    document.write(X + "<br>");
    {
        let X = 10;
        document.write(X + "<br>");
    }
    document.write(X);
}

//return demo
function myFunction(name) {
    return "Hello " + name;
    
}
//cant make this work with a button?
//function let_Demo (){
    let car = {
        make: "Dodge",
        model: "Viper",
        year: "2021",
        color: "red",
        description : function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
 document.getElementById("Let_demo").innerHTML = car.description();
//}

//continue break demo
function continue_Break () {
    var X = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        else if (i === 6) { break; }
       
        X += "The number is " + i + "<br>";
      }
    document.getElementById("Continue_Break").innerHTML = X;
}