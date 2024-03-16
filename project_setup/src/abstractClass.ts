abstract class TakePhoto { // if used abstract can not create its object
    constructor( 
        public cameraMode: string,
        public filter: string
    ){

    }

   abstract createStory():void
   getReelTime():number{
    return 8
   }
}

// const ak = new TakePhoto(
//     "good","blackandwhite"
// )

class Instagram extends TakePhoto{
 constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
 ){
  super(cameraMode,filter) // to override the data 
 }

  createStory(): void {
      console.log("this is story")
  }



}

const ak = new Instagram( // can create class of inherited TakePhoto using Instagram class
    "good","blackandwhite",5
)

ak.getReelTime