const PASSWORD_MINIMUM_LENGHT = 8

function hasMinLenght (password) {
    return password.length >= PASSWORD_MINIMUM_LENGHT
}

function hasNumbers (password) {
    const regex = new RegExp(/[0-9]/)
    return regex.test(password)
}

function hasSpecialCharacter (password) {
  const regex = RegExp(/[*@!#%&()^~{}<>]/)
  return regex.test(password)
}

function hasCapitalLetter (password) {
    const regex = new RegExp(/[A-Z]/)
    return regex.test(password)
}

function valid(pwd) {
    if (!hasMinLenght(pwd)) {
        console.log('password minimum 8 characters')
        return false
    }
    
    if (!hasNumbers(pwd)) {
        console.log('password needs numbers')
        return false
    }
    
    if (!checkCapitalize(pwd)) {
        console.log('password needs capitalized word')
        return false
    }
    
    if (!checkSpecialChars(pwd)){
        console.log('password needs special characters')
        return false
    }

    return true
}

module.exports.hasMinLenght = hasMinLenght
module.exports.hasNumbers = hasNumbers
module.exports.hasSpecialCharacter = hasSpecialCharacter
module.exports.hasCapitalLetter = hasCapitalLetter
module.exports.valid = valid
