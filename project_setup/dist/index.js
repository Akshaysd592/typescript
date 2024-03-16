"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _User_name;
class User {
    // private declared can not be used outside the class 
    constructor(email, name) {
        _User_name.set(this, void 0); // can also declare private using #
        this.city = ""; // just declared but not used
        this.email = email;
        __classPrivateFieldSet(this, _User_name, name, "f");
    }
}
_User_name = new WeakMap();
// # available in javascript but no private keyword available in js
// professional class declaration
class Users {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // private _courseCount = 1
        this._courseCount = 1;
        this.city = "jaipur";
    }
    // private method
    deleteToken() {
        console.log("This is token");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than one");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends Users {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const akshay = new Users("aks@gmail.com", "akshay");
// akshay.city = "a"
akshay.courseCount = 6;
console.log(akshay.courseCount);
