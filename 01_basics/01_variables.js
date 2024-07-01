const accountId=143552
let accountEmail="Rohin@gmail.com"
var accountPassword="pwd" //We dont use var anymore, we only use let
accountCity="bengaluru" //we acn also declare variables without specifying const, var or let but it is bad practice


/*
    we dont use var because it does not respect the scope of the variable, eg- if in one file there is a variable
    and in another file there is another variable of the same name, the former vari8able will change itself
    according to the new value
*/


// accountId=34 //cannot change const values
console.table([accountCity, accountPassword, accountEmail, accountId])
//semicolon lagaane-na lagaane se farak nhi padta