// @flow

/*

- any is a subtype and a supertype of all values
- mixed is a supertype of all values, but a subtype of none

 */


import _ from 'lodash';

type Smurf = {
    name: string,
    age: number,
    isAwake: boolean
}

const papaSmurf = { name: "Papa Smurf", age: 300, isAwake: true };
const smurfette = { name: "Smurfette", age: 150, isAwake: false};

function mkSmurf(arg: mixed): Smurf {

    if (typeof arg === 'string') {
        return { name: arg, age: 300, isAwake: true };
    }

    if (typeof arg === 'number') {
        return { name: "Smurf", age: arg, isAwake: true };
    }

    if (typeof arg === 'boolean') {
        return { name: "Smurf", age: 300, isAwake: arg};
    }

    throw new Error("invalid argument", arg);
}
