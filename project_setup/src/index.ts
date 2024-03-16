
class User{

   public  email:string // by default public class
    #name: string // can also declare private using #
  private  city : string = "" // just declared but not used
   // private declared can not be used outside the class 
    constructor(email:string,name:string){
          this.email = email;
          this.#name = name
    }
}
// # available in javascript but no private keyword available in js


// professional class declaration
class Users {


    // private _courseCount = 1
    protected _courseCount = 1;
    readonly city: string  = "jaipur"
    constructor(
        public email: string,
        private name: string
    ){
         
    }
 // private method
    private deleteToken(){
        console.log("This is token")
    }


    get getAppleEmail() :string{ // getter 
      return `apple ${this.email}`
    }


    get courseCount ():number{
        return this._courseCount
    }


    set courseCount(courseNum){ // don't give return  any type here in setter
       if(courseNum<=1){
        throw new Error("Course count should be more than one")
       }

       this._courseCount = courseNum
    }

}

class SubUser extends Users{
    isFamily : boolean = true

    changeCourseCount(){
        this._courseCount  = 4
    }
}

const akshay  = new Users("aks@gmail.com","akshay")
// akshay.city = "a"

akshay.courseCount = 6
console.log(akshay.courseCount)


