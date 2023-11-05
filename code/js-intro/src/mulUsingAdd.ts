import { add } from './add'
console.log("Running mulUsingAdd.js")
export function mul(a: number, b: number) {
    let acc = 0
    for (let i = 0; i < b; ++i) {
        acc = add(acc, a)
    }
    return acc
}
