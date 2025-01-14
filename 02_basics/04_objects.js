// const regularUser = new Object(); single object
const user = {
    name : "rohin",
    age : 18
}
const regularUser = {
    fullName : {
        userFullName : {
            firstName : "rohin",
            lastName : "gupta"
        }
    }
} //<- literal object
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName);
console.log(regularUser.fullName?.userFullName); //agar firstName exist krta tohi execute hoga aage waala part
                                                 // nahi toh if else lagane padenge


const obj1 = {1 : 'a', 2 : 'b'}
const obj2 = {3 : 'a', 4 : 'b'}

const obj3 = Object.assign({}, obj1, obj2) // puts all the attributes of obj1 nd obj2 in the epmty object {}
                                           // the first paramenter always acts as the


console.log(Object.keys(user)); //<-gives all the keys in array form
console.log(Object.values(user));//<-gives all the values in array from
console.log(Object.entries(user));//<-gives all the [key : value] entries in an array [[], [], [], ....]

//to access the keys in objects we have to do 'objectname'.'keyname'. To avoid this 

const {name} = user //const {keyName} = objectName
//Now we can just use the keyname as a standalone reference to the objectName.keyName
