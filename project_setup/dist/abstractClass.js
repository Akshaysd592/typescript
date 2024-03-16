"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 8;
    }
}
// const ak = new TakePhoto(
//     "good","blackandwhite"
// )
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter); // to override the data 
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createStory() {
        console.log("this is story");
    }
}
const ak = new Instagram(// can create class of inherited TakePhoto using Instagram class
"good", "blackandwhite", 5);
ak.getReelTime;
