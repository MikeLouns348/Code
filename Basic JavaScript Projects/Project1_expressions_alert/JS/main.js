var A = "If you take 30", B =" and add 40 you get ";
var B = B.fontcolor("blue");
var A = A.fontcolor("green");
var C = 30;
var D = 40;
var Add = (C+D);

function My_First_Function () {
    var str = "this is green!"; //this is the text that will replace the old text on the button after press
    var result = str.fontcolor("green"); //this changes the button text color green
    document.getElementById("Green_Text").innerHTML = result; //this assigns the button text the id "Green Text"
    
}

window.alert("Hello there"); //this is the popup when the page is loaded
document.write(A + B + Add); //This concatenates the variables

