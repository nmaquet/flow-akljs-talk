// @flow

/*
 * any literal can be a type
 * union: type T = T1 | T2 | ...
 * intersection: type T = T1 & T2 & ...
 */

type Smurf = {
    name: string,
    age: number,
    status: 'awake' | 'sleeping' | 'zombie',
}

type Spell = string

type Wizard = {
    spells: Spell[]
}

type SmurfWizard = Smurf & Wizard;

const papaSmurf : SmurfWizard = {
    name: "Papa Smurf",
    age: 300,
    status: 'awake',
    spells: ["wingardium leviosa", "fireball"],
};