import { reduceStackTrace } from './internal/error-helper';

class Proof {
    that(name: string, func: Function) {
        func();
    }

    axiom(func: Function) {
        func();
    }
}

export function prove(name: string, proofFunc: (proof: Proof) => void) {
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
