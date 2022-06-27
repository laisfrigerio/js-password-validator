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

function hasLowerCase (password) {
    const regex = new RegExp(/[a-z]/)
    return regex.test(password)
}

function valid(password) {
    if (!hasMinLenght(password)) {
        console.log('Password must have at least 8 characters')
        return false
    }
    
    if (!hasNumbers(password)) {
        console.log('Password must have at least 1 number')
        return false
    }
    
    if (!hasCapitalLetter(password)) {
        console.log('Password must have at least 1 capital letter')
        return false
    }

    if (!hasLowerCase(password)) {
        console.log('Password must have at least one lower case letter')
        return false
    }
    
    if (!hasSpecialCharacter(password)){
        console.log('Password must have at least one special characters')
        return false
    }

    return true
}

module.exports = {
    hasCapitalLetter,
    hasLowerCase,
    hasMinLenght,
    hasNumbers,
    hasSpecialCharacter,
    valid
}
