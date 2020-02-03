import {
    createEnsureError,
    createInvalidResponseError
} from "./internal/errors";


// Internal truthy (don't depend on the external one, 
// since that makes it impossible to verify if that one 
// is broken).
const is_truthy = (v: any) => !!v;

export function ensure(value: any, test?: Function, ...others: any[]) {
    if (arguments.length > 1 && !test) {
        throw new Error("Expecting the second parameter to be a function, but was falsy");
    }

    test = test || is_truthy;
    const testType = typeof test;
    if (testType !== "function") {
        throw new Error(`${test} is not a function, but a ${testType}`);
    }


    const testResult = test(value, ...others);
    if (typeof testResult === 'boolean') {
        if (testResult) return;
        throw createEnsureError(value, test, ...others);
    }

    if (testResult instanceof Promise) {
        throw createInvalidResponseError(test, "Promise");
    } else {
        throw createInvalidResponseError(test, typeof testResult);
    }
}

