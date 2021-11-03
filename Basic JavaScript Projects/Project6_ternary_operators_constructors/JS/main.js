//defines the age requiremetns and outputs correct response depending on input by user
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age >= 18) ? "You are old enough" : "You are not old enough";
    document.getElementById("Vote").innerHTML= Can_vote + " to vote.";
}

//creats a construtor with the elements (Make, Model, Year and Color)
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

//defines the entries for 3 vehicles that have been given names
var Jack = new Vehicle("Dodge","Viper",2020,"Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//diplays a sentence that utilizes a construtor to reference specific aspects of a user entry
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Make + 
    " " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

//uses a nested funtion "Plus One" to add 1 to 0
function Score_Keeper() {
    document.getElementById("Score").innerHTML= Count();
    function Count (){
        var Starting_score = 0;
        function Plus_One(){Starting_score += 1;}
        Plus_One();    
        return Starting_score;
    }
}