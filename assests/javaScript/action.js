// These are my arrays that allow for me to later pick and choose which charachters from which array I want to put into my password.
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "'", "[", "]", "{", "}", ";", ":", "?", "/", ".", ",", ">", "<", "|"];
var numbChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// This is the function that runs when the generate password button is pressed.
function genPass() {

    // This prompt asks the user how long they want the password to be and the saves that informantion into the passLength variable.
    var passLength = prompt("How long would you like your password to be?")
    // This if is meant to make sure that the length inputed is greater than 8 and less 128 and if it's outside those bounds it tells the user what the bounds are.
    if (passLength < 8 || passLength > 128) {
        alert("please input a length that is greater than 7 and less than 129")
        // these confirms are meant to ask the user which elements they want in their password.
    } else {
        var special = confirm("Do you want special characters in your password?");
        var number = confirm("Do you want numbers in you password?")
        var lowCase = confirm("Do you want lowercase letters in your password?");
        var upCase = confirm("Do you want uppercase letters in your password?")

        var arr = [];
        // these if's take the users answers and push them into an empty array which we'll use to randomly choose the elements within those multi-dimensional arrays further down.
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
        
        // This for loop uses randomizers to randomly select one of the arrays within the arr array and then it randomly selects a character within one of those arrays.
        for (i = 0; i < passLength; i++) {

            var whichArray = Math.floor(Math.random() * arr.length);

            var thing = arr[whichArray].length;

            var whichChar = Math.floor(Math.random() * thing);

            var randomChar = arr[whichArray][whichChar];

            pass += randomChar;
        }
        // This line takes the password that gets generated and then pushed it into the text area on the actual page.
        document.getElementById("exampleFormControlTextarea1").innerHTML = pass;

        // These lines make the copy to clipboard button become "active" after the password is generated.
        var copyBtn = document.getElementById("copyToClipboard");

        copyBtn.className = "btn-danger btn round  btn-lg rounded-pill";
        copyBtn.removeAttribute("disabled");
    }
}

// This function makes the copy to clipboard button actual function as it should.
function copyToClip () {
    var copyPass = document.getElementById("exampleFormControlTextarea1");
    copyPass.select();
    copyPass.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyPass.value);
}
