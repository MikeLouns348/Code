
//Concatentates all the variables
function relativity() {
    var part_1 = "E";
    var part_2 = "=";
    var part_3 = "M";
    var part_4 = "C";
    var part_5 = "^2";
    var equation = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = equation
}

//slices out a section of a sentence and makes it upper case
function slice_Method() {
    var Sentence = "All work and no play makes Jack a dull boy.";
    var Section = Sentence.slice(27,31);
    document.getElementById("Slice").innerHTML = Section.toUpperCase();
}

//converts the number to a string
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//displays the number to a set number of digits
function precision_Method() {
    var X = 182.2145112255775524;
    document.getElementById("Precision").innerHTML = X.toPrecision(5);
}

//Converts a number to a string and rounds to the number of decimal points
function fixed_Method() {
    var X = 182.2145112255775524;
    document.getElementById("Fixed").innerHTML = X.toFixed(5);
}

//returns the value of a string
function value_Method() {
    var X = "This a string";
    document.getElementById("ValueOf").innerHTML = X.valueOf();
}