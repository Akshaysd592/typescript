function detectType(val:number| string){
    if(typeof(val) === "string"){
        return val.toLowerCase()
    }
   
  
    return val+3;
}


function provideId(id:string| null){
 if(!id){
    console.log("Please provide Id")
    return ;
 }

  id.toLowerCase()
}

interface User{
    name:String,
    emails: String
}

interface Admin{
    name:string,
    emails: string,
    isAdmin:boolean
}

function checkAdmin(val:User| Admin){
 if("isAdmin" in val){ // checking isAdmin available for val provided 
    val.isAdmin = true;
 }
 // other properties are same for both User and Admin so no problem
 val.name 
}


// Instanceof

function Logvalue(val: Date | string){
    if(val instanceof Date){ // val is instance of Date
        console.log(val.getTime())
    }
    else{
        console.log(val.toLowerCase())
    }
}


type Fish = {swim :()=> void}
type Bird = {fly : ()=> void }

function isFish(pet: Fish | Bird): pet is Fish{ // to return that pet is Fish not a bird
   return  (pet as  Fish ).swim !== undefined
}

function getFood(pet : Fish | Bird){
    if(isFish(pet)){
        pet 
        return "Fish Food"
    }
    else{
        pet
        return "Bird Food"
    }
}