// @flow

/*

* Structural typing for objects
* Type aliases

 */

type Smurf = {
    name: string,
    age: number,
    isAwake: boolean
}

const papaSmurf = { name: "Papa Smurf", age: 300, isAwake: true };

function toString(smurf: Smurf): string {
    return `${smurf.name} is ${smurf.age} years old`;
}

toString(papaSmurf);