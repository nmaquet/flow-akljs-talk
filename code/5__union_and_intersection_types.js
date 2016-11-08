// @flow

/*
 * any literal can be a type
 * union: type T = T1 | T2 | ...
 * intersection: type T = T1 & T2 & ...
 */

type Smurf = {
    name: string,
    age: number,
    isAwake: true // TODO: zombie ???
}

type Spell = string

// type Wizard =

// type SmurfWizard =

// const papaSmurf =