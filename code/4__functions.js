// @flow

/*

 Function types are (arg1: T1, arg2: T2, ...) => T

 */

type Smurf = {
    name: string,
    age: number,
    isAwake: boolean
}

const papaSmurf = { name: "Papa Smurf", age: 300, isAwake: true };
const smurfette = { name: "Smurfette", age: 150, isAwake: false};

type SmurfMetric = {
    name: string,
    measure: (s: Smurf) => number
}

function measureMetrics(smurf: Smurf, metrics: SmurfMetric[]): void {
    for (const metric of metrics) {
        smurf[metric.name] = metric.measure(smurf);
    }
}

measureMetrics(papaSmurf, [{name: 'nameLength', measure: (s) => s.name.length }]);