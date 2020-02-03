import { reduceStackTrace } from "./internal/errors";
import { Report } from "./report";

export function prove(name: string, proofFunc: () => void): Report;
export function prove(name: string, proofFunc: () => Promise<unknown>): Promise<Report>;
export function prove(name: string, proofFunc: () => (void | Promise<unknown>)) {
    validateProveArguments(name, proofFunc);

    let report: Report = {
        name,
        state: undefined as any,
        issues: [],
    };

    // Define callbacks
    function onPass() {
        report.state = 'pass';
        return report;
    }

    function onError(error: any) {
        report.state = 'error';
        report.issues.push({
            type: 'error',
            error: error,
        });
        return report;
    }

    // Return the report.
    return runProof(proofFunc, onPass, onError)
}

function runProof(proofFunc: () => (void | Promise<unknown>), onPass: () => Report, onError: (error: any) => Report) {
    try {
        const result = proofFunc();
        if (result instanceof Promise) {
            // Async-path
            return result
                .then(onPass)
                .catch(onError);
        }

        return onPass();
    } catch (error) {
        return onError(error);
    }
}
function validateProveArguments(name: string, proofFunc: () => void) {
    const validName = typeof name === "string";
    const validProofFunc = typeof proofFunc === "function";
    const validInput = validName && validProofFunc;
    if (!validInput) {
        const errorMessage = "A proof must have two arguments: A name and a function that proves";
        throw reduceStackTrace(new Error(errorMessage), 2);
    }
}
