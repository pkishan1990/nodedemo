/** Reverse String **/
var revString = '', array = [];
for (i = 0; i < revString.length; i++) {
    array.push(revString.charAt(i));
}
function reverseString(revString) {
    for (i = revString.length - 1; i > -1; i--) {
        console.log(revString[i]);
    }
}
reverseString('string');