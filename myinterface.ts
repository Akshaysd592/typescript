interface Users { // interface makes compulsion to use the names declared 
    readonly dbId: number
   email: string,
   userId: number 
   googleId? : string

   startTrial:()=> string // function also declared in interface which is returning string here
   startTry(): string // another way for function declaration
   getCoupen(couponname:string):number
} // to make the fields that is required 

interface Users{ // interface allows redeclare Users still it will work same but type do not allows to redeclare
    githubid: string
}

interface Admins extends Users  { //inherits properties of Users 
  role:"admin"| "ta"|"learner"
}




const akshaysd : Admins = {dbId:1,email: "akshay@gmail.com",userId:5,
githubid:"akshay", role:"admin",
startTrial:()=>{
    return "trial started"
},startTry:()=>{
       return "start trial"
},getCoupen:(name:"akshay")=>{ // no need to match parameters
    return 10
}}
