var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "'", "[", "]", "{", "}", ";", ":", "?", "/", ".", ",", ">", "<", "|"];
var numbChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function genPass() {


    var passLength = prompt("How long would you like your password to be?")
    if (passLength < 8 || passLength > 128) {
        alert("please input a length that is greater than 7 and less than 129")
    } else {
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
        }

        var pass = "";

        for (i = 0; i < passLength; i++) {

            var whichArray = Math.floor(Math.random() * arr.length);

            var thing = arr[whichArray].length;

            var whichChar = Math.floor(Math.random() * thing);

            var randomChar = arr[whichArray][whichChar];

            pass += randomChar;
        }

        document.getElementById("exampleFormControlTextarea1").innerHTML = pass;

        var copyBtn = document.getElementById("copyToClipboard");

        copyBtn.className = "btn-danger btn round  btn-lg rounded-pill";
        copyBtn.removeAttribute("disabled");
    }
}

function copyToClip () {
    var copyPass = document.getElementById("exampleFormControlTextarea1");
    copyPass.select();
    copyPass.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyPass.value);
}



// function copyToClip() {

// }