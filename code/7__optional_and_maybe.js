// @flow

/*

 { foo? : T } is optionally T, meaning T | void
 { foo : ?T } is maybe T, meaning T | null | void

 */

type Smurf = {
    name: string,
    age?: number,
    isAwake?: boolean
}

