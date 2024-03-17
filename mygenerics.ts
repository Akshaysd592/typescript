const score :Array<number> = []

const names : Array<string> = []

function identityone(val: boolean| number): boolean  | number{
    return val;
}

function identityTwo (val:any):any{
    return val;
}


function identityThree<Type>(val:Type):Type{ // return type similar to the input type passed
    return val;
}


identityThree(3)


function identityFour<T>(val:T):T{
    return val;
}


identityFour("54")


interface Bottle{
    branch:string,
    type: number
}


identityFour<Bottle>




function getSearchProducts<T>(products:T[]):T{
      return products[3]
}


// for arrow function generic function

const getMoreSearchProducts = <T,> (product:T[]):T=>{
    //taken array as parameter but returning only one value of that type
     return product[3]
}

interface Database{
    connection:string,
    username: string,
    password: string 
}

function anotherFunction <T, U extends Database>(valOne:T , valTwo :U):object{
    return {valOne,valTwo}
}


// anotherFunction(3,{})

class Sellable<T>{
    public cart : T[]  = []


    addToCart(product:T){
     this.cart.push(product)
    }
}