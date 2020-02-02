const { reduceStackTrace } = require('./internal/error-helper');

class Proof {
    that(name, func) {
        func();
    }

    axiom(func) {
        func();
    }
}

function prove(name, proofFunc) {
    const validName = typeof name === "string";
    const validProofFunc = typeof proofFunc === "function";
    const validInput = validName && validProofFunc;
    if (!validInput) {
        const errorMessage = "A proof must have two arguments: A name and a function that proves";
        throw reduceStackTrace(new Error(errorMessage), 1);
    }

    const context = new Proof();
    // Execute the proof
    proofFunc(context);

    const result = {
        name,
        issues: []
    };

    return result;
}

exports.prove = prove;