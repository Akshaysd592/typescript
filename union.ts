let score : number | string  = 33

score = 44

score = "55"
// score = true



type User = {
    name: string;
    id: number
}

type Admin ={
    userName: string,
    id: number
}

type newUser = User | Admin 

let akshay : newUser = {userName:"akshay",id:4}


function getDbId(id:number | string){
    // id.toLowerCase() // typescript will make checking that this function is available for both number and string type 
                     // else gives error so need check then use function
 if(typeof(id)=="string"){
    return id.toLowerCase();
 }
     
    console.log(`Db id is ${id}`)
}

getDbId(5)
getDbId("6")


//array 
const data : number[] = [3,44,55]
const data2 :string[] = ["34"]

const data3  : string[] | number[] = [] //  either number array or string array not both combination

const data4 : (string | number ) [] = ["ak", 4] // combination of both

let pi : 3.14 = 3.14

// pi = 3.245 // this gives error since values should be 3.14 for pi 

 // To provide specific type 
let seatAllotment : "aisle"| "middle"| "window"

seatAllotment = "middle"

// seatAllotment = "crew" // this will give an error 