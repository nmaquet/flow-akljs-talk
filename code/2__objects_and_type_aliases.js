// @flow

/*

* Structural typing for objects
* Type aliases

 */

const papaSmurf = { name: "Papa Smurf", age: 300, isAwake: true };

function toString(smurf) {
    return `${smurf.name} is ${smurf.age} years old`;
}

toString(papaSmurf);