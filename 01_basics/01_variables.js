const userId = 4070
let userName = "Shibam"
var userPassword = "qwerty"
userCity = "Noida" // without declaring any variable JS also memory and its value but it is not a good practice.
let userState;
// userId = 4070  // we can't change or reassign value in const keyword

console.log(userId)

userName = "Roy"
userPassword = "qwe123"
userCity = "Gurugram"

console.table([userId, userName, userPassword, userCity, userState])

/*
Notes :
Prefer not to use var
because of issue in block scope and functional scope
*/