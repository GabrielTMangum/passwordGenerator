var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "'", "[", "]", "{", "}", ";", ":", "?", "/", ".", ",", ">", "<", "|"];
var numbChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var pass = "";

function genPass (){

    var length = prompt("How long would you like your password to be?")
    var Special = confirm("Do you want special characters in your password?");
    var numbers = confirm("Do you want numbers in you password?")
    var lowCase = confirm("Do you want lowercase letters in your password?");
    var upCase = confirm("Do you want uppercase letters in your password?")

    

    document.getElementById("exampleFormControlTextarea1").innerHTML = "Placeholder Text";
}
function copyToClip(){

}