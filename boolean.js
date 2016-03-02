var isValid=false;
function checkVarType(chkValue) {
    if (typeof chkValue == 'boolean') {
        return !chkValue;
    } else {
        console.log('not a boolean value');
    }
}

var newBoolean = checkVarType(true);
console.log(newBoolean);