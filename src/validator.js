const PASSWORD_MINIMUM_LENGHT = 8

function hasMinLenght (password) {
    return password.length >= PASSWORD_MINIMUM_LENGHT
}

function hasNumbers (password) {
    const regex = new RegExp(/[0-9]/)
    return regex.test(password)
}

function hasCapitalLetter (password) {
  const regex = new RegExp(/[A-Z]/)
  return regex.test(password)
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

    if (!hasMinLenght(pwd)) {
        result = false;
        console.log('password minimum 8 characters')
    } else if (!hasNumbers(pwd)) {
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

module.exports.hasNumbers = hasNumbers
module.exports.hasMinLenght = hasMinLenght
module.exports.hasCapitalLetter = hasCapitalLetter
