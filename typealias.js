"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    // parameter with arguments of type myObject and want return type also myObject type
    return user;
}
createUser({ name: "akshay", email: "a@gmail.com", isPaid: true });
var myUser = {
    _id: [1, 2, 3],
    name: "Ak",
    email: "A@gmail.com",
    isActive: true
};
myUser.isActive = false;
myUser._id.push(4);
console.log(myUser._id);
