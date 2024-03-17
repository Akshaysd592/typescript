"use strict";
function detectType(val) {
    if (typeof (val) === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide Id");
        return;
    }
    id.toLowerCase();
}
function checkAdmin(val) {
    if ("isAdmin" in val) { // checking isAdmin available for val provided 
        val.isAdmin = true;
    }
    // other properties are same for both User and Admin so no problem
    val.name;
}
// Instanceof
function Logvalue(val) {
    if (val instanceof Date) { // val is instance of Date
        console.log(val.getTime());
    }
    else {
        console.log(val.toLowerCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        pet;
        return "Bird Food";
    }
}
