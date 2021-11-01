function my_Dictionary () {
    var Game = {
        Title:"Destiny",
        Genere: "First Person shooter",
        Platform: "Play Station 5",
        Game_as_Service: "Yes",
        Years_Since_Launch: "9"
    };
    delete Game.Years_Since_Launch;
    document.getElementById("Dictionary").innerHTML = Game.Years_Since_Launch;
}