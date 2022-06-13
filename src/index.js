function minSize (pwd) {
    if (pwd.length < 8) {
        return false;
    } else {
        return true
    }
}

function checkNumbers (pwd) {
    var result = false
    for (var i = 0; i < pwd.length; i++) {
        var number = parseInt(pwd.charAt(i))
        if (!isNaN(number)) {
            result = true
        }
    }

    return result;
}

function checkCapitalize (pwd) {
    var capitalized = false
    for (var i = 0; i < pwd.length; i++) {
        if (!checkNumbers(pwd.charAt(i))) {
            if (!checkSpecialChars(pwd.charAt(i))) {
                if (pwd.charAt(i) == pwd.charAt(i).toUpperCase()) {
                    capitalized = true
                }
            }
        }
    }

    return capitalized;
}

function checkSpecialChars (pwd) {
    var spcChars = "'\"!@#$%ˆ&*()_-+=§[]{}\\\`±|/?<>,."
    var spcCharacter = false
    for (var i = 0; i < pwd.length; i++){
        if (spcChars.indexOf(pwd.charAt(i)) != -1) {
            spcCharacter = true
        }
    }
    return spcCharacter;
}

function checkPwd(pwd) {
    var result = true;

    if (!minSize(pwd)) {
        result = false;
        console.log('password minimum 8 characters')
    } else if (!checkNumbers(pwd)) {
        result = false
        console.log('password needs numbers')
    } else if(!checkCapitalize(pwd)) {
        result = false
        console.log('password needs capitalized word');
    } else if (!checkSpecialChars(pwd)){
        result = false;
        console.log('password needs special characters')
    }

    return result
}

console.log(checkPwd('AaBbCcDd1@'))