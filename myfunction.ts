function addNum(num:number):number{ // now this fuction will accept only number type
     console.log(num.toString());
    return num+2;
    // return true;
}

function getUpper(val:string){
    return val.toUpperCase()
}



function signUpUser(name:string,email:string,isPaid:boolean){

 return name
}


let loginUser = (email:string,name:string,isPaid:boolean = false)=>{ // if want only two arguments to be passed then user = false after datatype
   return 0;
}



function getValue(myVal:number){
    if(myVal>5){
        return true;
    }

    return "200 Ok"
}




const getHello = (s:string):string=>{
    return ""
}


const heros = ["thor","spiderman","ironman"];
const heros1 = [2,3,4]

heros.map((hero):string=>{
    return `Hero is ${hero}`
}
    )

function consoleError(arrmsg: string):void{
    console.log(arrmsg)
   
}

function handleError(arrmsg : string):never{
    throw new Error(arrmsg);
}

console.log(addNum(4))

getUpper("8")

signUpUser("AKSHAY","akshay",true)

loginUser("a","a@gmail.com") // if want only two arguments to be passed then 

export {};

