
// creating use defined type 
type myObject ={
    name: string;
    email: string;
    isPaid:boolean;
}


function createUser (user:myObject):myObject{
    // parameter with arguments of type myObject and want return type also myObject type
       return user;
}

createUser({name:"akshay",email:"a@gmail.com",isPaid:true})



type User = {
   readonly  _id :number[] // not changable
    name:string
    email : string
    isActive: boolean
    creditcardDetails?: number // ? to show that it is optional 
}

let myUser : User ={
    _id: [1,2,3],
    name:"Ak",
    email:"A@gmail.com",
    isActive:true
}


myUser.isActive = false;

myUser._id.push(4); // can also push value in array if readyonly also

console.log(myUser._id)
// myUser._id = "12344" // this will give an error because of readonly

type cardName ={
    name: string
}

type cardDate = {
    date: string
}


type cardUser = cardName & cardDate& {cvv: string}


let newUser : cardUser = {name:"sbi",date:"5 sep",cvv:"456"}








export {}