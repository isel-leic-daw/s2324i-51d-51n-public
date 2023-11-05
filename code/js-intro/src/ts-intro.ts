/* eslint-disable @typescript-eslint/no-unused-vars */
// Because this is just an example file

// primitive types
const aString: string = "hello"
const aNumber: number = 42.0
const aBoolean: boolean = true

// arrays
const aStringArray: Array<string> = ["hello", "world"]

// objects
type Student = { name: string, nbr: number }
const alice: Student = {
    name: "Alice",
    nbr: 1234
}

// inline type definition
const bob: { name: string, nbr: number } = {
    name: "Bob",
    nbr: 1235
}

// Structural Type System
type TypeStructurallyIdenticalToAStudent = { name: string, nbr: number }
const foo: TypeStructurallyIdenticalToAStudent = alice

// Sum types
function doSomething(input: string | number) {

    if (typeof input === "string") {
        // type narrowed to `string`
        console.log(input.toUpperCase())
    } else {
        // type narrowed to `number`
        console.log(input - 3)
    }
}

const arrayOfStringsOrNumbers: Array<string | number> = ["Alice", 12345]

// Discriminated sum types
type Result = 
| {kind: "network-error", error: Error}
| {kind: "http-response", status: number}

function doAnotherThing(result: Result) {
    switch(result.kind) {
        case "network-error": {
            // type narrowed to {kind: "network-error", error: Error}
            console.log(result.error)
            break;
        }
        case "http-response": {
            // type narrowed to {kind: "http-response", status: number}
            console.log(result.kind)
            break;
        }
    }
}
