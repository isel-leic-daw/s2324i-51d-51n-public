// add
function add_module(require, exports) {
  console.log('Running add.js');
  exports.add = function add(a, b) {
    return a + b;
  }
}

function mulUsingAdd_module(require, exports) {
  // mulUsingAdd
  const { add } = require('./add.js');
  console.log('Running mulUsingAdd.js');
  exports.mul = function mul(a, b) {
    let acc = 0;
    for (let i = 0; i < b; ++i) {
      acc = add(acc, a);
    }
    return acc;
  }
}

// app
function app_module(require) {
  const { add } = require('./add.js');
  const { mul } = require('./mulUsingAdd.js');
  console.log('Running app.js');
  console.log(add(1, mul(2, 3)));
}

// bundler added code

const moduleTable = {
    './add.js': add_module,
    './mulUsingAdd.js': mulUsingAdd_module,
    './app.js': app_module
}

function require(name) {
    const moduleEntry = moduleTable[name]
    if(!moduleEntry) {
        throw new Error("module does not exist");
    }
    if(typeof moduleEntry === "function") {
        const exports = {}
        moduleEntry(require, exports)
        moduleTable[name] = exports
        return exports
    }
    if(typeof moduleEntry === "object") {
        return moduleEntry
    }
    throw new Error("invalid state")
}

require('./app.js')