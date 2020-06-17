let userEmail = 'sumanth123456'
let password = 'sumanth1234'

let useCheck = function(uname){
    if((uname.includes(123)) && (uname.length > 12)){
        return true
    }
    return false
}

console.log(useCheck(userEmail));

let passcheck = function(pass){
    if((pass.includes(1234)) && (pass.length > 10)){
        return true
    }
    false
}


console.log(passcheck(password));
