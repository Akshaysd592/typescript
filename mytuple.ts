

let User : [string,number , boolean]
// to get specific order first string , then number and then boolean 

// User  = ["ak",true,4] // this will give an error
User  = ["ak",4, true]


let rgb : [number, number,number] = [255,255,255]


type Users = [number,string]


const newUser : Users = [11, "ak"]

newUser[1] = "akshay"
export {}