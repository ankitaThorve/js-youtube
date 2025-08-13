const accountId = 44567
let accountEmail = 'ankita@gmail.com'
var accountPassword = '12345'
accountCity = 'Jaipur'

// accountId = 2 //not allowed
accountEmail = 'ankita@india.com'
accountPassword = '22338'
accountCity = 'Pune'
let accountState;

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and function scope
*/