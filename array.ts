const superHeros: number[] = []
// also can be
const superHero : Array<number>= []


type User = {
    name : string;
    isActive?: boolean 

}


const newchange : number[][] = [
      [233,222,222]

]

const allUsers: User[] = [{name:"ak",isActive:true},{name:"akshay"}]
// or 
const newUser : Array<User> = [{name:"akshay"}]

// superHeros.push("hello") // gives error because of type number 
superHeros.push(4)


export {}