import { reduceStackTrace } from './internal/error-helper';

class Proof {
    that(name, func) {
        func();
    }

    axiom(func) {
        func();
    }
}

export function prove(name, proofFunc) {
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
