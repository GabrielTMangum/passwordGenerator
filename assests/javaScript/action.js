


function genPass() {
    var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "'", "[", "]", "{", "}", ";", ":", "?", "/", ".", ",", ">", "<", "|"];
    var numbChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var passLength = prompt("How long would you like your password to be?")
    var special = confirm("Do you want special characters in your password?");
    var number = confirm("Do you want numbers in you password?")
    var lowCase = confirm("Do you want lowercase letters in your password?");
    var upCase = confirm("Do you want uppercase letters in your password?")

    var arr = [];

    if (special) {
        arr.push(specChar);
    } if (number) {
        arr.push(numbChar);
    } if (lowCase) {
        arr.push(lowerChar);
    } if (upCase) {
        arr.push(upperChar);
    } else {
        alert("what do you want from me?");
    }

    var pass = "";
    
    for (i = 0; i < passLength; i++){

        var whichArray = Math.floor(Math.random() * (arr.length + 1));

        var thing = arr[whichArray].length;

        var whichChar = Math.floor(Math.random() * thing + 1);

        var randomChar = arr[whichArray][whichChar];

        pass += randomChar;
    }

    document.getElementById("exampleFormControlTextarea1").innerHTML = pass;
}



// function copyToClip() {

// }