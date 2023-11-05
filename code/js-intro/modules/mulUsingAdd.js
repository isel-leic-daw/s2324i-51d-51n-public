import {add} from './add.js'
console.log("Running mulUsingAdd.js")
export function mul(a,b) {
    let acc = 0
    for(let i=0; i<b; ++i) {
        acc = add(acc, a)
    }
    return acc
}
