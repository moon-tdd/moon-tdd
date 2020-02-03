import { reduceStackTrace } from "./internal/errors";
import { Report, ReportState, ReportIssue } from "./report";

class Proof {
    that(name: string, func: Function) {
        func();
    }

    axiom(func: Function) {
        func();
    }
}

export function prove(name: string, proofFunc: (proof: Proof) => void): Report {
    const validName = typeof name === "string";
    const validProofFunc = typeof proofFunc === "function";
    const validInput = validName && validProofFunc;
    if (!validInput) {
        const errorMessage = "A proof must have two arguments: A name and a function that proves";
        throw reduceStackTrace(new Error(errorMessage), 1);
    }

    const context = new Proof();

    // Execute the proof
    let issues: ReportIssue[] = [];
    let state: ReportState;
    try {
        proofFunc(context);
        state = 'pass';
    } catch (error) {
        state = 'error';
        issues.push({
            type: 'error',
            error: error,
        })
    }

    return {
        name: name,
        issues,
        state,
    };
}
