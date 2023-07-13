//your JS code here. If required.

let map=new Map();

let str=prompt("Enter a string")
function firstNonRepeatedCharacter(string) {
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (string.indexOf(char) == i && string.indexOf(char, i + 1) == -1) {
            return char;
        }
    }
    return null;
}

		
alert(firstNonRepeatedCharacter(str))
